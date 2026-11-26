window.TN_DATA = window.TN_DATA || {};
TN_DATA.ja = {
  code: 'ja', name: 'Tiếng Nhật', short: 'Nhật', native: '日本語', tts: 'ja-JP', roman: 'Romaji',
  intro: 'Không có thanh điệu, phát âm khá dễ với người Việt. Phần khó là ngữ pháp: động từ đứng cuối câu và có nhiều thể. Học thể lịch sự (です/ます) trước, thể thân mật sau.',
  sounds: [
    { title: 'Bác hay bà', items: [['おばさん','obasan','cô, bác gái'],['おばあさん','obāsan','bà (nguyên âm dài)']] },
    { title: 'Âm ngắt っ', items: [['きて','kite','hãy đến'],['きって','kitte','con tem (có ngắt)']] },
    { title: 'Ở đây hay trường cấp 3', items: [['ここ','koko','ở đây'],['こうこう','kōkō','trường cấp 3']] },
    { title: 'Tuyết hay dũng khí', items: [['ゆき','yuki','tuyết'],['ゆうき','yūki','dũng khí']] },
    { title: 'Dốc hay nhà văn', items: [['さか','saka','con dốc'],['さっか','sakka','nhà văn']] },
    { title: 'Cao độ: mưa hay kẹo', items: [['雨','áme','mưa (cao ở âm đầu)'],['飴','amé','kẹo (cao ở âm sau)']] }
  ],
  units: [
    { id: 'ja-p1', phase: 0, title: 'Nguyên âm và nhịp mora', goal: 'Nói 5 nguyên âm chuẩn, giữ đều nhịp từng âm.',
      grammar: [
        { h: 'Năm nguyên âm', b: 'a i u e o. Chú ý u: môi KHÔNG tròn, gần "ư". Các âm khác giống tiếng Việt: a, i, ê, ô.' },
        { h: 'Nhịp đều (mora)', b: 'Mỗi kana là một nhịp bằng nhau. Nguyên âm dài (ō, ū) = 2 nhịp, ん = 1 nhịp, っ = 1 nhịp lặng. Đếm nhịp bằng ngón tay khi nhại theo: と-う-きょ-う = 4 nhịp.' },
        { h: 'Đừng "hát"', b: 'Tiếng Nhật không có thanh điệu như tiếng Việt, chỉ có cao độ nhẹ lên xuống. Nói phẳng, đều, đừng thêm dấu sắc hay huyền.' }
      ],
      phrases: [
        ['あいうえお','a i u e o','năm nguyên âm'],['ありがとう','arigatō','cảm ơn (ga-tō: ō dài)'],
        ['東京','Tōkyō','Tokyo (4 nhịp)'],['日本','Nihon','Nhật Bản'],
        ['おばあさん','obāsan','bà'],['きって','kitte','con tem'],
        ['先生','sensei','thầy cô (ei đọc thành ê dài)'],['すし','sushi','sushi (u gần như câm)']
      ] },
    { id: 'ja-p2', phase: 0, title: 'Âm đặc biệt và cao độ', goal: 'Âm ngắt っ, âm mũi ん, âm ghép, cao độ cơ bản.',
      grammar: [
        { h: 'Âm khó', b: 'r = giữa "r" và "l", lưỡi chạm nhẹ một cái. tsu = "ts" liền. fu = thổi nhẹ bằng hai môi, không cắn môi. Âm ghép きゃ kya, しゅ shu, ちょ cho đọc liền một nhịp.' },
        { h: 'Cao độ', b: 'Mỗi từ có một chỗ giọng hạ xuống. 雨 áme (mưa): cao rồi thấp. 飴 amé (kẹo): thấp rồi cao. Không cần học thuộc: nhại theo audio là tự đúng dần.' }
      ],
      phrases: [
        ['ちょっと','chotto','một chút'],['きゃく','kyaku','khách'],['りんご','ringo','quả táo'],['つくえ','tsukue','cái bàn'],
        ['ふじさん','Fujisan','núi Phú Sĩ'],['雨','áme','mưa'],['飴','amé','kẹo'],['がんばって','ganbatte','cố lên']
      ] },
    { id: 'ja-1', phase: 1, title: 'Chào hỏi và giới thiệu', goal: 'Tự giới thiệu, chào hỏi lịch sự.',
      grammar: [
        { h: 'A は B です', b: 'A là B. は đọc là "wa". わたしは がくせいです = Tôi là sinh viên. Phủ định: じゃありません. Câu hỏi: thêm か ở cuối.' },
        { h: 'Bỏ chủ ngữ', b: 'Người Nhật thường bỏ "tôi" khi đã rõ: ティエンです = (Tôi) là Thiện.' }
      ],
      phrases: [
        ['こんにちは。','Konnichiwa.','Xin chào.'],
        ['はじめまして、ティエンです。','Hajimemashite, Tien desu.','Rất vui được gặp, tôi là Thiện.'],
        ['よろしくお願いします。','Yoroshiku onegaishimasu.','Mong được giúp đỡ.','Luôn nói sau khi tự giới thiệu'],
        ['お名前は？','Onamae wa?','Bạn tên gì?'],
        ['ベトナムから来ました。','Betonamu kara kimashita.','Tôi đến từ Việt Nam.'],
        ['わたしは学生です。','Watashi wa gakusei desu.','Tôi là sinh viên.'],
        ['ありがとうございます。','Arigatō gozaimasu.','Cảm ơn ạ.'],
        ['すみません。大丈夫です。','Sumimasen. Daijōbu desu.','Xin lỗi. Không sao đâu.'],
        ['おはようございます。','Ohayō gozaimasu.','Chào buổi sáng.']
      ] },
    { id: 'ja-2', phase: 1, title: 'Số đếm và mua sắm', goal: 'Hỏi giá, mua đồ, thanh toán.',
      grammar: [
        { h: 'Số đếm', b: 'いち 1, に 2, さん 3, よん 4, ご 5, ろく 6, なな 7, はち 8, きゅう 9, じゅう 10, ひゃく 100, せん 1000. Số Hán-Nhật giống Hán-Việt: さん tam, ご ngũ.' },
        { h: 'Đếm đồ vật', b: 'ひとつ 1 cái, ふたつ 2, みっつ 3, よっつ 4, いつつ 5. Dùng được cho hầu hết đồ vật.' },
        { h: '〜をください', b: 'Vật + を + ください = Cho tôi … Trợ từ を (đọc "o") đánh dấu tân ngữ.' }
      ],
      phrases: [
        ['これはいくらですか。','Kore wa ikura desu ka?','Cái này bao nhiêu tiền?'],
        ['千五百円です。','Sen gohyaku en desu.','1.500 yên.'],
        ['ちょっと高いですね。','Chotto takai desu ne.','Hơi đắt nhỉ.'],
        ['これをください。','Kore o kudasai.','Cho tôi cái này.'],
        ['ふたつください。','Futatsu kudasai.','Cho tôi hai cái.'],
        ['カードで払えますか。','Kādo de haraemasu ka?','Trả bằng thẻ được không?'],
        ['袋はいりますか。いいえ、大丈夫です。','Fukuro wa irimasu ka? Iie, daijōbu desu.','Cần túi không? Không, không cần ạ.']
      ] },
    { id: 'ja-3', phase: 1, title: 'Gọi món và ăn uống', goal: 'Gọi món, ăn uống đúng phép, tính tiền.',
      grammar: [
        { h: 'お願いします', b: '… + お願いします = làm ơn cho … Dùng được ở mọi nơi: メニューをお願いします.' },
        { h: 'Câu cửa miệng khi ăn', b: 'いただきます trước khi ăn, ごちそうさまでした sau khi ăn. Người Nhật luôn nói.' }
      ],
      phrases: [
        ['メニューをお願いします。','Menyū o onegaishimasu.','Cho tôi xem thực đơn.'],
        ['ラーメンをひとつください。','Rāmen o hitotsu kudasai.','Cho một bát ramen.'],
        ['お水をください。','Omizu o kudasai.','Cho tôi nước.'],
        ['店内で。/ 持ち帰りで。','Tennai de. / Mochikaeri de.','Ăn tại chỗ. / Mang về.'],
        ['いただきます。','Itadakimasu.','(Mời) tôi xin ăn.'],
        ['おいしい！','Oishii!','Ngon quá!'],
        ['ごちそうさまでした。','Gochisōsama deshita.','Cảm ơn vì bữa ăn.'],
        ['お会計をお願いします。','Okaikei o onegaishimasu.','Tính tiền giúp tôi.']
      ] },
    { id: 'ja-4', phase: 1, title: 'Hỏi đường và đi lại', goal: 'Hỏi đường, đi tàu, đi taxi.',
      grammar: [
        { h: '〜はどこですか', b: '… ở đâu? Trả lời: あそこです (ở đằng kia), 右 migi phải, 左 hidari trái.' },
        { h: 'Thể て + ください', b: 'Thể て của động từ + ください = hãy … : まっすぐ行ってください = hãy đi thẳng. Bạn sẽ học cách chia thể て kỹ ở bài sau, giờ học thuộc cả cụm.' }
      ],
      phrases: [
        ['すみません、トイレはどこですか。','Sumimasen, toire wa doko desu ka?','Xin lỗi, nhà vệ sinh ở đâu?'],
        ['駅はどうやって行きますか。','Eki wa dō yatte ikimasu ka?','Đến ga đi thế nào?'],
        ['まっすぐ行ってください。','Massugu itte kudasai.','Đi thẳng nhé.'],
        ['二つ目の角を右に曲がって。','Futatsume no kado o migi ni magatte.','Rẽ phải ở góc thứ hai.'],
        ['遠いですか。','Tōi desu ka?','Có xa không?'],
        ['この住所までお願いします。','Kono jūsho made onegaishimasu.','Cho tôi đến địa chỉ này.'],
        ['ここで止めてください。','Koko de tomete kudasai.','Dừng ở đây giúp tôi.'],
        ['この電車は新宿に行きますか。','Kono densha wa Shinjuku ni ikimasu ka?','Tàu này có đi Shinjuku không?']
      ] },
    { id: 'ja-5', phase: 1, title: 'Thời gian và hẹn gặp', goal: 'Nói giờ, ngày, hẹn lịch.',
      grammar: [
        { h: 'Thời gian + に', b: '三時に会いましょう = Gặp lúc 3 giờ. Từ chỉ tương đối như 今日, 明日 không cần に.' },
        { h: '〜ましょう / 〜ませんか', b: 'Động từ thể ます bỏ ます + ましょう = cùng … nhé. + ませんか = … không? (rủ lịch sự).' },
        { h: 'Động từ đứng cuối', b: 'Trật tự: chủ ngữ, thời gian, nơi chốn, tân ngữ, động từ. Ngược tiếng Việt, cần nhại nhiều để quen.' }
      ],
      phrases: [
        ['今何時ですか。','Ima nanji desu ka?','Bây giờ mấy giờ?'],
        ['午後三時半です。','Gogo sanji han desu.','Ba giờ rưỡi chiều.'],
        ['土曜日、ひまですか。','Doyōbi, hima desu ka?','Thứ bảy bạn rảnh không?'],
        ['何時に会いましょうか。','Nanji ni aimashō ka?','Mấy giờ mình gặp nhau?'],
        ['また明日！','Mata ashita!','Mai gặp lại!'],
        ['今日、明日、昨日','kyō, ashita, kinō','hôm nay, ngày mai, hôm qua'],
        ['遅れてすみません。','Okurete sumimasen.','Xin lỗi tôi đến muộn.']
      ] },
    { id: 'ja-6', phase: 2, title: 'Bản thân, gia đình, sở thích', goal: 'Nói về gia đình, nơi ở, sở thích.',
      grammar: [
        { h: 'います / あります', b: 'Có (người, con vật): います. Có (đồ vật): あります. 姉がいます = Tôi có chị gái.' },
        { h: '〜が好きです', b: 'Thích …: ゲームが好きです. Thích làm gì: động từ + のが好きです.' },
        { h: 'Thể ている', b: 'Đang làm hoặc trạng thái kéo dài: 台湾で勉強しています = Tôi đang học ở Đài Loan. 住んでいます = đang sống.' }
      ],
      phrases: [
        ['家族は四人です。','Kazoku wa yonin desu.','Gia đình tôi có bốn người.'],
        ['姉がひとりいます。','Ane ga hitori imasu.','Tôi có một chị gái.'],
        ['台湾で勉強しています。','Taiwan de benkyō shite imasu.','Tôi đang học ở Đài Loan.'],
        ['どこに住んでいますか。','Doko ni sunde imasu ka?','Bạn sống ở đâu?'],
        ['趣味は何ですか。','Shumi wa nan desu ka?','Sở thích của bạn là gì?'],
        ['バドミントンが好きです。','Badominton ga suki desu.','Tôi thích cầu lông.'],
        ['ゲームとアニメが大好きです。','Gēmu to anime ga daisuki desu.','Tôi rất thích game và anime.'],
        ['兄弟はいません。','Kyōdai wa imasen.','Tôi không có anh chị em.']
      ] },
    { id: 'ja-7', phase: 2, title: 'Kể chuyện đã qua', goal: 'Kể việc đã làm, trải nghiệm.',
      grammar: [
        { h: 'Quá khứ ました', b: '行きます → 行きました (đã đi). Phủ định quá khứ: 行きませんでした. Tính từ い: 楽しい → 楽しかったです.' },
        { h: 'Thể た + ことがあります', b: 'Đã từng: 行ったことがあります. Thể た = thể て đổi て→た, で→だ (行って→行った, 読んで→読んだ).' },
        { h: 'もう / まだ', b: 'もう食べました = ăn rồi. まだです = chưa.' }
      ],
      phrases: [
        ['昨日、夜市に行きました。','Kinō, yoichi ni ikimashita.','Hôm qua tôi đi chợ đêm.'],
        ['週末、何をしましたか。','Shūmatsu, nani o shimashita ka?','Cuối tuần bạn đã làm gì?'],
        ['とても楽しかったです。','Totemo tanoshikatta desu.','Vui lắm.'],
        ['日本に行ったことがありますか。','Nihon ni itta koto ga arimasu ka?','Bạn từng đi Nhật chưa?'],
        ['まだ行ったことがありません。','Mada itta koto ga arimasen.','Tôi chưa từng đi.'],
        ['もう食べました。','Mō tabemashita.','Tôi ăn rồi.'],
        ['映画を見ました。','Eiga o mimashita.','Tôi đã xem phim.'],
        ['昨日は雨でした。','Kinō wa ame deshita.','Hôm qua trời mưa.']
      ] },
    { id: 'ja-8', phase: 2, title: 'Kế hoạch, mời rủ', goal: 'Nói dự định, rủ đi chơi, từ chối khéo.',
      grammar: [
        { h: 'Tương lai = thể ます', b: 'Thể ます đã mang nghĩa tương lai: 明日行きます = Mai tôi đi. つもりです = định làm.' },
        { h: '〜たいです', b: 'Muốn làm: bỏ ます thêm たいです: 行きます → 行きたいです.' },
        { h: 'Từ chối khéo', b: 'Người Nhật hiếm khi nói "không" thẳng. その日はちょっと… (hôm đó thì hơi…) là đủ hiểu là từ chối.' }
      ],
      phrases: [
        ['明日、授業に行きます。','Ashita, jugyō ni ikimasu.','Mai tôi đi học.'],
        ['一緒にご飯を食べませんか。','Issho ni gohan o tabemasen ka?','Cùng đi ăn không?'],
        ['いいですね！行きましょう。','Ii desu ne! Ikimashō.','Hay quá! Đi thôi.'],
        ['すみません、その日はちょっと…','Sumimasen, sono hi wa chotto…','Xin lỗi, hôm đó thì hơi…'],
        ['海に行きたいです。','Umi ni ikitai desu.','Tôi muốn đi biển.'],
        ['今、何をしていますか。','Ima, nani o shite imasu ka?','Bạn đang làm gì đó?'],
        ['冬休みにベトナムへ帰るつもりです。','Fuyuyasumi ni Betonamu e kaeru tsumori desu.','Tôi định nghỉ đông về Việt Nam.']
      ] },
    { id: 'ja-9', phase: 2, title: 'So sánh và miêu tả', goal: 'So sánh, miêu tả đồ vật, thời tiết.',
      grammar: [
        { h: 'A は B より〜', b: 'A … hơn B: 台湾は日本より暑いです = Đài Loan nóng hơn Nhật. Hỏi chọn: AとBとどちらが…? → Aのほうが…' },
        { h: '一番 và すぎる', b: '一番いい = tốt nhất. Tính từ bỏ い + すぎます = quá …: 大きすぎます = to quá.' }
      ],
      phrases: [
        ['これのほうが安いです。','Kore no hō ga yasui desu.','Cái này rẻ hơn.'],
        ['台湾は日本より暑いです。','Taiwan wa Nihon yori atsui desu.','Đài Loan nóng hơn Nhật.'],
        ['ほかの色はありますか。','Hoka no iro wa arimasu ka?','Có màu khác không?'],
        ['ちょっと大きすぎます。','Chotto ōkisugimasu.','Hơi to quá.'],
        ['今日はとても暑いですね。','Kyō wa totemo atsui desu ne.','Hôm nay nóng quá nhỉ.'],
        ['どれが一番いいですか。','Dore ga ichiban ii desu ka?','Cái nào tốt nhất?'],
        ['日本語が上手ですね！','Nihongo ga jōzu desu ne!','Bạn giỏi tiếng Nhật quá!'],
        ['いえいえ、まだまだです。','Ie ie, mada mada desu.','Không đâu, còn kém lắm.','Cách đáp khiêm tốn quen thuộc']
      ] },
    { id: 'ja-10', phase: 2, title: 'Sức khỏe và nhờ giúp đỡ', goal: 'Nói khi ốm, nhờ người khác, xin phép.',
      grammar: [
        { h: '〜てもらえますか', b: 'Thể て + もらえますか = có thể … giúp tôi không? Lịch sự, dùng rất nhiều.' },
        { h: '〜てもいいですか', b: 'Thể て + もいいですか = tôi … có được không? (xin phép).' },
        { h: 'Đau ở đâu', b: 'Bộ phận + が痛いです: 頭が痛いです đau đầu, お腹が痛いです đau bụng.' }
      ],
      phrases: [
        ['気分が悪いです。','Kibun ga warui desu.','Tôi thấy không khỏe.'],
        ['頭が痛いです。','Atama ga itai desu.','Tôi đau đầu.'],
        ['薬局はどこですか。','Yakkyoku wa doko desu ka?','Hiệu thuốc ở đâu?'],
        ['ちょっと手伝ってもらえますか。','Chotto tetsudatte moraemasu ka?','Giúp tôi một chút được không?'],
        ['もう少しゆっくり話してください。','Mō sukoshi yukkuri hanashite kudasai.','Làm ơn nói chậm hơn một chút.'],
        ['もう一度お願いします。','Mō ichido onegaishimasu.','Nói lại lần nữa giúp tôi.'],
        ['よくわかりません。','Yoku wakarimasen.','Tôi không hiểu lắm.'],
        ['これは日本語で何と言いますか。','Kore wa Nihongo de nan to iimasu ka?','Cái này tiếng Nhật nói thế nào?'],
        ['写真を撮ってもいいですか。','Shashin o tottemo ii desu ka?','Tôi chụp ảnh được không?']
      ] },
    { id: 'ja-11', phase: 3, title: 'Nêu ý kiến', goal: 'Đưa ý kiến, đồng ý, phản đối, giải thích lý do.',
      grammar: [
        { h: 'Thể thường + と思います', b: 'Tôi nghĩ rằng …: いいと思います. Trước と思います dùng thể thường (thể từ điển, た, ない), không dùng ます.' },
        { h: 'から / でも', b: 'Câu + から = vì … : 高いから、買いません. でも = nhưng (đầu câu).' }
      ],
      phrases: [
        ['いいと思います。','Ii to omoimasu.','Tôi nghĩ là hay đấy.'],
        ['わたしもそう思います。','Watashi mo sō omoimasu.','Tôi cũng nghĩ vậy.'],
        ['ちょっと違うと思います。','Chotto chigau to omoimasu.','Tôi nghĩ hơi khác một chút.'],
        ['本当ですか。','Hontō desu ka?','Thật vậy à?'],
        ['高いから、買いませんでした。','Takai kara, kaimasen deshita.','Vì đắt nên tôi không mua.'],
        ['でも、ちょっと難しいです。','Demo, chotto muzukashii desu.','Nhưng hơi khó.'],
        ['どう思いますか。','Dō omoimasu ka?','Bạn nghĩ sao?'],
        ['なるほど、それに便利ですね。','Naruhodo, sore ni benri desu ne.','Ra vậy, mà còn tiện nữa nhỉ.']
      ] },
    { id: 'ja-12', phase: 3, title: 'Giả định và điều kiện', goal: 'Nói "nếu… thì…", "dù… vẫn…", "phải…".',
      grammar: [
        { h: '〜たら', b: 'Thể た + ら = nếu/khi … : 雨が降ったら = nếu mưa. Dùng được cho hầu hết trường hợp, nên học trước.' },
        { h: '〜なら / 〜ば', b: 'なら = nếu là (nói về chủ đề người kia nhắc tới). ば: 安ければ = nếu rẻ.' },
        { h: '〜ても / 〜なければなりません', b: 'Thể て + も = dù … vẫn. ないと / なければなりません = phải làm.' }
      ],
      phrases: [
        ['雨が降ったら、行きません。','Ame ga futtara, ikimasen.','Nếu mưa thì tôi không đi.'],
        ['ひまなら、電話してね。','Hima nara, denwa shite ne.','Nếu rảnh thì gọi nhé.'],
        ['時間があったら、日本に行きたいです。','Jikan ga attara, Nihon ni ikitai desu.','Nếu có thời gian tôi muốn đi Nhật.'],
        ['わたしなら、先生に聞きます。','Watashi nara, sensei ni kikimasu.','Nếu là tôi thì tôi sẽ hỏi thầy.'],
        ['安ければ、買います。','Yasukereba, kaimasu.','Nếu rẻ thì tôi mua.'],
        ['疲れても、練習に行きます。','Tsukarete mo, renshū ni ikimasu.','Dù mệt tôi vẫn đi tập.'],
        ['もう行かないと。','Mō ikanai to.','Tôi phải đi rồi.']
      ] },
    { id: 'ja-13', phase: 3, title: 'Xử lý sự cố', goal: 'Mất đồ, hỏng hóc, nhầm món, khiếu nại.',
      grammar: [
        { h: 'Bị động', b: 'Động từ đổi đuôi thành られる/される: 盗む → 盗まれる. 携帯を盗まれました = Tôi bị trộm điện thoại.' },
        { h: 'Cho và nhận', b: 'あげる: tôi cho người khác. くれる: người khác cho tôi. もらう: tôi nhận. Thể て + くれました = (ai đó) đã làm giúp tôi.' }
      ],
      phrases: [
        ['財布をなくしました。','Saifu o nakushimashita.','Tôi làm mất ví.'],
        ['エアコンが壊れています。','Eakon ga kowarete imasu.','Máy lạnh bị hỏng.'],
        ['注文したものと違います。','Chūmon shita mono to chigaimasu.','Không đúng món tôi gọi.'],
        ['どうしましたか。','Dō shimashita ka?','Có chuyện gì vậy?'],
        ['交換してもらえますか。','Kōkan shite moraemasu ka?','Đổi giúp tôi được không?'],
        ['携帯を盗まれました。','Keitai o nusumaremashita.','Tôi bị trộm điện thoại.'],
        ['駅員さんが教えてくれました。','Ekiin-san ga oshiete kuremashita.','Nhân viên nhà ga đã chỉ cho tôi.'],
        ['すぐ確認します。','Sugu kakunin shimasu.','Tôi kiểm tra ngay.']
      ] },
    { id: 'ja-14', phase: 3, title: 'Nói chuyện thân mật', goal: 'Thể thường, phản hồi, cách nói với bạn bè.',
      grammar: [
        { h: 'Thể thường', b: 'Với bạn bè bỏ です/ます: 行きます → 行く, 行きません → 行かない, 行きました → 行った, 行きましょう → 行こう. Câu hỏi chỉ cần lên giọng: 行く？' },
        { h: 'Phản hồi', b: 'Người Nhật phản hồi liên tục khi nghe: うん, そうなんだ, へえ, なるほど. Im lặng dễ bị hiểu là không chú ý.' }
      ],
      phrases: [
        ['うん、そうなんだ。','Un, sō nan da.','Ừ, ra là vậy.'],
        ['マジで？','Maji de?','Thật luôn?'],
        ['ちょっと待って。','Chotto matte.','Đợi chút.'],
        ['最近どう？','Saikin dō?','Dạo này sao rồi?'],
        ['疲れた〜','Tsukareta~','Mệt quá~'],
        ['がんばって！','Ganbatte!','Cố lên!'],
        ['まあ、いいや。','Mā, ii ya.','Thôi, kệ đi.'],
        ['明日、行く？うん、行こう！','Ashita, iku? Un, ikō!','Mai đi không? Ừ, đi thôi!']
      ] }
  ]
};
