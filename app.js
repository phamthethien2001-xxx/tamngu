(() => {
'use strict';
const D = window.TN_DATA;
const LANGS = ['zh', 'th', 'ja'];
const PHASES = [
  { n: 'Phát âm', c: 'Nền tảng' }, { n: 'Sinh tồn', c: 'A1' },
  { n: 'Đời sống', c: 'A2' }, { n: 'Giao tiếp tự nhiên', c: 'B1' }
];
const PH = {}, UNIT = {};
LANGS.forEach(l => D[l].units.forEach((u, ui) => {
  u.lang = l; u.idx = ui; UNIT[u.id] = u;
  u.items = u.phrases.map((p, i) => (PH[u.id + ':' + i] = { id: u.id + ':' + i, lang: l, unit: u.id, t: p[0], r: p[1], v: p[2], n: p[3] || '' }));
}));
const TOTAL_UNITS = LANGS.reduce((s, l) => s + D[l].units.length, 0);

/* ---------- dates ---------- */
const pad = n => String(n).padStart(2, '0');
const ymd = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const today = () => ymd(new Date());
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return ymd(d); };
const diffDays = (a, b) => Math.round((parse(b) - parse(a)) / 86400000);

/* ---------- state ---------- */
const KEY = 'tamngu.v1';
const defState = () => ({
  v: 1, start: today(),
  settings: { name: 'Thiện', goal: 60, rate: 0.9, loops: 3, gap: 2.5, voice: {}, unlockAll: false, theme: 'auto' },
  units: {}, cards: {}, custom: [], days: {}, xp: 0, badges: {},
  stats: { rev: 0, ear: 0, earTotal: 0, shadow: 0, goalDays: 0, best: 0, notesMade: 0 }
});
function load() {
  const base = defState();
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && s.v) return Object.assign(base, s, { settings: Object.assign(base.settings, s.settings), stats: Object.assign(base.stats, s.stats) });
  } catch (e) {}
  return base;
}
let S = load();
let storageOk = true;
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { if (storageOk) { storageOk = false; toast('Không lưu được dữ liệu trên trình duyệt này'); } } }
function day(d) { const k = d || today(); return (S.days[k] = S.days[k] || { sec: 0, xp: 0, zh: 0, th: 0, ja: 0, rev: 0, goal: false, sx: 0 }); }

/* ---------- utils ---------- */
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (sel, el = document) => el.querySelector(sel);
const wait = ms => new Promise(r => setTimeout(r, ms));
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmtMin = sec => { const m = Math.round(sec / 60); return m >= 60 ? Math.floor(m / 60) + ' giờ ' + (m % 60 ? (m % 60) + ' phút' : '') : m + ' phút'; };
let lastAct = Date.now();
const touch = () => { lastAct = Date.now(); };
['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(e => addEventListener(e, touch, { passive: true }));

/* ---------- icons ---------- */
const IC = {
  play: '<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',
  stop: '<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none"/>',
  loop: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  ears: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>', plus: '<path d="M12 5v14M5 12h14"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>', trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
  cards: '<rect x="3" y="7" width="14" height="13" rx="2"/><path d="M7 4h12a2 2 0 0 1 2 2v11"/>',
  note: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h5"/>',
  chart: '<path d="M4 20V11M10 20V4M16 20v-7M21 20H3"/>',
  ear: '<path d="M7 10a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 10a2 2 0 0 1 4 0"/>',
  down: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>', copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>'
};
const ic = n => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + '</svg>';

/* ---------- abstract art ---------- */
function art(kind) {
  const o = '<svg class="art" viewBox="0 0 400 220" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">';
  if (kind === 'zh') return o +
    '<circle cx="345" cy="70" r="120" fill="#B51C30"/><circle cx="345" cy="70" r="82" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="2"/>' +
    '<circle cx="345" cy="70" r="40" fill="#F25A6B"/>' +
    '<g fill="#fff" fill-opacity=".2"><rect x="230" y="150" width="22" height="22" transform="rotate(45 241 161)"/><rect x="268" y="176" width="12" height="12" transform="rotate(45 274 182)"/></g>' +
    '<path d="M180 220c40-60 90-70 140-40s70 30 80 25" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="2"/>' +
    '<g fill="#fff" fill-opacity=".35"><circle cx="210" cy="40" r="3"/><circle cx="226" cy="40" r="3"/><circle cx="242" cy="40" r="3"/><circle cx="210" cy="56" r="3"/><circle cx="226" cy="56" r="3"/><circle cx="242" cy="56" r="3"/></g></svg>';
  if (kind === 'th') return o +
    '<path d="M150 220c30-40 70-40 100 0s70 40 100 0 50-40 70-20v40z" fill="#D98A00"/>' +
    '<path d="M190 220c30-30 60-30 90 0s60 30 90 0 30-20 30-20v20z" fill="#FFC75A"/>' +
    '<g transform="translate(330 70)"><ellipse rx="22" ry="62" fill="#FFD27A" transform="rotate(0)"/><ellipse rx="22" ry="62" fill="#E89A00" fill-opacity=".85" transform="rotate(40)"/><ellipse rx="22" ry="62" fill="#E89A00" fill-opacity=".85" transform="rotate(-40)"/><circle r="16" fill="#FFF1CC"/></g>' +
    '<circle cx="230" cy="44" r="10" fill="none" stroke="#2A1A00" stroke-opacity=".25" stroke-width="2"/></svg>';
  if (kind === 'ja') return o +
    '<circle cx="330" cy="120" r="110" fill="#5361D6"/><circle cx="330" cy="120" r="110" fill="none" stroke="#fff" stroke-opacity=".15" stroke-width="2" transform="translate(-26 -18)"/>' +
    '<path d="M260 10A70 70 0 0 1 400 10" fill="#7A86E6"/>' +
    '<g stroke="#fff" stroke-opacity=".22" stroke-width="2"><path d="M190 30l30 60M214 20l30 60M238 10l30 60M180 120l22 44M204 112l22 44"/></g>' +
    '<circle cx="360" cy="185" r="14" fill="#E3E6FA" fill-opacity=".9"/></svg>';
  return '<svg class="art art-home" viewBox="180 0 220 220" preserveAspectRatio="xMaxYMin meet" aria-hidden="true">' +
    '<g><circle cx="300" cy="78" r="70" fill="#D7263D"/><circle cx="352" cy="128" r="70" fill="#F2A007" style="mix-blend-mode:screen"/><circle cx="268" cy="146" r="70" fill="#3949C6" style="mix-blend-mode:screen"/></g>' +
    '<circle cx="306" cy="118" r="118" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/>' +
    '<g fill="#fff" fill-opacity=".22"><circle cx="160" cy="30" r="2.5"/><circle cx="176" cy="30" r="2.5"/><circle cx="192" cy="30" r="2.5"/><circle cx="160" cy="46" r="2.5"/><circle cx="176" cy="46" r="2.5"/><circle cx="192" cy="46" r="2.5"/></g></svg>';
}
const emptyArt = '<svg viewBox="0 0 120 90" aria-hidden="true"><circle cx="48" cy="40" r="24" fill="var(--zh)" fill-opacity=".8"/><circle cx="72" cy="40" r="24" fill="var(--th)" fill-opacity=".8"/><circle cx="60" cy="60" r="24" fill="var(--ja)" fill-opacity=".8"/></svg>';

/* ---------- levels, streak, schedule ---------- */
const thr = L => 50 * (L - 1) * L;
const levelOf = xp => { let L = 1; while (xp >= thr(L + 1)) L++; return L; };
const TITLES = [[1, 'Khách du lịch'], [3, 'Người mới đến'], [5, 'Người hàng xóm'], [8, 'Bạn bè bản xứ'], [12, 'Người kể chuyện'], [17, 'Công dân ba nước']];
const titleOf = L => TITLES.filter(t => L >= t[0]).pop()[1];
const activeDay = d => { const x = S.days[d]; return !!x && (x.sec >= 300 || x.xp >= 20); };
function streak() { let d = today(), c = 0; if (!activeDay(d)) d = addDays(d, -1); while (activeDay(d)) { c++; d = addDays(d, -1); } return c; }
const weekNo = () => Math.max(1, Math.floor(diffDays(S.start, today()) / 7) + 1);
function activeLangs() { if (S.settings.unlockAll) return LANGS.slice(); const w = weekNo(); return w <= 6 ? ['zh'] : w <= 14 ? ['zh', 'th'] : LANGS.slice(); }
const unlockWeek = l => ({ zh: 1, th: 7, ja: 15 })[l];
const nextUnit = l => D[l].units.find(u => !(S.units[u.id] && S.units[u.id].done));
const doneIn = l => D[l].units.filter(u => S.units[u.id] && S.units[u.id].done).length;
const phaseUnits = (l, p) => D[l].units.filter(u => u.phase === p);
const phaseDone = (l, p) => phaseUnits(l, p).every(u => S.units[u.id] && S.units[u.id].done);
function plan() {
  const G = S.settings.goal, rev = Math.max(10, Math.round(G * 0.25)), nm = G - rev, A = activeLangs();
  const items = [{ k: 'review', min: rev }];
  if (A.length === 1) items.push({ k: 'new', l: A[0], min: nm });
  else if (A.length === 2) { const a = Math.round(nm * 0.55); items.push({ k: 'new', l: 'zh', min: a }, { k: 'new', l: 'th', min: nm - a }); }
  else {
    const wd = new Date().getDay();
    if (wd === 0) items.push({ k: 'free', min: nm });
    else { const a = Math.round(nm / 3); items.push({ k: 'new', l: 'zh', min: a }, { k: 'new', l: [1, 3, 5].includes(wd) ? 'th' : 'ja', min: nm - a }); }
  }
  return items;
}
function phaseText() {
  const A = activeLangs();
  if (S.settings.unlockAll) return 'Đang mở cả ba tiếng';
  return A.length === 1 ? 'Giai đoạn chỉ tiếng Trung' : A.length === 2 ? 'Trung và Thái' : 'Cả ba tiếng';
}

/* ---------- items and cards ---------- */
function getItem(id) {
  if (!id) return null; if (PH[id]) return PH[id];
  if (id.startsWith('c:')) { const c = S.custom.find(x => x.id === id.slice(2)); if (c) return Object.assign({ id }, c); }
  return null;
}
const dueIds = langs => Object.keys(S.cards).filter(id => { const it = getItem(id); return it && S.cards[id].due <= today() && langs.includes(it.lang); });
function addCard(id, due) { if (!S.cards[id]) S.cards[id] = { due: due || today(), iv: 0, ef: 2.5, reps: 0, lapses: 0 }; }
function schedule(c, q) {
  const n = Object.assign({}, c);
  if (q === 1) { n.reps = 0; n.iv = 0; n.lapses++; n.ef = Math.max(1.3, n.ef - 0.2); n.due = today(); return n; }
  if (n.reps === 0) n.iv = { 2: 1, 3: 1, 4: 3 }[q];
  else if (n.reps === 1) n.iv = { 2: 2, 3: 4, 4: 6 }[q];
  else n.iv = Math.max(n.iv + 1, Math.round(n.iv * (q === 2 ? 1.2 : q === 3 ? n.ef : n.ef * 1.3)));
  n.ef = Math.max(1.3, n.ef + { 2: -0.15, 3: 0, 4: 0.15 }[q]); n.reps++; n.due = addDays(today(), n.iv);
  return n;
}
const ivLabel = (c, q) => { const n = schedule(c, q); return q === 1 ? 'hôm nay' : n.iv + ' ngày'; };

/* ---------- XP, badges, celebration ---------- */
function addXP(n) {
  const before = levelOf(S.xp); S.xp += n; day().xp += n; save();
  const after = levelOf(S.xp);
  if (after > before) { toast('Lên cấp ' + after + ': ' + titleOf(after)); confetti(); }
}
const BADGES = [
  { id: 'first', n: 'Bước đầu tiên', d: 'Hoàn thành bài đầu tiên', g: '1', c: 'ink', t: () => Object.values(S.units).some(u => u.done) },
  { id: 'p0-zh', n: 'Tai nghe thanh', d: 'Xong phần phát âm tiếng Trung', g: '聲', c: 'zh', t: () => phaseDone('zh', 0) },
  { id: 'p0-th', n: 'Năm thanh Thái', d: 'Xong phần phát âm tiếng Thái', g: 'ก', c: 'th', t: () => phaseDone('th', 0) },
  { id: 'p0-ja', n: 'Nhịp tiếng Nhật', d: 'Xong phần phát âm tiếng Nhật', g: 'あ', c: 'ja', t: () => phaseDone('ja', 0) },
  { id: 'a1-zh', n: 'Sống ổn ở Đài Loan', d: 'Hoàn thành A1 tiếng Trung', g: 'A1', c: 'zh', t: () => phaseDone('zh', 1) },
  { id: 'a1-th', n: 'Sống ổn ở Thái', d: 'Hoàn thành A1 tiếng Thái', g: 'A1', c: 'th', t: () => phaseDone('th', 1) },
  { id: 'a1-ja', n: 'Sống ổn ở Nhật', d: 'Hoàn thành A1 tiếng Nhật', g: 'A1', c: 'ja', t: () => phaseDone('ja', 1) },
  { id: 'a2-zh', n: 'Đời sống Đài Loan', d: 'Hoàn thành A2 tiếng Trung', g: 'A2', c: 'zh', t: () => phaseDone('zh', 2) },
  { id: 'a2-th', n: 'Đời sống Thái', d: 'Hoàn thành A2 tiếng Thái', g: 'A2', c: 'th', t: () => phaseDone('th', 2) },
  { id: 'a2-ja', n: 'Đời sống Nhật', d: 'Hoàn thành A2 tiếng Nhật', g: 'A2', c: 'ja', t: () => phaseDone('ja', 2) },
  { id: 'b1-zh', n: 'Nói tự nhiên: Trung', d: 'Hoàn thành toàn bộ tiếng Trung', g: 'B1', c: 'zh', t: () => phaseDone('zh', 3) && doneIn('zh') === D.zh.units.length },
  { id: 'b1-th', n: 'Nói tự nhiên: Thái', d: 'Hoàn thành toàn bộ tiếng Thái', g: 'B1', c: 'th', t: () => doneIn('th') === D.th.units.length },
  { id: 'b1-ja', n: 'Nói tự nhiên: Nhật', d: 'Hoàn thành toàn bộ tiếng Nhật', g: 'B1', c: 'ja', t: () => doneIn('ja') === D.ja.units.length },
  { id: 'poly', n: 'Ba thứ tiếng', d: 'Đã học bài ở cả ba tiếng', g: '三', c: 'ink', t: () => LANGS.every(l => doneIn(l) > 0) },
  { id: 's3', n: '3 ngày liền', d: 'Chuỗi học 3 ngày', g: '3', c: 'th', t: () => S.stats.best >= 3 },
  { id: 's7', n: 'Một tuần bền bỉ', d: 'Chuỗi học 7 ngày', g: '7', c: 'zh', t: () => S.stats.best >= 7 },
  { id: 's30', n: 'Một tháng', d: 'Chuỗi học 30 ngày', g: '30', c: 'ja', t: () => S.stats.best >= 30 },
  { id: 's100', n: 'Trăm ngày', d: 'Chuỗi học 100 ngày', g: '100', c: 'ink', t: () => S.stats.best >= 100 },
  { id: 'r100', n: '100 lượt ôn', d: 'Ôn 100 thẻ', g: '100', c: 'ja', t: () => S.stats.rev >= 100 },
  { id: 'r1000', n: 'Nghìn lượt ôn', d: 'Ôn 1.000 thẻ', g: '1K', c: 'zh', t: () => S.stats.rev >= 1000 },
  { id: 'ear', n: 'Đôi tai vàng', d: '50 lần luyện âm đúng', g: '耳', c: 'th', t: () => S.stats.ear >= 50 },
  { id: 'notes', n: 'Nhà sưu tầm', d: 'Tự thêm 20 mục sổ tay', g: '20', c: 'ja', t: () => S.stats.notesMade >= 20 },
  { id: 'h10', n: '10 giờ học', d: 'Tổng 10 giờ học', g: '10h', c: 'zh', t: () => totalSec() >= 36000 },
  { id: 'h100', n: '100 giờ học', d: 'Tổng 100 giờ học', g: '100h', c: 'ink', t: () => totalSec() >= 360000 },
  { id: 'goal7', n: 'Kỷ luật', d: 'Đạt mục tiêu ngày 7 lần', g: '✓', c: 'th', t: () => S.stats.goalDays >= 7 },
  { id: 'star', n: 'Hoàn hảo', d: 'Đạt 3 sao một bài', g: '★', c: 'zh', t: () => Object.values(S.units).some(u => u.stars >= 3) }
];
const totalSec = () => Object.values(S.days).reduce((s, d) => s + (d.sec || 0), 0);
function checkBadges() {
  S.stats.best = Math.max(S.stats.best || 0, streak());
  let got = null;
  BADGES.forEach(b => { if (!S.badges[b.id] && b.t()) { S.badges[b.id] = today(); got = b; S.xp += 20; day().xp += 20; } });
  save();
  if (got) { setTimeout(() => { toast('Nhận con dấu mới: ' + got.n); confetti(); }, 500); }
}
const COLORS = { zh: '#D7263D', th: '#F2A007', ja: '#3949C6', ink: 'var(--ink)' };
function stamp(b, on) {
  const col = COLORS[b.c]; let h = 0; for (const ch of b.id) h = (h * 31 + ch.charCodeAt(0)) % 360;
  const rot = (h % 17) - 8, fs = b.g.length > 2 ? 20 : b.g.length > 1 ? 24 : 30;
  return '<div class="stamp' + (on ? '' : ' locked') + '"><svg viewBox="0 0 84 84" role="img" aria-label="' + esc(b.n) + '"><g transform="rotate(' + rot + ' 42 42)">' +
    '<circle cx="42" cy="42" r="38" fill="none" stroke="' + col + '" stroke-width="3" stroke-dasharray="4 3"/>' +
    '<circle cx="42" cy="42" r="31" fill="none" stroke="' + col + '" stroke-width="1.5"/>' +
    '<text x="42" y="' + (42 + fs * 0.36) + '" text-anchor="middle" font-size="' + fs + '" font-weight="700" fill="' + col + '" font-family="var(--tgt)">' + esc(b.g) + '</text>' +
    '<path d="M18 58h48" stroke="' + col + '" stroke-width="1.5"/></g></svg><b>' + esc(b.n) + '</b><br>' + esc(on ? 'Ngày ' + S.badges[b.id].split('-').reverse().join('/') : b.d) + '</div>';
}
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.createElement('div'); box.className = 'confetti';
  const cols = ['#D7263D', '#F2A007', '#3949C6'];
  box.innerHTML = Array.from({ length: 28 }, (_, i) => {
    const s = 8 + Math.random() * 10, shape = i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '50% 0';
    return '<i style="left:' + (Math.random() * 100) + '%;width:' + s + 'px;height:' + s + 'px;background:' + cols[i % 3] + ';border-radius:' + shape + ';animation-delay:' + (Math.random() * 0.3) + 's"></i>';
  }).join('');
  document.body.appendChild(box); setTimeout(() => box.remove(), 2200);
}
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2600); }

/* ---------- speech ---------- */
let voices = [];
const hasTTS = 'speechSynthesis' in window;
function loadVoices() { if (hasTTS) voices = speechSynthesis.getVoices(); }
if (hasTTS) { loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); if (route().v === 'settings') render(); }; }
const nl = v => v.lang.replace('_', '-');
function voicesFor(l) { const code = D[l].tts, pre = code.slice(0, 2); return voices.filter(v => nl(v).toLowerCase().startsWith(pre)); }
function pickVoice(l) {
  const want = S.settings.voice[l]; if (want) { const v = voices.find(x => x.name === want); if (v) return v; }
  const code = D[l].tts, list = voicesFor(l);
  const exact = list.filter(v => nl(v) === code), pool = exact.length ? exact : l === 'zh' ? list.filter(v => /HK|TW|Hant/i.test(nl(v))).concat(list) : list;
  return pool.find(v => /premium|enhanced|natural|neural|online/i.test(v.name)) || pool[0] || null;
}
const cleanTxt = t => t.replace(/[〜~…]/g, '').replace(/\s*\/\s*/g, '、');
let token = 0;
function speak(text, l, rate) {
  return new Promise(res => {
    if (!hasTTS) { toast('Thiết bị không hỗ trợ giọng đọc'); return res(); }
    touch();
    const u = new SpeechSynthesisUtterance(cleanTxt(text));
    u.lang = D[l].tts; const v = pickVoice(l); if (v) u.voice = v; u.rate = rate || S.settings.rate;
    let done = false; const fin = () => { if (!done) { done = true; clearTimeout(tm); touch(); res(); } };
    const tm = setTimeout(fin, 2500 + text.length * 380 / u.rate);
    u.onend = fin; u.onerror = fin;
    if (speechSynthesis.speaking || speechSynthesis.pending) { speechSynthesis.cancel(); setTimeout(() => speechSynthesis.speak(u), 80); }
    else speechSynthesis.speak(u);
  });
}
function stopAll() {
  token++; if (hasTTS) speechSynthesis.cancel();
  if (rec.mr && rec.mr.state === 'recording') { rec.silent = true; rec.mr.stop(); }
  document.querySelectorAll('.ctrl.on,.btn.on').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('[data-a=loop] span').forEach(x => { x.textContent = 'Nhại'; });
  document.querySelectorAll('[data-a=playall] span').forEach(x => { x.textContent = 'Nhại cả bài'; });
}
async function loopPhrase(item, btn) {
  const my = ++token; btn && btn.classList.add('on');
  for (let i = 0; i < S.settings.loops; i++) {
    if (my !== token) return;
    await speak(item.t, item.lang);
    if (my !== token) return;
    if (btn) btn.lastElementChild.textContent = 'Nói ' + (i + 1) + '/' + S.settings.loops;
    await wait(Math.max(S.settings.gap * 1000, item.t.length * 160));
  }
  if (my !== token) return;
  if (btn) { btn.classList.remove('on'); btn.lastElementChild.textContent = 'Nhại'; }
  S.stats.shadow++; const d = day(); if (d.sx < 40) { d.sx++; addXP(1); } else save();
}
async function playList(items, btn) {
  const my = ++token; btn.classList.add('on'); btn.lastElementChild.textContent = 'Dừng';
  for (const it of items) {
    if (my !== token) break;
    const row = document.querySelector('[data-row="' + CSS.escape(it.id) + '"]');
    if (row) { row.scrollIntoView({ block: 'center', behavior: 'smooth' }); row.style.background = 'var(--Ls)'; }
    await speak(it.t, it.lang);
    if (my === token) await wait(Math.max(S.settings.gap * 1000, it.t.length * 160));
    if (row) row.style.background = '';
  }
  btn.classList.remove('on'); btn.lastElementChild.textContent = 'Nhại cả bài';
}

/* recording */
const rec = { mr: null, urls: {}, silent: false };
async function toggleRec(id, btn) {
  if (rec.mr && rec.mr.state === 'recording') { rec.mr.stop(); return; }
  stopAll();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream), chunks = [];
    mr.ondataavailable = e => chunks.push(e.data);
    mr.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const blob = new Blob(chunks, { type: mr.mimeType || 'audio/mp4' });
      if (rec.urls[id]) URL.revokeObjectURL(rec.urls[id]);
      rec.urls[id] = URL.createObjectURL(blob); rec.mr = null;
      const box = document.querySelector('[data-ctrls="' + CSS.escape(id) + '"]'); if (box) box.outerHTML = ctrls(getItem(id));
      if (rec.silent) { rec.silent = false; return; }
      if (box) compare(id);
    };
    mr.start(); rec.mr = mr; btn.classList.add('on'); btn.lastElementChild.textContent = 'Dừng ghi';
    setTimeout(() => { if (mr.state === 'recording') mr.stop(); }, 10000);
  } catch (e) { toast('Không mở được micro. Hãy dùng bản đã cài lên điện thoại và cho phép micro.'); }
}
const playUrl = url => new Promise(res => { const a = new Audio(url); a.onended = res; a.onerror = res; a.play().catch(res); });
async function compare(id) { const it = getItem(id); const my = ++token; await speak(it.t, it.lang); if (my !== token) return; await wait(300); await playUrl(rec.urls[id]); }

/* speech recognition */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function listen(l) {
  return new Promise(res => {
    try {
      const r = new SR(); r.lang = D[l].tts; r.interimResults = false; r.maxAlternatives = 3;
      let got = false;
      r.onresult = e => { got = true; res(Array.from(e.results[0]).map(a => a.transcript)); };
      r.onerror = () => { if (!got) res(null); }; r.onend = () => { if (!got) res(null); };
      r.start();
    } catch (e) { res(null); }
  });
}
const normT = s => s.toLowerCase().replace(/[\s\p{P}\p{S}]/gu, '');
function sim(a, b) {
  a = normT(a); b = normT(b); if (!a || !b) return 0;
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return 1 - d[m][n] / Math.max(m, n);
}
async function checkSpeech(item, out) {
  out.textContent = 'Đang nghe… hãy nói'; out.className = 'feedback';
  const alts = await listen(item.lang);
  if (!alts) { out.textContent = 'Không nghe rõ. Thử lại hoặc tự chấm.'; return; }
  const best = alts.map(a => [a, sim(a, item.t)]).sort((x, y) => y[1] - x[1])[0];
  const p = Math.round(best[1] * 100);
  out.textContent = 'Máy nghe được: "' + best[0] + '" · khớp ' + p + '%';
  out.className = 'feedback ' + (p >= 70 ? 'ok' : 'bad');
}

/* ---------- shared pieces ---------- */
function ctrls(it) {
  const id = esc(it.id), has = !!rec.urls[it.id];
  return '<div class="ctrls" data-ctrls="' + id + '">' +
    '<button class="ctrl" data-a="say" data-id="' + id + '" aria-label="Nghe">' + ic('play') + '<span>Nghe</span></button>' +
    '<button class="ctrl" data-a="slow" data-id="' + id + '" aria-label="Nghe chậm"><span>0.6×</span></button>' +
    '<button class="ctrl" data-a="loop" data-id="' + id + '">' + ic('loop') + '<span>Nhại</span></button>' +
    '<button class="ctrl rec" data-a="rec" data-id="' + id + '">' + ic('mic') + '<span>Ghi âm</span></button>' +
    (has ? '<button class="ctrl" data-a="cmp" data-id="' + id + '">' + ic('ears') + '<span>So sánh</span></button>' : '') + '</div>';
}
const phraseHTML = it => '<div class="phrase" data-row="' + esc(it.id) + '"><div class="tgt" lang="' + esc(D[it.lang].tts) + '">' + esc(it.t) + '</div><div class="rom">' + esc(it.r) + '</div><div class="vi">' + esc(it.v) + '</div>' + (it.n ? '<div class="note">' + esc(it.n) + '</div>' : '') + ctrls(it) + '</div>';
const seg = (act, opts, cur) => '<div class="seg" role="tablist">' + opts.map(o => '<button role="tab" aria-selected="' + (o[0] === cur) + '" class="' + (o[0] === cur ? 'on' : '') + '" data-a="' + act + '" data-id="' + esc(o[0]) + '">' + esc(o[1]) + '</button>').join('') + '</div>';
const backBtn = href => '<a class="iconbtn" href="' + href + '" aria-label="Quay lại">' + ic('back') + '</a>';
const stars = n => '★'.repeat(n) + '<span style="opacity:.3">' + '★'.repeat(3 - n) + '</span>';
function ringSVG(pct, col) {
  const r = 50, c = 2 * Math.PI * r;
  return '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="' + r + '" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="11"/>' +
    (pct > 0.005 ? '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="11" stroke-linecap="round" stroke-dasharray="' + (c * Math.min(1, pct)).toFixed(1) + ' ' + c.toFixed(1) + '"/>' : '') + '</svg>';
}

/* ---------- routing ---------- */
function route() {
  const h = decodeURIComponent(location.hash.slice(1)) || 'home';
  for (const p of ['unit', 'quiz', 'learn', 'review', 'sounds']) if (h === p || h.startsWith(p + '-')) return { v: p, a: h.slice(p.length + 1) };
  return { v: h };
}
const STUDY = ['unit', 'quiz', 'review', 'sounds', 'notes'];
let curLang = null, lastLearn = 'zh';
const views = {};
let lastHash = null, lastView = null;
function render() {
  stopAll();
  const r = route(); curLang = null;
  if (r.v !== lastView) { if (r.v === 'quiz') Q = null; if (r.v === 'review' && R) R.stale = true; if (r.v === 'sounds' && G) G.started = false; }
  const moved = location.hash !== lastHash; lastHash = location.hash; lastView = r.v;
  const fn = views[r.v] || views.home;
  $('#view').innerHTML = fn(r.a);
  if (fn.after) fn.after(r.a);
  tabs(r.v);
  if (moved) window.scrollTo(0, 0);
}
function tabs(v) {
  const due = dueIds(LANGS).length;
  const T = [['home', 'Hôm nay', 'home'], ['learn', 'Học', 'book'], ['review', 'Ôn tập', 'cards'], ['notes', 'Sổ tay', 'note'], ['progress', 'Tiến độ', 'chart']];
  const map = { unit: 'learn', quiz: 'learn', sounds: 'learn', settings: 'home' };
  const on = map[v] || v;
  $('#tabs').innerHTML = T.map(t => '<a href="#' + t[0] + '" class="' + (t[0] === on ? 'on' : '') + '"' + (t[0] === on ? ' aria-current="page"' : '') + '>' + ic(t[2]) + t[1] + (t[0] === 'review' && due ? '<span class="badge-n">' + due + '</span>' : '') + '</a>').join('');
}
addEventListener('hashchange', render);

/* ---------- views: home ---------- */
const TIPS = [
  'Luôn cố nói ra trước khi bấm "Hiện đáp án". Chính lúc cố nhớ lại là lúc trí nhớ được củng cố.',
  'Nhại theo ngay sau giọng mẫu: bắt chước cả nhịp và ngữ điệu, không chỉ từng chữ.',
  'Ôn thẻ mỗi ngày một chút tốt hơn nhiều so với dồn vào cuối tuần.',
  'Học cả câu như 我要這個 sẽ nói ra nhanh hơn học ba từ rời.',
  'Mỗi khung giờ chỉ học một tiếng để não không bị lẫn.',
  'Nói to thành tiếng. Đọc thầm trong đầu không luyện được cơ miệng.',
  'Tự nói một mình: dùng câu đã học tả việc bạn đang làm khi đi bộ hoặc nấu ăn.',
  'Đang ở Đài Loan: mỗi tuần thử dùng một câu mới với người bán hàng.',
  'Luyện âm đúng trên 90% rồi hãy tăng tốc sang bài mới.'
];
views.home = () => {
  const d = day(), G = S.settings.goal, mins = Math.floor(d.sec / 60), L = levelOf(S.xp), st = streak();
  const P = plan(), dueAll = dueIds(activeLangs()).length;
  const planRows = P.map(p => {
    let dot, title, sub, href, done;
    if (p.k === 'review') { dot = '<div class="dot all' + (dueAll === 0 && d.rev > 0 ? ' done' : '') + '">' + (dueAll === 0 && d.rev > 0 ? ic('check') : 'Ôn') + '</div>'; title = 'Ôn thẻ'; sub = dueAll ? dueAll + ' thẻ đến hạn' : d.rev ? 'Đã ôn xong hôm nay' : 'Chưa có thẻ đến hạn'; href = '#review'; done = dueAll === 0 && d.rev > 0; }
    else if (p.k === 'free') { dot = '<div class="dot all">CN</div>'; title = 'Nói chuyện tự do'; sub = 'Nói với bạn bè hoặc tổng ôn các bài cũ'; href = '#review'; done = d.sec >= G * 60; }
    else {
      const u = nextUnit(p.l); done = (d[p.l] || 0) >= p.min * 60;
      dot = '<div class="dot ' + p.l + (done ? ' done' : '') + '">' + (done ? ic('check') : esc({ zh: '華', th: 'ท', ja: '日' }[p.l])) + '</div>';
      title = 'Bài mới: ' + D[p.l].short; sub = u ? esc(u.title) : 'Đã xong giáo trình, hãy ôn và thêm từ'; href = u ? '#unit-' + u.id : '#learn-' + p.l;
    }
    return '<a class="plan-item" href="' + href + '" style="text-decoration:none;color:inherit">' + dot + '<div><b>' + title + '</b><div class="small muted">' + sub + '</div></div><span class="mins">' + p.min + ' phút</span></a>';
  }).join('');
  const A = activeLangs();
  const langCards = LANGS.map(l => {
    const n = doneIn(l), tot = D[l].units.length, u = nextUnit(l), act = A.includes(l);
    return '<a class="lang-card ' + l + '" href="#learn-' + l + '"><div class="top">' + art(l) + '<div><div class="native">' + esc(D[l].native) + '</div><div class="small">' + esc(D[l].name) + '</div></div>' +
      '<span class="chip" style="background:rgba(255,255,255,.85);color:#17161C">' + n + '/' + tot + ' bài</span></div><div class="body stack-sm"><div class="bar ' + l + '"><i style="width:' + (n / tot * 100).toFixed(0) + '%"></i></div>' +
      '<div class="small muted">' + (act ? (u ? 'Tiếp theo: ' + esc(u.title) : 'Đã hoàn thành') : 'Theo lộ trình bắt đầu từ tuần ' + unlockWeek(l)) + '</div></div></a>';
  }).join('');
  return '<header class="band">' + art('home') +
    '<div class="topbar"><span class="kicker">Tam Ngữ · 三語</span><a class="iconbtn" href="#settings" aria-label="Cài đặt">' + ic('gear') + '</a></div>' +
    '<h1>Chào ' + esc(S.settings.name || 'bạn') + '</h1><p class="kicker" style="margin-top:6px">Tuần ' + weekNo() + ' · ' + phaseText() + '</p>' +
    '<div class="hero-stats"><div class="ring">' + ringSVG(d.sec / (G * 60), d.goal ? '#4CC98A' : '#F2A007') + '<div class="lbl"><div><b>' + mins + '</b><span class="tiny">/' + G + ' phút</span></div></div></div>' +
    '<div class="statline"><div class="pill-dark"><b>' + st + '</b>ngày liền</div><div class="pill-dark"><b>Cấp ' + L + '</b>' + titleOf(L) + '</div><div class="pill-dark"><b>+' + d.xp + '</b>XP hôm nay</div></div></div></header>' +
    '<main class="wrap"><div class="sec-title"><h2>Kế hoạch hôm nay</h2><span class="tiny muted">' + G + ' phút</span></div><div class="card">' + planRows + '</div>' +
    '<div class="sec-title"><h2>Ba ngôn ngữ</h2></div><div class="stack">' + langCards + '</div>' +
    '<div class="sec-title"><h2>Mẹo phương pháp</h2></div><div class="card flat"><p>' + esc(TIPS[diffDays('2026-01-01', today()) % TIPS.length]) + '</p></div></main>';
};

/* ---------- views: learn ---------- */
views.learn = a => {
  const l = LANGS.includes(a) ? a : lastLearn; lastLearn = l; curLang = l;
  const L = D[l], n = doneIn(l), nx = nextUnit(l), act = activeLangs().includes(l);
  const cardsN = Object.keys(S.cards).filter(id => { const it = getItem(id); return it && it.lang === l; }).length;
  const phases = PHASES.map((p, pi) => {
    const us = phaseUnits(l, pi), dn = us.filter(u => S.units[u.id] && S.units[u.id].done).length;
    return '<section class="phase"><div class="phase-head"><h2>' + p.n + ' <span class="chip ' + l + '">' + p.c + '</span></h2><span class="tiny muted">' + dn + '/' + us.length + '</span></div>' +
      us.map(u => { const st = S.units[u.id] || {}, cls = st.done ? ' done' : nx && nx.id === u.id ? ' next' : '';
        return '<a class="unit-row' + cls + '" href="#unit-' + u.id + '" style="text-decoration:none;color:inherit"><span class="num">' + (st.done ? ic('check') : (u.phase === 0 ? 'Â' + (u.idx + 1) : u.idx - 1)) + '</span><span><b>' + esc(u.title) + '</b><span class="small muted" style="display:block">' + esc(u.goal) + '</span></span><span class="stars">' + (st.done ? stars(st.stars || 1) : nx && nx.id === u.id ? '<span class="chip ' + l + '">Tiếp</span>' : '') + '</span></a>';
      }).join('') + '</section>';
  }).join('');
  return '<header class="band ' + l + '">' + art(l) + '<div class="topbar"><span class="kicker">Lộ trình</span><a class="iconbtn" href="#settings" aria-label="Cài đặt">' + ic('gear') + '</a></div>' +
    '<div class="tgt" style="font-size:22px;opacity:.9">' + esc(L.native) + '</div><h1>' + esc(L.name) + '</h1><p style="margin-top:10px;max-width:46ch">' + esc(L.intro) + '</p>' +
    '<div class="row wrap-r" style="margin-top:14px"><span class="chip" style="background:rgba(255,255,255,.85);color:#17161C">' + n + '/' + L.units.length + ' bài</span><span class="chip" style="background:rgba(255,255,255,.85);color:#17161C">' + cardsN + ' thẻ</span></div></header>' +
    '<main class="wrap lang-' + l + '"><div style="margin-top:16px">' + seg('golang', LANGS.map(x => [x, D[x].short]), l) + '</div>' +
    (act ? '' : '<div class="card flat" style="margin-top:14px"><p class="small">Theo lộ trình, ' + esc(L.name) + ' bắt đầu từ tuần ' + unlockWeek(l) + ' (bây giờ là tuần ' + weekNo() + '). Bạn vẫn có thể học trước, hoặc bật "Mở tất cả ngôn ngữ" trong Cài đặt.</p></div>') +
    '<div class="grid2" style="margin-top:14px"><a class="btn ' + l + '" href="#sounds-' + l + '">' + ic('ear') + 'Luyện âm</a><a class="btn" href="#review-' + l + '">' + ic('cards') + 'Ôn thẻ</a></div>' + phases + '</main>';
};

/* ---------- views: unit ---------- */
views.unit = id => {
  const u = UNIT[id]; if (!u) return views.home();
  const l = u.lang; curLang = l; lastLearn = l; const st = S.units[id] || {};
  const idx = D[l].units.indexOf(u), nxt = D[l].units[idx + 1];
  return '<header class="band ' + l + '">' + art(l) + '<div class="topbar">' + backBtn('#learn-' + l) + '<span class="chip" style="background:rgba(255,255,255,.85);color:#17161C">' + PHASES[u.phase].n + ' · ' + PHASES[u.phase].c + '</span></div>' +
    '<h1>' + esc(u.title) + '</h1><p style="margin-top:8px">' + esc(u.goal) + '</p></header>' +
    '<main class="wrap lang-' + l + '">' +
    '<div class="grid2" style="margin-top:16px"><button class="btn" data-a="playall" data-id="' + esc(id) + '">' + ic('loop') + '<span>Nhại cả bài</span></button><a class="btn ' + l + '" href="#quiz-' + esc(id) + '">' + ic('mic') + 'Luyện nói</a></div>' +
    '<div class="sec-title"><h2>Ngữ pháp và cách dùng</h2></div><div class="stack">' + u.grammar.map(g => '<div class="gram"><h3>' + esc(g.h) + '</h3><p>' + esc(g.b) + '</p></div>').join('') + '</div>' +
    '<div class="sec-title"><h2>Câu mẫu</h2><span class="tiny muted">' + u.items.length + ' câu</span></div>' +
    '<p class="small muted" style="margin-bottom:8px">Nghe, rồi bấm Nhại: máy đọc ' + S.settings.loops + ' lần và chừa khoảng nghỉ để bạn nói theo. Ghi âm để so giọng mình với giọng mẫu.</p>' +
    '<div class="card">' + u.items.map(phraseHTML).join('') + '</div>' +
    '<div class="card flat" style="margin-top:16px"><div class="row spread"><div><b>' + (st.done ? 'Đã hoàn thành' : 'Hoàn thành bài') + '</b><div class="small muted">' + (st.done ? 'Luyện nói lại để nâng số sao' : 'Làm phần Luyện nói để nhận sao và thêm câu vào thẻ ôn') + '</div></div><span class="stars" style="color:var(--th);font-size:20px">' + (st.done ? stars(st.stars || 1) : '') + '</span></div>' +
    '<div class="grid2" style="margin-top:12px"><a class="btn ' + l + '" href="#quiz-' + esc(id) + '">Luyện nói</a>' + (nxt ? '<a class="btn" href="#unit-' + nxt.id + '">Bài sau</a>' : '<a class="btn" href="#learn-' + l + '">Lộ trình</a>') + '</div></div></main>';
};

/* ---------- views: quiz ---------- */
let Q = null;
views.quiz = id => {
  const u = UNIT[id]; if (!u) return views.home();
  curLang = u.lang;
  if (!Q || Q.unit !== id || Q.fresh) Q = { unit: id, order: shuffle(u.items.map(x => x.id)), i: 0, ok: 0, rev: false, fresh: false };
  const l = u.lang;
  const head = '<header class="band ' + l + '" style="padding-bottom:20px">' + art(l) + '<div class="topbar">' + backBtn('#unit-' + id) + '<span class="kicker">Luyện nói</span></div><h2 style="font-size:24px">' + esc(u.title) + '</h2></header>';
  if (Q.i >= Q.order.length) {
    const pct = Q.ok / Q.order.length, s = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : 1;
    if (!Q.saved) { Q.saved = true; completeUnit(u, s); }
    return head + '<main class="wrap lang-' + l + '"><div class="card qcard" style="margin-top:16px"><div style="font-size:44px;color:var(--th)">' + stars(s) + '</div><h2>' + Q.ok + '/' + Q.order.length + ' câu nói được</h2><p class="muted">' + (s === 3 ? 'Tuyệt vời. Các câu đã vào thẻ ôn.' : 'Các câu đã vào thẻ ôn. Luyện lại để đạt 3 sao.') + '</p>' +
      '<div class="grid2" style="margin-top:10px"><button class="btn" data-a="qagain" data-id="' + esc(id) + '">Luyện lại</button>' + (nextUnit(l) ? '<a class="btn ' + l + '" href="#unit-' + nextUnit(l).id + '">Bài tiếp theo</a>' : '<a class="btn ' + l + '" href="#learn-' + l + '">Lộ trình</a>') + '</div></div></main>';
  }
  const it = PH[Q.order[Q.i]];
  return head + '<main class="wrap lang-' + l + '"><div class="progress-dots" style="margin-top:16px">' + Q.order.map((_, i) => '<i class="' + (i < Q.i ? 'd' : '') + '"></i>').join('') + '</div>' +
    '<div class="card qcard" style="margin-top:12px"><span class="tiny muted">Nói câu này bằng ' + esc(D[l].short) + '</span><div class="prompt">' + esc(it.v) + '</div>' +
    (Q.rev ? '<div class="tgt big">' + esc(it.t) + '</div><div class="rom">' + esc(it.r) + '</div>' + (it.n ? '<div class="note">' + esc(it.n) + '</div>' : '') + '<div class="row" style="justify-content:center"><button class="ctrl" data-a="say" data-id="' + esc(it.id) + '">' + ic('play') + '<span>Nghe lại</span></button></div>' : '<p class="listen-hint">Nói to trước, rồi mới xem đáp án</p>') +
    '<div class="feedback" id="fb"></div></div>' +
    (Q.rev ? '<div class="grid2"><button class="btn" data-a="qno" style="color:var(--bad);border-color:var(--bad)">' + ic('x') + 'Chưa được</button><button class="btn" data-a="qyes" style="color:var(--ok);border-color:var(--ok)">' + ic('check') + 'Nói được</button></div>'
      : '<div class="stack-sm"><button class="btn primary block" data-a="qshow">Hiện đáp án</button>' + (SR ? '<button class="btn block" data-a="qlisten">' + ic('mic') + 'Nói để máy chấm</button>' : '') + '</div>') + '</main>';
};
function completeUnit(u, s) {
  const prev = S.units[u.id] || {}, first = !prev.done;
  S.units[u.id] = { done: true, stars: Math.max(prev.stars || 0, s), date: prev.date || today() };
  u.items.forEach(it => addCard(it.id, addDays(today(), 1)));
  let xp = first ? 50 : 0; if (s > (prev.stars || 0)) xp += (s - (prev.stars || 0)) * 10;
  if (xp) addXP(xp); else save();
  confetti(); if (first) toast('Hoàn thành bài: +' + xp + ' XP'); checkBadges();
}

/* ---------- views: review ---------- */
let R = null;
function buildReview(f) { const langs = f === 'all' ? LANGS : [f]; R = { f, queue: shuffle(dueIds(langs)).slice(0, 80), rev: false, done: 0 }; }
views.review = a => {
  const f = LANGS.includes(a) ? a : 'all';
  if (!R || R.f !== f || R.stale) buildReview(f);
  const counts = { all: dueIds(LANGS).length }; LANGS.forEach(l => counts[l] = dueIds([l]).length);
  const id = R.queue[0], it = id && getItem(id), l = it ? it.lang : (f === 'all' ? null : f);
  curLang = l;
  const band = '<header class="band' + (f !== 'all' ? ' ' + f : '') + '" style="padding-bottom:20px">' + art(f === 'all' ? 'home' : f) + '<div class="topbar"><span class="kicker">Lặp lại ngắt quãng</span><a class="iconbtn" href="#settings" aria-label="Cài đặt">' + ic('gear') + '</a></div><h1>Ôn tập</h1><p class="kicker" style="margin-top:6px">' + (R.done ? 'Đã ôn ' + R.done + ' thẻ · ' : '') + 'Còn ' + R.queue.length + ' thẻ</p></header>';
  const filt = '<div style="margin-top:16px">' + seg('rfilter', [['all', 'Tất cả (' + counts.all + ')']].concat(LANGS.map(x => [x, D[x].short + ' (' + counts[x] + ')'])), f) + '</div>';
  if (!it) {
    const tom = Object.keys(S.cards).filter(k => S.cards[k].due === addDays(today(), 1)).length;
    return band + '<main class="wrap">' + filt + '<div class="card empty" style="margin-top:16px">' + emptyArt + '<h2>' + (R.done ? 'Xong phần ôn hôm nay' : 'Chưa có thẻ đến hạn') + '</h2><p class="small" style="margin-top:6px">' + (Object.keys(S.cards).length ? 'Ngày mai có ' + tom + ' thẻ. Học bài mới để có thêm câu.' : 'Hoàn thành phần Luyện nói của một bài để các câu vào thẻ ôn.') + '</p><a class="btn primary" style="margin-top:14px" href="#learn">Đến bài học</a></div></main>';
  }
  const c = S.cards[id];
  return band + '<main class="wrap lang-' + l + '">' + filt +
    '<div class="card qcard" style="margin-top:14px"><span class="chip ' + l + '" style="align-self:center">' + esc(D[l].short) + (id.startsWith('c:') ? ' · Sổ tay' : '') + '</span><div class="prompt">' + esc(it.v) + '</div>' +
    (R.rev ? '<div class="tgt big">' + esc(it.t) + '</div><div class="rom">' + esc(it.r) + '</div>' + (it.n ? '<div class="note">' + esc(it.n) + '</div>' : '') + '<div class="row" style="justify-content:center;flex-wrap:wrap"><button class="ctrl" data-a="say" data-id="' + esc(id) + '">' + ic('play') + '<span>Nghe</span></button><button class="ctrl" data-a="loop" data-id="' + esc(id) + '">' + ic('loop') + '<span>Nhại</span></button></div>' : '<p class="listen-hint">Nói to câu trả lời trước</p>') +
    '<div class="feedback" id="fb"></div></div>' +
    (R.rev ? '<div class="rate">' + [[1, 'Lại', 'again'], [2, 'Khó', ''], [3, 'Được', 'good'], [4, 'Dễ', '']].map(q => '<button class="btn ' + q[2] + '" data-a="rate" data-id="' + q[0] + '">' + q[1] + '<small>' + ivLabel(c, q[0]) + '</small></button>').join('') + '</div>'
      : '<div class="stack-sm"><button class="btn primary block" data-a="rshow">Hiện đáp án</button>' + (SR ? '<button class="btn block" data-a="rlisten">' + ic('mic') + 'Nói để máy chấm</button>' : '') + '</div>') + '</main>';
};

/* ---------- views: sounds ---------- */
let G = null;
views.sounds = a => {
  const l = LANGS.includes(a) ? a : lastLearn; curLang = l; lastLearn = l;
  const sets = D[l].sounds;
  if (!G || G.l !== l) G = { l, set: 'all', round: 0, score: 0, cur: null, ans: null, started: false };
  const head = '<header class="band ' + l + '" style="padding-bottom:20px">' + art(l) + '<div class="topbar">' + backBtn('#learn-' + l) + '<span class="kicker">Luyện tai</span></div><h1>Luyện âm</h1><p style="margin-top:6px">Nghe một từ, chọn đúng từ vừa nghe. 10 lượt mỗi vòng.</p></header>';
  const pick = seg('gset', [['all', 'Tất cả']].concat(sets.map((s, i) => [String(i), s.title])), G.set);
  let game;
  if (!G.started) game = '<div class="card qcard"><h2>Sẵn sàng?</h2><p class="muted small">Đeo tai nghe để nghe rõ thanh điệu.</p><button class="btn ' + l + '" data-a="gstart">' + ic('play') + 'Bắt đầu</button></div>';
  else if (G.round >= 10) game = '<div class="card qcard"><h2>' + G.score + '/10 đúng</h2><p class="muted">' + (G.score >= 9 ? 'Tai rất tốt. Thử bộ khác hoặc sang bài mới.' : 'Nghe lại bảng âm bên dưới rồi chơi thêm vòng nữa.') + '</p><button class="btn ' + l + '" data-a="gstart">Chơi vòng mới</button></div>';
  else {
    const set = sets[G.cur.s];
    game = '<div class="progress-dots">' + Array.from({ length: 10 }, (_, i) => '<i class="' + (i < G.round ? 'd' : '') + '"></i>').join('') + '</div>' +
      '<div class="card qcard" style="margin-top:10px;min-height:0"><span class="tiny muted">' + esc(set.title) + '</span><button class="btn ' + l + '" data-a="greplay" style="align-self:center">' + ic('play') + 'Nghe lại</button>' +
      '<div class="opt-grid">' + set.items.map((x, i) => '<button class="opt' + (G.ans !== null ? (i === G.cur.i ? ' right' : i === G.ans ? ' wrong' : '') : '') + '" data-a="gpick" data-id="' + i + '"><span class="tgt" lang="' + esc(D[l].tts) + '">' + esc(x[0]) + '</span><span class="rom">' + esc(x[1]) + '</span><span class="tiny muted">' + esc(x[2]) + '</span></button>').join('') + '</div>' +
      '<div class="feedback ' + (G.ans === null ? '' : G.ans === G.cur.i ? 'ok' : 'bad') + '">' + (G.ans === null ? '' : G.ans === G.cur.i ? 'Chính xác' : 'Chưa đúng, nghe lại nhé') + '</div>' +
      (G.ans !== null ? '<button class="btn primary block" data-a="gnext">Lượt tiếp</button>' : '') + '</div>';
  }
  const acc = S.stats.earTotal ? Math.round(S.stats.ear / S.stats.earTotal * 100) : 0;
  const table = sets.map(s => '<div class="card" style="margin-bottom:10px"><b>' + esc(s.title) + '</b><div class="opt-grid" style="margin-top:8px">' + s.items.map(x => '<button class="opt" data-a="sayraw" data-id="' + esc(x[0]) + '"><span class="tgt" lang="' + esc(D[l].tts) + '">' + esc(x[0]) + '</span><span class="rom">' + esc(x[1]) + '</span><span class="tiny muted">' + esc(x[2]) + '</span></button>').join('') + '</div></div>').join('');
  return head + '<main class="wrap lang-' + l + '"><div style="margin-top:16px">' + pick + '</div><div style="margin-top:14px">' + game + '</div>' +
    '<div class="sec-title"><h2>Bảng âm</h2><span class="tiny muted">Độ chính xác chung ' + acc + '%</span></div>' + table + '</main>';
};
function gRound() { const sets = D[G.l].sounds, si = G.set === 'all' ? Math.floor(Math.random() * sets.length) : +G.set; G.cur = { s: si, i: Math.floor(Math.random() * sets[si].items.length) }; G.ans = null; }
const gSay = () => speak(D[G.l].sounds[G.cur.s].items[G.cur.i][0], G.l, Math.min(S.settings.rate, 0.85));

/* ---------- views: notes ---------- */
let N = { f: 'all', q: '', del: null };
views.notes = () => {
  const list = S.custom.filter(c => (N.f === 'all' || c.lang === N.f) && (!N.q || [c.t, c.r, c.v, c.n, c.tag].join(' ').toLowerCase().includes(N.q.toLowerCase()))).slice().reverse();
  const rows = list.map(c => {
    const it = Object.assign({ id: 'c:' + c.id }, c);
    return '<div class="phrase lang-' + c.lang + '" data-row="' + esc(it.id) + '"><div class="row spread" style="align-items:flex-start"><div><span class="chip ' + c.lang + '">' + esc(D[c.lang].short) + '</span>' + (c.tag ? ' <span class="chip">' + esc(c.tag) + '</span>' : '') + '</div>' +
      '<div class="row" style="gap:4px"><button class="ctrl" data-a="nedit" data-id="' + esc(c.id) + '" aria-label="Sửa">' + ic('edit') + '</button><button class="ctrl' + (N.del === c.id ? ' rec on' : '') + '" data-a="ndel" data-id="' + esc(c.id) + '" aria-label="Xoá">' + ic('trash') + (N.del === c.id ? '<span>Xoá thật?</span>' : '') + '</button></div></div>' +
      '<div class="tgt" style="margin-top:6px">' + esc(c.t) + '</div>' + (c.r ? '<div class="rom">' + esc(c.r) + '</div>' : '') + '<div class="vi">' + esc(c.v) + '</div>' + (c.n ? '<div class="note">' + esc(c.n) + '</div>' : '') + ctrls(it) + '</div>';
  }).join('');
  return '<header class="band" style="padding-bottom:22px">' + art('home') + '<div class="topbar"><span class="kicker">Từ vựng của riêng bạn</span><a class="iconbtn" href="#settings" aria-label="Cài đặt">' + ic('gear') + '</a></div><h1>Sổ tay</h1><p class="kicker" style="margin-top:6px">' + S.custom.length + ' mục · tự động vào thẻ ôn</p></header>' +
    '<main class="wrap"><button class="btn primary block" style="margin-top:16px" data-a="nnew">' + ic('plus') + 'Thêm câu hoặc từ mới</button>' +
    '<div style="margin-top:14px">' + seg('nfilter', [['all', 'Tất cả']].concat(LANGS.map(x => [x, D[x].short])), N.f) + '</div>' +
    '<input type="search" id="nq" placeholder="Tìm: 珍珠, ร้อน, ramen…" value="' + esc(N.q) + '" style="margin-top:10px" aria-label="Tìm trong sổ tay">' +
    '<div class="card" style="margin-top:12px" id="nlist">' + (rows || '<div class="empty">' + emptyArt + '<p>Chưa có mục nào. Gặp từ mới ngoài đời, ghi vào đây để ôn cùng thẻ.</p></div>') + '</div></main>';
};
function noteSheet(c) {
  c = c || { lang: lastLearn, t: '', r: '', v: '', n: '', tag: '' };
  const bg = document.createElement('div'); bg.className = 'sheet-bg';
  bg.innerHTML = '<form class="sheet" id="nform" novalidate><div class="row spread" style="margin-bottom:14px"><h2>' + (c.id ? 'Sửa mục' : 'Thêm mục mới') + '</h2><button type="button" class="iconbtn" style="background:var(--field)" data-a="nclose" aria-label="Đóng">' + ic('x') + '</button></div>' +
    '<label class="f"><span>Ngôn ngữ</span>' + seg('nlang', LANGS.map(x => [x, D[x].short]), c.lang) + '</label>' +
    '<label class="f"><span>Câu hoặc từ (chữ gốc) *</span><input type="text" name="t" value="' + esc(c.t) + '" placeholder="我想喝咖啡"></label>' +
    '<label class="f"><span>Phiên âm</span><input type="text" name="r" value="' + esc(c.r) + '" placeholder="wǒ xiǎng hē kāfēi"></label>' +
    '<label class="f"><span>Nghĩa tiếng Việt *</span><input type="text" name="v" value="' + esc(c.v) + '" placeholder="Tôi muốn uống cà phê"></label>' +
    '<label class="f"><span>Ghi chú</span><input type="text" name="n" value="' + esc(c.n) + '" placeholder="Nghe ở quán gần trường"></label>' +
    '<label class="f"><span>Nhãn</span><input type="text" name="tag" value="' + esc(c.tag) + '" placeholder="đồ ăn, trường học…"></label>' +
    '<p class="feedback bad" id="nerr"></p><div class="grid2"><button type="button" class="btn" data-a="nprev">' + ic('play') + 'Nghe thử</button><button type="submit" class="btn primary">Lưu</button></div></form>';
  bg.dataset.id = c.id || ''; bg.dataset.lang = c.lang;
  bg.addEventListener('click', e => { if (e.target === bg) bg.remove(); });
  document.body.appendChild(bg); setTimeout(() => bg.querySelector('[name=t]').focus(), 50);
  bg.querySelector('form').addEventListener('input', () => { $('#nerr').textContent = ''; });
  bg.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); const f = e.target, val = k => f.elements[k].value.trim();
    if (!val('t')) { $('#nerr').textContent = 'Nhập câu hoặc từ bằng chữ gốc.'; return; }
    if (!val('v')) { $('#nerr').textContent = 'Nhập nghĩa tiếng Việt để làm mặt trước của thẻ.'; return; }
    const data = { lang: bg.dataset.lang, t: val('t'), r: val('r'), v: val('v'), n: val('n'), tag: val('tag') };
    if (bg.dataset.id) { Object.assign(S.custom.find(x => x.id === bg.dataset.id), data); save(); toast('Đã lưu thay đổi'); }
    else { const id = Date.now().toString(36); S.custom.push(Object.assign({ id, created: today() }, data)); addCard('c:' + id); S.stats.notesMade++; addXP(3); toast('Đã thêm vào sổ tay và thẻ ôn'); checkBadges(); }
    bg.remove(); render();
  });
}

/* ---------- views: progress ---------- */
views.progress = () => {
  const L = levelOf(S.xp), lo = thr(L), hi = thr(L + 1), st = streak();
  S.stats.best = Math.max(S.stats.best || 0, st);
  const doneAll = Object.values(S.units).filter(u => u.done).length, cardsN = Object.keys(S.cards).length;
  const acc = S.stats.earTotal ? Math.round(S.stats.ear / S.stats.earTotal * 100) + '%' : 'chưa có';
  const days7 = Array.from({ length: 7 }, (_, i) => addDays(today(), i - 6));
  const max7 = Math.max(S.settings.goal * 60, ...days7.map(d => (S.days[d] || {}).sec || 0));
  const wd = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const bars = days7.map(d => { const x = S.days[d] || {}, tot = x.sec || 0;
    return '<div class="col"><div class="stackbar" style="height:' + Math.max(3, tot / max7 * 100) + '%">' + LANGS.map(l => '<i style="height:' + (tot ? ((x[l] || 0) / tot * 100) : 0) + '%;background:var(--' + l + ')"></i>').join('') + '<i style="flex:1;background:var(--faint);opacity:.5"></i></div><small>' + Math.round(tot / 60) + '</small><small>' + wd[parse(d).getDay()] + '</small></div>'; }).join('');
  const cells = []; for (let d = addDays(today(), -(15 * 7) - parse(today()).getDay()); d <= today(); d = addDays(d, 1)) {
    const m = ((S.days[d] || {}).sec || 0) / 60, g = S.settings.goal, lv = m <= 0 ? '' : m < g * 0.25 ? 'l1' : m < g * 0.6 ? 'l2' : m < g ? 'l3' : 'l4';
    cells.push('<i class="' + lv + (d === today() ? ' today' : '') + '" title="' + d + ': ' + Math.round(m) + ' phút"></i>');
  }
  const perLang = LANGS.map(l => {
    const sec = Object.values(S.days).reduce((s, d) => s + (d[l] || 0), 0);
    return '<div class="card lang-' + l + '"><div class="row spread"><b>' + esc(D[l].name) + '</b><span class="tiny muted">' + fmtMin(sec) + '</span></div><div class="stack-sm" style="margin-top:10px">' +
      PHASES.map((p, pi) => { const us = phaseUnits(l, pi), dn = us.filter(u => S.units[u.id] && S.units[u.id].done).length;
        return '<div><div class="row spread tiny"><span>' + p.n + ' · ' + p.c + '</span><span class="muted">' + dn + '/' + us.length + '</span></div><div class="bar ' + l + '"><i style="width:' + (dn / us.length * 100) + '%"></i></div></div>'; }).join('') + '</div></div>';
  }).join('');
  const earned = BADGES.filter(b => S.badges[b.id]).length;
  return '<header class="band">' + art('home') + '<div class="topbar"><span class="kicker">Hành trình</span><a class="iconbtn" href="#settings" aria-label="Cài đặt">' + ic('gear') + '</a></div><h1>Tiến độ</h1>' +
    '<div class="lvl" style="margin-top:16px"><div class="badge" style="background:#F2A007;color:#2A1A00">' + L + '</div><div style="flex:1"><b>' + titleOf(L) + '</b><div class="tiny" style="opacity:.8">' + S.xp + ' XP · còn ' + (hi - S.xp) + ' XP lên cấp ' + (L + 1) + '</div><div class="bar" style="background:rgba(255,255,255,.15);margin-top:6px"><i style="width:' + ((S.xp - lo) / (hi - lo) * 100).toFixed(0) + '%;background:#F2A007"></i></div></div></div></header>' +
    '<main class="wrap"><div class="kpis" style="margin-top:16px">' +
    [[st + ' ngày', 'Chuỗi hiện tại · dài nhất ' + S.stats.best], [fmtMin(totalSec()), 'Tổng thời gian học'], [doneAll + '/' + TOTAL_UNITS, 'Bài đã hoàn thành'], [cardsN, 'Thẻ đang ôn'], [S.stats.rev, 'Lượt ôn thẻ'], [acc, 'Độ chính xác luyện âm']].map(k => '<div class="kpi"><b>' + esc(k[0]) + '</b><span>' + esc(k[1]) + '</span></div>').join('') + '</div>' +
    '<div class="sec-title"><h2>7 ngày qua</h2><span class="tiny muted">phút / ngày</span></div><div class="card"><div class="weekbars">' + bars + '</div><div class="row wrap-r tiny muted" style="margin-top:10px">' + LANGS.map(l => '<span class="row" style="gap:4px"><i style="width:10px;height:10px;border-radius:3px;background:var(--' + l + ')"></i>' + D[l].short + '</span>').join('') + '<span class="row" style="gap:4px"><i style="width:10px;height:10px;border-radius:3px;background:var(--faint);opacity:.5"></i>Ôn chung, sổ tay</span></div></div>' +
    '<div class="sec-title"><h2>16 tuần</h2><span class="tiny muted">đậm hơn là gần mục tiêu</span></div><div class="card"><div class="heat">' + cells.join('') + '</div></div>' +
    '<div class="sec-title"><h2>Từng ngôn ngữ</h2></div><div class="stack">' + perLang + '</div>' +
    '<div class="sec-title"><h2>Hộ chiếu con dấu</h2><span class="tiny muted">' + earned + '/' + BADGES.length + '</span></div><div class="card"><div class="stamps">' + BADGES.map(b => stamp(b, !!S.badges[b.id])).join('') + '</div></div></main>';
};

/* ---------- views: settings ---------- */
let resetArm = false;
views.settings = () => {
  const s = S.settings;
  const voiceSel = LANGS.map(l => {
    const vs = voicesFor(l), cur = pickVoice(l);
    return '<label class="f"><span>' + esc(D[l].name) + '</span><div class="row"><select data-s="voice-' + l + '"><option value="">Tự chọn' + (cur ? ' (' + esc(cur.name) + ')' : '') + '</option>' + vs.map(v => '<option value="' + esc(v.name) + '"' + (s.voice[l] === v.name ? ' selected' : '') + '>' + esc(v.name + ' · ' + nl(v)) + '</option>').join('') + '</select><button class="btn sm" data-a="vtest" data-id="' + l + '">' + ic('play') + 'Thử</button></div>' + (vs.length ? '' : '<span class="tiny" style="color:var(--bad)">Thiết bị chưa có giọng này. Xem hướng dẫn bên dưới.</span>') + '</label>';
  }).join('');
  return '<header class="band" style="padding-bottom:22px">' + art('home') + '<div class="topbar">' + backBtn('#home') + '<span class="kicker">Tam Ngữ</span></div><h1>Cài đặt</h1></header><main class="wrap">' +
    '<div class="sec-title"><h2>Hồ sơ và lộ trình</h2></div><div class="card">' +
    '<label class="f"><span>Tên hiển thị</span><input type="text" data-s="name" value="' + esc(s.name) + '"></label>' +
    '<label class="f"><span>Mục tiêu mỗi ngày</span>' + seg('goal', [['30', '30 phút'], ['45', '45 phút'], ['60', '60 phút'], ['90', '90 phút']], String(s.goal)) + '</label>' +
    '<label class="f"><span>Ngày bắt đầu lộ trình (tiếng Thái mở từ tuần 7, tiếng Nhật từ tuần 15)</span><input type="date" data-s="start" value="' + esc(S.start) + '"></label>' +
    '<div class="switch"><span>Mở tất cả ngôn ngữ ngay<br><span class="tiny muted">Bỏ qua lịch so le</span></span><input type="checkbox" data-s="unlockAll"' + (s.unlockAll ? ' checked' : '') + '></div>' +
    '<label class="f" style="margin:0"><span>Giao diện</span>' + seg('theme', [['auto', 'Theo máy'], ['light', 'Sáng'], ['dark', 'Tối']], s.theme) + '</label></div>' +
    '<div class="sec-title"><h2>Giọng đọc và shadowing</h2></div><div class="card">' +
    '<label class="f"><span>Tốc độ đọc: <b id="rateOut">' + s.rate.toFixed(2) + '×</b></span><input type="range" min="0.5" max="1.2" step="0.05" value="' + s.rate + '" data-s="rate"></label>' +
    '<label class="f"><span>Số lần nhại mỗi câu</span>' + seg('loops', [['2', '2 lần'], ['3', '3 lần'], ['5', '5 lần']], String(s.loops)) + '</label>' +
    '<label class="f"><span>Khoảng nghỉ để nói theo: <b id="gapOut">' + s.gap.toFixed(1) + ' giây</b></span><input type="range" min="1" max="6" step="0.5" value="' + s.gap + '" data-s="gap"></label>' + voiceSel +
    '<p class="tiny muted">iPhone: vào Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói, tải giọng bản Nâng cao (Enhanced) cho Trung (Đài Loan), Thái, Nhật. Giọng đọc chạy offline.</p></div>' +
    '<div class="sec-title"><h2>Cài lên iPhone</h2></div><div class="card stack-sm small"><p>1. Mở trang web bằng Safari.</p><p>2. Bấm nút Chia sẻ, chọn "Thêm vào Màn hình chính".</p><p>3. Mở từ biểu tượng Tam Ngữ: app chạy toàn màn hình và dùng được khi không có mạng.</p><p class="muted">Dữ liệu lưu ngay trên máy. Hãy sao lưu định kỳ.</p></div>' +
    '<div class="sec-title"><h2>Sao lưu dữ liệu</h2></div><div class="card stack">' +
    '<div class="grid2"><button class="btn" data-a="export">' + ic('down') + 'Tải file sao lưu</button><button class="btn" data-a="copy">' + ic('copy') + 'Sao chép dữ liệu</button></div>' +
    '<label class="f" style="margin:0"><span>Khôi phục: chọn file hoặc dán dữ liệu</span><input type="file" accept="application/json,.json" id="impFile"><textarea id="impTxt" placeholder="Dán nội dung file sao lưu vào đây" style="margin-top:8px"></textarea></label>' +
    '<p class="feedback bad" id="impErr"></p><button class="btn primary" data-a="import">Khôi phục</button></div>' +
    '<div class="sec-title"><h2>Phương pháp trong app</h2></div><div class="card stack-sm small">' +
    '<p><b>Lặp lại ngắt quãng</b>: thẻ ôn hẹn đúng lúc bạn sắp quên.</p><p><b>Tự gợi nhớ</b>: thấy tiếng Việt, tự nói trước rồi mới xem đáp án.</p><p><b>Shadowing</b>: nghe và nhại ngay, có ghi âm để so sánh.</p><p><b>Luyện tai</b>: phân biệt các âm dễ nhầm, có kết quả đúng sai ngay.</p><p><b>Học theo cụm và theo tình huống</b>: câu mẫu dùng được ngay ngoài đời.</p><p><b>Lịch so le</b>: tiếng Trung trước, rồi Thái, rồi Nhật, để tránh lẫn thanh điệu.</p></div>' +
    '<div class="sec-title"><h2>Vùng nguy hiểm</h2></div><div class="card"><button class="btn danger block" data-a="reset">' + (resetArm ? 'Bấm lần nữa để xoá toàn bộ' : 'Xoá toàn bộ dữ liệu') + '</button></div>' +
    '<p class="tiny muted" style="text-align:center;margin:18px 0">Tam Ngữ · ' + TOTAL_UNITS + ' bài · ' + Object.keys(PH).length + ' câu mẫu</p></main>';
};

/* ---------- events ---------- */
document.addEventListener('click', async e => {
  const el = e.target.closest('[data-a]'); if (!el) return;
  const a = el.dataset.a, id = el.dataset.id; touch();
  switch (a) {
    case 'say': stopAll(); el.classList.add('on'); await speak(getItem(id).t, getItem(id).lang); el.classList.remove('on'); break;
    case 'sayraw': { const l = route().v === 'sounds' ? G.l : lastLearn; stopAll(); speak(id, l, Math.min(S.settings.rate, 0.85)); break; }
    case 'slow': stopAll(); el.classList.add('on'); await speak(getItem(id).t, getItem(id).lang, 0.6); el.classList.remove('on'); break;
    case 'loop': if (el.classList.contains('on')) { stopAll(); el.lastElementChild.textContent = 'Nhại'; } else { stopAll(); loopPhrase(getItem(id), el); } break;
    case 'rec': toggleRec(id, el); break;
    case 'cmp': stopAll(); compare(id); break;
    case 'playall': if (el.classList.contains('on')) { stopAll(); el.lastElementChild.textContent = 'Nhại cả bài'; } else { stopAll(); playList(UNIT[id].items, el); } break;
    case 'golang': location.hash = 'learn-' + id; break;
    case 'qshow': Q.rev = true; render(); speak(PH[Q.order[Q.i]].t, curLang); break;
    case 'qlisten': checkSpeech(PH[Q.order[Q.i]], $('#fb')); break;
    case 'qyes': case 'qno': if (a === 'qyes') { Q.ok++; } Q.i++; Q.rev = false; render(); break;
    case 'qagain': Q.fresh = true; render(); break;
    case 'rfilter': R.stale = true; location.hash = id === 'all' ? 'review' : 'review-' + id; break;
    case 'rshow': { R.rev = true; const it = getItem(R.queue[0]); render(); speak(it.t, it.lang); break; }
    case 'rlisten': checkSpeech(getItem(R.queue[0]), $('#fb')); break;
    case 'rate': {
      const cid = R.queue.shift(), q = +id; S.cards[cid] = schedule(S.cards[cid], q);
      if (q === 1) R.queue.push(cid);
      S.stats.rev++; day().rev++; R.done++; R.rev = false; addXP(q === 1 ? 1 : 2); checkBadges(); render(); break;
    }
    case 'gset': G.set = id; G.round = 0; G.score = 0; G.started = false; render(); break;
    case 'gstart': G.started = true; G.round = 0; G.score = 0; gRound(); render(); gSay(); break;
    case 'greplay': gSay(); break;
    case 'gpick': if (G.ans === null) { G.ans = +id; S.stats.earTotal++; if (G.ans === G.cur.i) { G.score++; S.stats.ear++; addXP(2); } else save(); render(); if (G.ans !== G.cur.i) gSay(); checkBadges(); } break;
    case 'gnext': G.round++; if (G.round < 10) { gRound(); render(); gSay(); } else render(); break;
    case 'nnew': noteSheet(); break;
    case 'nedit': noteSheet(S.custom.find(x => x.id === id)); break;
    case 'nclose': el.closest('.sheet-bg').remove(); break;
    case 'nlang': { const bg = el.closest('.sheet-bg'); bg.dataset.lang = id; bg.querySelectorAll('[data-a=nlang]').forEach(b => b.classList.toggle('on', b.dataset.id === id)); break; }
    case 'nprev': { const bg = el.closest('.sheet-bg'), t = bg.querySelector('[name=t]').value.trim(); if (t) speak(t, bg.dataset.lang); else $('#nerr').textContent = 'Nhập chữ gốc trước khi nghe thử.'; break; }
    case 'ndel': if (N.del === id) { S.custom = S.custom.filter(x => x.id !== id); delete S.cards['c:' + id]; N.del = null; save(); toast('Đã xoá'); render(); } else { N.del = id; render(); } break;
    case 'nfilter': N.f = id; render(); break;
    case 'goal': S.settings.goal = +id; save(); render(); break;
    case 'loops': S.settings.loops = +id; save(); render(); break;
    case 'theme': S.settings.theme = id; applyTheme(); save(); render(); break;
    case 'vtest': speak({ zh: '你好，很高興認識你。', th: 'สวัสดีครับ ยินดีที่ได้รู้จัก', ja: 'こんにちは、はじめまして。' }[id], id); break;
    case 'export': {
      const blob = new Blob([JSON.stringify(S)], { type: 'application/json' }), url = URL.createObjectURL(blob), link = document.createElement('a');
      link.href = url; link.download = 'tamngu-' + today() + '.json'; document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast('Đang tải file sao lưu. Nếu không thấy, dùng nút Sao chép.'); break;
    }
    case 'copy': try { await navigator.clipboard.writeText(JSON.stringify(S)); toast('Đã sao chép. Dán vào Ghi chú để cất giữ.'); } catch (err) { toast('Trình duyệt chặn sao chép'); } break;
    case 'import': {
      const errEl = $('#impErr'), f = $('#impFile').files[0];
      let txt = $('#impTxt').value.trim(); if (f) txt = await f.text();
      try { const o = JSON.parse(txt); if (!o || !o.v || !o.settings) throw 0; S = Object.assign(defState(), o, { settings: Object.assign(defState().settings, o.settings), stats: Object.assign(defState().stats, o.stats) }); save(); applyTheme(); toast('Đã khôi phục dữ liệu'); location.hash = 'home'; render(); }
      catch (err) { errEl.textContent = 'Dữ liệu không hợp lệ. Hãy dùng file sao lưu của Tam Ngữ.'; }
      break;
    }
    case 'reset': if (resetArm) { S = defState(); save(); resetArm = false; applyTheme(); toast('Đã xoá toàn bộ dữ liệu'); location.hash = 'home'; render(); } else { resetArm = true; render(); setTimeout(() => { resetArm = false; }, 5000); } break;
  }
});
document.addEventListener('input', e => {
  const el = e.target;
  if (el.id === 'nq') { N.q = el.value; const pos = el.selectionStart; render(); const n = $('#nq'); n.focus(); n.setSelectionRange(pos, pos); return; }
  const k = el.dataset.s; if (!k) return;
  if (k === 'rate') { S.settings.rate = +el.value; $('#rateOut').textContent = (+el.value).toFixed(2) + '×'; }
  else if (k === 'gap') { S.settings.gap = +el.value; $('#gapOut').textContent = (+el.value).toFixed(1) + ' giây'; }
  else if (k === 'name') S.settings.name = el.value.slice(0, 30);
  save();
});
document.addEventListener('change', e => {
  const el = e.target, k = el.dataset.s; if (!k) return;
  if (k === 'start') { if (el.value) S.start = el.value; }
  else if (k === 'unlockAll') S.settings.unlockAll = el.checked;
  else if (k.startsWith('voice-')) { S.settings.voice[k.slice(6)] = el.value; speak({ zh: '你好', th: 'สวัสดีครับ', ja: 'こんにちは' }[k.slice(6)], k.slice(6)); }
  save();
});

/* ---------- time tracking ---------- */
let ticks = 0;
setInterval(() => {
  const r = route();
  if (document.visibilityState !== 'visible' || !STUDY.includes(r.v) || Date.now() - lastAct > 90000) return;
  const d = day(); d.sec++;
  let l = curLang; if (r.v === 'review' && R && R.queue[0]) { const it = getItem(R.queue[0]); if (it) l = it.lang; }
  if (r.v === 'notes') l = null;
  if (l) d[l] = (d[l] || 0) + 1;
  if (!d.goal && d.sec >= S.settings.goal * 60) { d.goal = true; S.stats.goalDays++; addXP(30); toast('Đạt mục tiêu hôm nay: +30 XP'); confetti(); checkBadges(); }
  if (++ticks % 15 === 0) save();
}, 1000);
addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') save(); });
addEventListener('pagehide', save);

/* ---------- boot ---------- */
function applyTheme() { const t = S.settings.theme; if (t === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.dataset.theme = t; }
applyTheme();
render();
try { if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('sw.js').catch(() => {}); } catch (e) {}
window.__TN = { get S() { return S; }, render, PH, UNIT };
})();
