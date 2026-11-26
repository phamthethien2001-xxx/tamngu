window.TN_DATA = window.TN_DATA || {};
TN_DATA.th = {
  code: 'th', name: 'Tiếng Thái', short: 'Thái', native: 'ภาษาไทย', tts: 'th-TH', roman: 'Phiên âm',
  intro: 'Ngữ pháp rất gần tiếng Việt: không chia động từ, tính từ đứng sau danh từ. Cái khó là 5 thanh và nguyên âm dài/ngắn. Câu mẫu dùng giọng nam (ผม/ครับ).',
  sounds: [
    { title: 'Gần hay xa', items: [['ใกล้','klâi','gần (thanh xuống)'],['ไกล','klai','xa (thanh ngang)']] },
    { title: 'Trắng, tin, cơm', items: [['ขาว','khǎao','trắng (thanh lên)'],['ข่าว','khàao','tin tức (thanh thấp)'],['ข้าว','khâao','cơm (thanh xuống)']] },
    { title: 'Hổ hay áo', items: [['เสือ','sʉ̌a','con hổ (thanh lên)'],['เสื้อ','sʉ̂a','cái áo (thanh xuống)']] },
    { title: 'Đến, chó, ngựa', items: [['มา','maa','đến (thanh ngang)'],['หมา','mǎa','con chó (thanh lên)'],['ม้า','máa','con ngựa (thanh cao)']] },
    { title: 'Gà hay trứng', items: [['ไก่','kài','con gà (k không bật hơi)'],['ไข่','khài','quả trứng (kh bật hơi)']] },
    { title: 'Dài hay ngắn', items: [['เข้า','khâo','vào (nguyên âm ngắn)'],['ข้าว','khâao','cơm (nguyên âm dài)']] }
  ],
  units: [
    { id: 'th-p1', phase: 0, title: 'Năm thanh điệu', goal: 'Phân biệt 5 thanh và đọc được phiên âm.',
      grammar: [
        { h: 'Đọc phiên âm', b: 'Không dấu = thanh ngang. à = thanh thấp (gần thanh huyền nhưng thấp và phẳng). â = thanh xuống (lên rồi rơi, gần thanh ngã nói nhanh). á = thanh cao (gần thanh sắc). ǎ = thanh lên (xuống thấp rồi vút lên, gần thanh hỏi kéo dài).' },
        { h: 'Ký hiệu nguyên âm', b: 'Chữ đôi (aa, ii, uu) = nguyên âm dài. ʉ ≈ "ư", ɛ ≈ "e", e ≈ "ê", ɔ ≈ "o", o ≈ "ô", ə ≈ "ơ".' }
      ],
      phrases: [
        ['มา','maa','đến (ngang)'],['ไม่','mâi','không (xuống)'],['ไม้','mái','gỗ (cao)'],['หมา','mǎa','chó (lên)'],
        ['ใหม่','mài','mới (thấp)'],
        ['ไม้ใหม่ไม่ไหม้ไหม','mái mài mâi mâi mǎi','Gỗ mới không cháy à?','Câu luyện thanh nổi tiếng'],
        ['ข้าว','khâao','cơm'],['ขาว','khǎao','trắng']
      ] },
    { id: 'th-p2', phase: 0, title: 'Phụ âm bật hơi, nguyên âm dài và ngắn', goal: 'Phân biệt k/kh, p/ph, t/th, nguyên âm dài và ngắn.',
      grammar: [
        { h: 'Bật hơi', b: 'k, p, t: không bật hơi (giống "c", "p" trong "cá, pin"). kh, ph, th: bật hơi mạnh (đặt tay trước miệng sẽ thấy hơi). ph KHÔNG đọc là "ph" (f) như tiếng Việt: phǒm đọc "p-hơi". th KHÔNG phải "th" Việt mà là t bật hơi.' },
        { h: 'Dài và ngắn đổi nghĩa', b: 'เข้า khâo (vào) và ข้าว khâao (cơm) chỉ khác độ dài. Âm cuối p, t, k không bật ra, giống "áp, át, ác" tiếng Việt.' }
      ],
      phrases: [
        ['ไก่','kài','con gà'],['ไข่','khài','quả trứng'],['ผม','phǒm','tôi (nam)'],['ไทย','thai','Thái'],
        ['เข้า','khâo','vào'],['ข้าว','khâao','cơm'],['ปลา','plaa','cá'],['เผ็ด','phèt','cay']
      ] },
    { id: 'th-1', phase: 1, title: 'Chào hỏi và giới thiệu', goal: 'Tự giới thiệu, nói lịch sự với ครับ.',
      grammar: [
        { h: 'ครับ / ค่ะ', b: 'Thêm vào cuối câu để lịch sự. Nam: ครับ khráp. Nữ: ค่ะ khâ (câu hỏi: คะ khá). Gần giống "ạ" của tiếng Việt.' },
        { h: 'Đại từ', b: 'ผม phǒm = tôi (nam), ฉัน chǎn = tôi (nữ), คุณ khun = bạn, anh, chị, เขา khǎo = anh ấy, cô ấy.' },
        { h: 'เป็น = là', b: 'ผมเป็นนักศึกษา = Tôi là sinh viên. Giới thiệu tên dùng ชื่อ (tên): ผมชื่อ…' }
      ],
      phrases: [
        ['สวัสดีครับ','sà-wàt-dii khráp','Xin chào'],
        ['ผมชื่อเทียนครับ','phǒm chʉ̂ʉ Thian khráp','Tôi tên là Thiện.'],
        ['คุณชื่ออะไรครับ','khun chʉ̂ʉ à-rai khráp','Bạn tên gì?'],
        ['ยินดีที่ได้รู้จักครับ','yin-dii thîi dâai rúu-jàk khráp','Rất vui được làm quen.'],
        ['ผมมาจากเวียดนามครับ','phǒm maa jàak Wîat-naam khráp','Tôi đến từ Việt Nam.'],
        ['ผมเป็นนักศึกษาครับ','phǒm pen nák-sʉ̀k-sǎa khráp','Tôi là sinh viên.'],
        ['ขอบคุณครับ','khɔ̀ɔp-khun khráp','Cảm ơn.'],
        ['ขอโทษครับ ไม่เป็นไรครับ','khɔ̌ɔ-thôot khráp, mâi pen rai khráp','Xin lỗi. Không sao đâu.'],
        ['สบายดีไหมครับ','sà-baai dii mǎi khráp','Bạn khỏe không?','ไหม khi nói thường đọc thành mái']
      ] },
    { id: 'th-2', phase: 1, title: 'Số đếm và mua sắm', goal: 'Hỏi giá, trả giá, thanh toán.',
      grammar: [
        { h: 'Số đếm', b: 'หนึ่ง nʉ̀ng 1, สอง sɔ̌ɔng 2, สาม sǎam 3, สี่ sìi 4, ห้า hâa 5, หก hòk 6, เจ็ด jèt 7, แปด pɛ̀ɛt 8, เก้า kâo 9, สิบ sìp 10, ยี่สิบ yîi-sìp 20, ร้อย rɔ́ɔy 100, พัน phan 1000. Số 3 và 4 rất giống tiếng Việt!' },
        { h: 'Lượng từ đứng sau số', b: 'Danh từ + số + lượng từ: น้ำ สอง ขวด = nước hai chai. อัน an = cái (dùng chung).' },
        { h: 'ได้ไหม = được không', b: 'Động từ + ได้ไหม? = … được không? Rất hay dùng khi mua sắm.' }
      ],
      phrases: [
        ['อันนี้เท่าไหร่ครับ','an níi thâo-rài khráp','Cái này bao nhiêu tiền?'],
        ['ร้อยห้าสิบบาท','rɔ́ɔy hâa-sìp bàat','150 baht.'],
        ['แพงไปครับ','phɛɛng pai khráp','Đắt quá.'],
        ['ลดได้ไหมครับ','lót dâai mǎi khráp','Bớt được không?'],
        ['เอาอันนี้ครับ','ao an níi khráp','Tôi lấy cái này.'],
        ['เอาสองอันครับ','ao sɔ̌ɔng an khráp','Lấy hai cái.'],
        ['จ่ายด้วยบัตรได้ไหมครับ','jàai dûay bàt dâai mǎi khráp','Trả bằng thẻ được không?'],
        ['ไม่ต้องใส่ถุงครับ','mâi tɔ̂ng sài thǔng khráp','Không cần túi đâu.']
      ] },
    { id: 'th-3', phase: 1, title: 'Gọi món và ăn uống', goal: 'Gọi món, dặn độ cay, tính tiền.',
      grammar: [
        { h: 'ขอ… và เอา…', b: 'ขอ khɔ̌ɔ = xin (lịch sự). เอา ao = lấy (thân mật hơn). ขอ…หน่อย = cho xin … nhé.' },
        { h: 'Phủ định ไม่', b: 'ไม่ + động từ hoặc tính từ = không: ไม่เผ็ด = không cay. Giống "không" của tiếng Việt.' }
      ],
      phrases: [
        ['ขอเมนูหน่อยครับ','khɔ̌ɔ mee-nuu nɔ̀y khráp','Cho xin thực đơn.'],
        ['เอาผัดไทยหนึ่งจานครับ','ao phàt-thai nʉ̀ng jaan khráp','Cho một đĩa pad thái.'],
        ['ไม่เผ็ดครับ','mâi phèt khráp','Không cay nhé.'],
        ['เผ็ดนิดหน่อย','phèt nít-nɔ̀y','Cay một chút.'],
        ['ไม่ใส่ผักชีครับ','mâi sài phàk-chii khráp','Đừng cho rau mùi.'],
        ['ขอน้ำเปล่าหนึ่งขวดครับ','khɔ̌ɔ nám-plàao nʉ̀ng khùat khráp','Cho một chai nước lọc.'],
        ['อร่อยมาก','à-rɔ̀y mâak','Ngon lắm!'],
        ['เช็คบิลด้วยครับ','chék bin dûay khráp','Tính tiền giúp tôi.']
      ] },
    { id: 'th-4', phase: 1, title: 'Hỏi đường và đi lại', goal: 'Hỏi đường, đi BTS, đi taxi.',
      grammar: [
        { h: 'อยู่ที่ไหน = ở đâu', b: 'Nơi + อยู่ที่ไหน? Trả lời: อยู่ + vị trí: อยู่ทางซ้าย = ở bên trái.' },
        { h: 'ยังไง = thế nào', b: 'ไป…ยังไง? = Đi … thế nào? Dạng nói của อย่างไร.' }
      ],
      phrases: [
        ['ห้องน้ำอยู่ที่ไหนครับ','hɔ̂ng-náam yùu thîi-nǎi khráp','Nhà vệ sinh ở đâu?'],
        ['ไปสถานีรถไฟฟ้ายังไงครับ','pai sà-thǎa-nii rót-fai-fáa yang-ngai khráp','Đến ga tàu điện (BTS) thế nào?'],
        ['ตรงไป แล้วเลี้ยวขวา','trong pai, lɛ́ɛw líaw khwǎa','Đi thẳng, rồi rẽ phải.'],
        ['เลี้ยวซ้าย','líaw sáai','Rẽ trái.'],
        ['ไกลไหมครับ','klai mǎi khráp','Xa không?'],
        ['ไปที่นี่ครับ','pai thîi-nîi khráp','Đi đến chỗ này.','Vừa nói vừa chỉ địa chỉ cho tài xế'],
        ['จอดตรงนี้ครับ','jɔ̀ɔt trong níi khráp','Dừng ở đây.'],
        ['ใช้เวลากี่นาที','chái wee-laa kìi naa-thii','Mất bao nhiêu phút?']
      ] },
    { id: 'th-5', phase: 1, title: 'Thời gian và hẹn gặp', goal: 'Nói giờ, ngày, hẹn lịch.',
      grammar: [
        { h: 'Thời gian', b: 'วันนี้ hôm nay, พรุ่งนี้ ngày mai, เมื่อวาน hôm qua. Thời gian đặt đầu hoặc cuối câu như tiếng Việt.' },
        { h: 'Giờ (cách đơn giản)', b: 'Tiếng Thái có cách nói giờ theo buổi khá phức tạp. Bắt đầu với: buổi sáng 7–11 giờ = số + โมงเช้า; buổi chiều 1–3 giờ = บ่าย + số + โมง; 4–6 giờ chiều = số + โมงเย็น.' }
      ],
      phrases: [
        ['ตอนนี้กี่โมงครับ','tɔɔn-níi kìi moong khráp','Bây giờ mấy giờ?'],
        ['บ่ายสามโมง','bàai sǎam moong','Ba giờ chiều.'],
        ['คุณว่างวันเสาร์ไหมครับ','khun wâang wan sǎo mǎi khráp','Thứ bảy bạn rảnh không?'],
        ['เจอกันกี่โมงดี','jəə kan kìi moong dii','Mấy giờ gặp thì được?'],
        ['เจอกันพรุ่งนี้','jəə kan phrûng-níi','Mai gặp nhé.'],
        ['วันนี้ พรุ่งนี้ เมื่อวาน','wan-níi, phrûng-níi, mʉ̂a-waan','hôm nay, ngày mai, hôm qua'],
        ['ขอโทษครับ ผมมาสาย','khɔ̌ɔ-thôot khráp, phǒm maa sǎai','Xin lỗi, tôi đến muộn.']
      ] },
    { id: 'th-6', phase: 2, title: 'Bản thân, gia đình, sở thích', goal: 'Nói về gia đình, nơi ở, sở thích.',
      grammar: [
        { h: 'มี = có', b: 'ผมมีพี่สาวหนึ่งคน = Tôi có một chị gái (คน là lượng từ cho người). Phủ định: ไม่มี.' },
        { h: 'Sở hữu ของ', b: 'Vật + ของ + người: บ้านของผม = nhà của tôi. Giống hệt trật tự tiếng Việt.' },
        { h: 'ชอบ + động từ', b: 'ผมชอบเล่นแบดมินตัน = Tôi thích chơi cầu lông.' }
      ],
      phrases: [
        ['บ้านผมมีสี่คน','bâan phǒm mii sìi khon','Nhà tôi có bốn người.'],
        ['ผมมีพี่สาวหนึ่งคน','phǒm mii phîi-sǎao nʉ̀ng khon','Tôi có một chị gái.'],
        ['ผมเรียนอยู่ที่ไต้หวัน','phǒm rian yùu thîi Tâi-wǎn','Tôi đang học ở Đài Loan.'],
        ['คุณอยู่ที่ไหน','khun yùu thîi-nǎi','Bạn sống ở đâu?'],
        ['งานอดิเรกของคุณคืออะไร','ngaan-à-dì-rèek khɔ̌ɔng khun khʉʉ à-rai','Sở thích của bạn là gì?'],
        ['ผมชอบเล่นแบดมินตัน','phǒm chɔ̂ɔp lên bɛ́t-min-tân','Tôi thích chơi cầu lông.'],
        ['ผมชอบเล่นเกมกับดูอนิเมะ','phǒm chɔ̂ɔp lên keem kàp duu à-ní-mee','Tôi thích chơi game và xem anime.'],
        ['คุณมีพี่น้องกี่คน','khun mii phîi-nɔ́ɔng kìi khon','Bạn có mấy anh chị em?']
      ] },
    { id: 'th-7', phase: 2, title: 'Kể chuyện đã qua', goal: 'Kể việc đã làm, trải nghiệm.',
      grammar: [
        { h: 'แล้ว = rồi', b: 'Động từ + แล้ว = đã … rồi: ผมกินข้าวแล้ว. Giống "rồi" tiếng Việt. Chưa: ยังไม่ + động từ.' },
        { h: 'เคย = từng', b: 'เคย + động từ = đã từng. Chưa từng: ยังไม่เคย. Giống hệt "từng / chưa từng".' },
        { h: 'ที่แล้ว = vừa rồi', b: 'อาทิตย์ที่แล้ว tuần trước, เดือนที่แล้ว tháng trước.' }
      ],
      phrases: [
        ['เมื่อวานผมไปตลาดกลางคืน','mʉ̂a-waan phǒm pai tà-làat klaang-khʉʉn','Hôm qua tôi đi chợ đêm.'],
        ['เสาร์อาทิตย์ที่แล้วทำอะไร','sǎo-aa-thít thîi-lɛ́ɛw tham à-rai','Cuối tuần rồi bạn làm gì?'],
        ['ผมกินข้าวแล้ว','phǒm kin khâao lɛ́ɛw','Tôi ăn cơm rồi.'],
        ['คุณเคยไปเชียงใหม่ไหม','khun khəəi pai Chiang-mài mǎi','Bạn từng đi Chiang Mai chưa?'],
        ['ยังไม่เคยครับ','yang mâi khəəi khráp','Chưa từng.'],
        ['เคยไปครั้งหนึ่ง','khəəi pai khráng nʉ̀ng','Từng đi một lần.'],
        ['สนุกมาก','sà-nùk mâak','Vui lắm.'],
        ['ผมยังไม่ได้กินข้าว','phǒm yang mâi dâi kin khâao','Tôi vẫn chưa ăn cơm.']
      ] },
    { id: 'th-8', phase: 2, title: 'Kế hoạch, mời rủ', goal: 'Nói dự định, rủ đi chơi, nhận lời và từ chối.',
      grammar: [
        { h: 'จะ = sẽ', b: 'จะ + động từ = sẽ. อยาก + động từ = muốn. Như "sẽ" và "muốn" của tiếng Việt.' },
        { h: 'กำลัง…อยู่ = đang', b: 'กำลังกินข้าวอยู่ = đang ăn cơm. Nói nhanh có thể chỉ dùng กำลัง hoặc chỉ อยู่.' },
        { h: 'Rủ rê', b: '…ด้วยกันไหม? = … cùng nhau không? กัน = nhau.' }
      ],
      phrases: [
        ['พรุ่งนี้ผมจะไปเรียน','phrûng-níi phǒm jà pai rian','Mai tôi sẽ đi học.'],
        ['ไปกินข้าวด้วยกันไหม','pai kin khâao dûay-kan mǎi','Đi ăn cùng không?'],
        ['ได้เลยครับ','dâai ləəi khráp','Được luôn!'],
        ['ขอโทษ วันนั้นผมไม่ว่าง','khɔ̌ɔ-thôot, wan nán phǒm mâi wâang','Xin lỗi, hôm đó tôi không rảnh.'],
        ['ผมอยากไปทะเล','phǒm yàak pai thá-lee','Tôi muốn đi biển.'],
        ['กำลังทำอะไรอยู่','kam-lang tham à-rai yùu','Đang làm gì đó?'],
        ['ปิดเทอมผมจะกลับเวียดนาม','pìt-thəəm phǒm jà klàp Wîat-naam','Nghỉ học kỳ tôi sẽ về Việt Nam.']
      ] },
    { id: 'th-9', phase: 2, title: 'So sánh và miêu tả', goal: 'So sánh, miêu tả đồ vật, thời tiết.',
      grammar: [
        { h: 'กว่า = hơn', b: 'Tính từ + กว่า: ถูกกว่า = rẻ hơn. A + tính từ + กว่า + B: เขาสูงกว่าผม = Anh ấy cao hơn tôi. Giống hệt tiếng Việt.' },
        { h: 'ที่สุด = nhất, เกินไป = quá', b: 'ดีที่สุด = tốt nhất. ใหญ่เกินไป = to quá.' }
      ],
      phrases: [
        ['อันนี้ถูกกว่า','an níi thùuk kwàa','Cái này rẻ hơn.'],
        ['มีสีอื่นไหมครับ','mii sǐi ʉ̀ʉn mǎi khráp','Có màu khác không?'],
        ['ใหญ่เกินไป มีเล็กกว่านี้ไหม','yài kəən pai, mii lék kwàa níi mǎi','To quá, có cái nhỏ hơn không?'],
        ['วันนี้ร้อนมาก','wan-níi rɔ́ɔn mâak','Hôm nay nóng quá.'],
        ['อันไหนดีที่สุด','an nǎi dii thîi-sùt','Cái nào tốt nhất?'],
        ['เขาสูงกว่าผม','khǎo sǔung kwàa phǒm','Anh ấy cao hơn tôi.'],
        ['พูดไทยเก่งจัง','phûut thai kèng jang','Nói tiếng Thái giỏi ghê!'],
        ['ยังไม่เก่งครับ กำลังเรียนอยู่','yang mâi kèng khráp, kam-lang rian yùu','Chưa giỏi đâu, vẫn đang học.']
      ] },
    { id: 'th-10', phase: 2, title: 'Sức khỏe và nhờ giúp đỡ', goal: 'Nói khi ốm, nhờ người khác, xin nói chậm.',
      grammar: [
        { h: 'ช่วย…หน่อย', b: 'ช่วย + động từ + หน่อย = làm ơn … giúp. Lịch sự hơn: thêm ได้ไหมครับ ở cuối.' },
        { h: 'ปวด = đau', b: 'ปวด + bộ phận: ปวดหัว đau đầu, ปวดท้อง đau bụng.' }
      ],
      phrases: [
        ['ผมไม่สบาย','phǒm mâi sà-baai','Tôi không khỏe.'],
        ['ปวดหัวครับ','pùat hǔa khráp','Tôi đau đầu.'],
        ['ร้านขายยาอยู่ที่ไหน','ráan khǎai yaa yùu thîi-nǎi','Hiệu thuốc ở đâu?'],
        ['ช่วยหน่อยได้ไหมครับ','chûay nɔ̀y dâai mǎi khráp','Giúp tôi một chút được không?'],
        ['พูดช้าๆ หน่อยได้ไหมครับ','phûut cháa-cháa nɔ̀y dâai mǎi khráp','Nói chậm một chút được không?'],
        ['พูดอีกทีได้ไหมครับ','phûut ìik thii dâai mǎi khráp','Nói lại lần nữa được không?'],
        ['ผมฟังไม่เข้าใจ','phǒm fang mâi khâo-jai','Tôi nghe không hiểu.'],
        ['ภาษาไทยเรียกว่าอะไร','phaa-sǎa thai rîak wâa à-rai','Tiếng Thái gọi là gì?'],
        ['ช่วยด้วย!','chûay dûay!','Cứu với!']
      ] },
    { id: 'th-11', phase: 3, title: 'Nêu ý kiến', goal: 'Đưa ý kiến, đồng ý, phản đối, giải thích lý do.',
      grammar: [
        { h: 'ผมคิดว่า / ผมว่า', b: 'คิดว่า = nghĩ rằng. Văn nói rút gọn: ผมว่า… (tôi thấy…).' },
        { h: 'Liên từ', b: 'เพราะ(ว่า) vì, ก็เลย nên, แต่(ว่า) nhưng, แล้วก็ và còn.' }
      ],
      phrases: [
        ['ผมคิดว่าดีนะ','phǒm khít wâa dii ná','Tôi nghĩ là tốt đó.'],
        ['ผมเห็นด้วย','phǒm hěn dûay','Tôi đồng ý.'],
        ['ผมไม่ค่อยเห็นด้วย','phǒm mâi khɔ̂y hěn dûay','Tôi không đồng ý lắm.'],
        ['จริงเหรอ','jing rə̌ə','Thật à?'],
        ['เพราะว่าแพงไป ผมก็เลยไม่ซื้อ','phrɔ́ wâa phɛɛng pai, phǒm kɔ̂ ləəi mâi sʉ́ʉ','Vì đắt quá nên tôi không mua.'],
        ['แต่ผมว่ายากนิดหน่อย','tɛ̀ɛ phǒm wâa yâak nít-nɔ̀y','Nhưng tôi thấy hơi khó.'],
        ['คุณคิดว่ายังไง','khun khít wâa yang-ngai','Bạn nghĩ sao?'],
        ['ใช่ แล้วก็สะดวกด้วย','châi, lɛ́ɛw kɔ̂ sà-dùak dûay','Đúng, mà còn tiện nữa.']
      ] },
    { id: 'th-12', phase: 3, title: 'Giả định và điều kiện', goal: 'Nói "nếu… thì…", "dù… vẫn…".',
      grammar: [
        { h: 'ถ้า…ก็…', b: 'ถ้า = nếu, ก็ (kɔ̂) = thì. ถ้าฝนตก ผมก็ไม่ไป. Có thể dùng จะ cho kết quả tương lai.' },
        { h: 'ถึง…ก็… / ไม่งั้น', b: 'ถึง(แม้)…ก็… = dù … vẫn. ไม่งั้น = không thì.' }
      ],
      phrases: [
        ['ถ้าฝนตก ผมจะไม่ไป','thâa fǒn tòk, phǒm jà mâi pai','Nếu mưa tôi sẽ không đi.'],
        ['ถ้าว่างก็โทรมานะ','thâa wâang kɔ̂ thoo maa ná','Nếu rảnh thì gọi nhé.'],
        ['ถ้ามีเวลา ผมอยากไปเที่ยวญี่ปุ่น','thâa mii wee-laa, phǒm yàak pai thîao Yîi-pùn','Nếu có thời gian, tôi muốn đi Nhật chơi.'],
        ['ถ้าเป็นผม ผมจะถามอาจารย์ก่อน','thâa pen phǒm, phǒm jà thǎam aa-jaan kɔ̀ɔn','Nếu là tôi, tôi sẽ hỏi thầy trước.'],
        ['รีบหน่อย ไม่งั้นจะสาย','rîip nɔ̀y, mâi ngán jà sǎai','Nhanh lên, không thì muộn.'],
        ['ถึงจะเหนื่อย ผมก็จะไปซ้อม','thʉ̌ng jà nʉ̀ay, phǒm kɔ̂ jà pai sɔ́ɔm','Dù mệt tôi vẫn đi tập.'],
        ['รู้อย่างนี้น่าจะ…','rúu yàang-níi nâa-jà…','Biết thế này thì đã…']
      ] },
    { id: 'th-13', phase: 3, title: 'Xử lý sự cố', goal: 'Mất đồ, hỏng hóc, nhầm món, khiếu nại.',
      grammar: [
        { h: 'Bị động ถูก / โดน', b: 'ถูก thùuk / โดน doon + động từ = bị: ถูกขโมย = bị trộm. Giống chữ "bị" của tiếng Việt.' },
        { h: 'ให้ = cho, để', b: 'ช่วย…ให้หน่อย = làm giúp cho (tôi). เปลี่ยนให้ = đổi cho.' }
      ],
      phrases: [
        ['ผมทำกระเป๋าเงินหาย','phǒm tham krà-pǎo-ngən hǎai','Tôi làm mất ví.'],
        ['แอร์เสีย','ɛɛ sǐa','Máy lạnh hỏng rồi.'],
        ['ผมไม่ได้สั่งอันนี้','phǒm mâi dâi sàng an níi','Tôi không gọi món này.'],
        ['เกิดอะไรขึ้น','kə̀ət à-rai khʉ̂n','Có chuyện gì vậy?'],
        ['ช่วยเปลี่ยนให้หน่อยได้ไหมครับ','chûay plìan hâi nɔ̀y dâai mǎi khráp','Đổi giúp tôi được không?'],
        ['โทรศัพท์ผมถูกขโมย','thoo-rá-sàp phǒm thùuk khà-mooy','Điện thoại tôi bị trộm.'],
        ['ไม่มีปัญหา เดี๋ยวจัดการให้','mâi mii pan-hǎa, dǐao jàt-kaan hâi','Không vấn đề, để tôi xử lý cho.']
      ] },
    { id: 'th-14', phase: 3, title: 'Nói chuyện tự nhiên', goal: 'Phản hồi, trợ từ cuối câu, cách nói thân mật.',
      grammar: [
        { h: 'Trợ từ cuối câu', b: 'นะ ná (nhé, nha: mềm câu), สิ sì (đi, mà: thúc giục), เลย ləəi (luôn), จัง jang (ghê, quá). Rất giống "nhé, đi, luôn, ghê" của tiếng Việt.' },
        { h: 'Thân mật', b: 'Với bạn bè có thể bỏ ครับ và dùng เรา rao (mình) thay cho ผม.' }
      ],
      phrases: [
        ['อ๋อ เข้าใจแล้ว','ɔ̌ɔ, khâo-jai lɛ́ɛw','À, hiểu rồi.'],
        ['ใช่ๆ จริงด้วย','châi châi, jing dûay','Đúng đúng, thật đấy.'],
        ['เป็นไงบ้าง','pen ngai bâang','Dạo này sao rồi?'],
        ['ไม่รู้สิ','mâi rúu sì','Không biết nữa.'],
        ['แป๊บนึงนะ','pɛ́p nʉng ná','Đợi chút nhé.'],
        ['เหนื่อยจัง','nʉ̀ay jang','Mệt ghê.'],
        ['สู้ๆ นะ','sûu sûu ná','Cố lên nhé!'],
        ['ช่างมันเถอะ','châng man thə̀','Kệ nó đi.'],
        ['ไปกันเถอะ','pai kan thə̀','Mình đi thôi.']
      ] }
  ]
};
