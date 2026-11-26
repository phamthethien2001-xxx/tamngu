window.TN_DATA = window.TN_DATA || {};
TN_DATA.zh = {
  code: 'zh', name: 'Tiếng Trung Đài Loan', short: 'Trung', native: '華語', tts: 'zh-TW', roman: 'Pinyin',
  intro: 'Dùng chữ phồn thể và cách nói của Đài Loan. Lợi thế lớn: rất nhiều từ là âm Hán-Việt (學生 học sinh → xuéshēng).',
  sounds: [
    { title: 'Bốn thanh: ma', items: [['媽','mā','mẹ (thanh 1, ngang cao)'],['麻','má','tê (thanh 2, đi lên)'],['馬','mǎ','ngựa (thanh 3, xuống thấp)'],['罵','mà','mắng (thanh 4, rơi mạnh)']] },
    { title: 'Bốn thanh: tang', items: [['湯','tāng','canh'],['糖','táng','đường'],['躺','tǎng','nằm'],['燙','tàng','nóng bỏng']] },
    { title: 'Bốn thanh: ba', items: [['八','bā','số tám'],['拔','bá','nhổ'],['把','bǎ','cầm, nắm'],['爸','bà','bố']] },
    { title: 'Bốn thanh: yi', items: [['衣','yī','áo'],['姨','yí','dì'],['椅','yǐ','ghế'],['意','yì','ý']] },
    { title: 'Bốn thanh: shu', items: [['書','shū','sách'],['熟','shú','chín, quen'],['鼠','shǔ','chuột'],['樹','shù','cây']] },
    { title: 'Phụ âm dễ nhầm', items: [['是','shì','là'],['四','sì','số bốn'],['吃','chī','ăn'],['七','qī','số bảy'],['去','qù','đi'],['女','nǚ','nữ']] }
  ],
  units: [
    { id: 'zh-p1', phase: 0, title: 'Bốn thanh điệu', goal: 'Nghe và nói đúng 4 thanh và thanh nhẹ.',
      grammar: [
        { h: 'Bốn thanh so với tiếng Việt', b: 'Thanh 1 (mā) giống thanh ngang nhưng cao và giữ thẳng. Thanh 2 (má) giống thanh sắc. Thanh 3 (mǎ) xuống thấp, gần thanh hỏi nhưng nói nhanh thường chỉ còn phần thấp. Thanh 4 (mà) rơi mạnh từ cao xuống, như ra lệnh. Thanh nhẹ (ma) ngắn, không dấu.' },
        { h: 'Cách luyện', b: 'Mỗi ngày vào phần Luyện âm làm 2–3 bộ "Bốn thanh". Nghe, đoán, rồi nói to theo. Đúng trên 90% hãy sang bài tiếp.' }
      ],
      phrases: [
        ['媽','mā','mẹ'],['麻','má','tê'],['馬','mǎ','ngựa'],['罵','mà','mắng'],['嗎','ma','(trợ từ hỏi)'],
        ['媽媽罵馬嗎？','Māma mà mǎ ma?','Mẹ mắng con ngựa à?','Câu luyện cả 5 thanh'],
        ['你好','nǐ hǎo','xin chào'],['謝謝','xièxie','cảm ơn']
      ] },
    { id: 'zh-p2', phase: 0, title: 'Phụ âm, vần và biến điệu', goal: 'Nói đúng zh/ch/sh, j/q/x, ü và các quy tắc biến điệu.',
      grammar: [
        { h: 'Âm khó với người Việt', b: 'zh, ch, sh: uốn lưỡi nhẹ. Ở Đài Loan nhiều người nói gần như z, c, s, nên không cần uốn quá mạnh. q giống "ch" bật hơi mạnh. x giống "x" nhưng môi dẹt. ü: tròn môi như "u" nhưng lưỡi đọc "i". Âm bật hơi p, t, k, c, ch, q phải thổi hơi ra rõ.' },
        { h: 'Biến điệu', b: 'Hai thanh 3 đi liền: thanh 3 đầu đọc thành thanh 2 (nǐ hǎo → ní hǎo). 不 bù trước thanh 4 thành bú (bú shì). 一 yī trước thanh 4 thành yí (yí ge), trước thanh 1, 2, 3 thành yì (yìqǐ).' }
      ],
      phrases: [
        ['是','shì','là'],['四','sì','số bốn'],['吃','chī','ăn'],['去','qù','đi'],['女生','nǚshēng','con gái'],
        ['很好','hěn hǎo','rất tốt','Đọc thành hén hǎo'],['不是','bú shì','không phải','不 + thanh 4 → bú'],['一起','yìqǐ','cùng nhau','一 + thanh 3 → yì']
      ] },
    { id: 'zh-1', phase: 1, title: 'Chào hỏi và giới thiệu', goal: 'Tự giới thiệu tên, quốc tịch, nghề nghiệp.',
      grammar: [
        { h: 'Câu với 是 (là)', b: 'Chủ ngữ + 是 + danh từ: 我是學生 (Tôi là học sinh). Phủ định: 我不是… Câu hỏi có/không: thêm 嗎 ở cuối, giống "…không?" của tiếng Việt.' },
        { h: 'Đại từ', b: '我 wǒ tôi, 你 nǐ bạn, 他/她 tā anh ấy/cô ấy. Số nhiều thêm 們: 我們 chúng tôi.' }
      ],
      phrases: [
        ['你好！','Nǐ hǎo!','Xin chào!'],
        ['我叫范世善。','Wǒ jiào Fàn Shìshàn.','Tôi tên là Phạm Thế Thiện.','Tên Hán-Việt của bạn đọc theo tiếng Trung'],
        ['你叫什麼名字？','Nǐ jiào shénme míngzi?','Bạn tên là gì?'],
        ['很高興認識你。','Hěn gāoxìng rènshi nǐ.','Rất vui được làm quen với bạn.'],
        ['我是越南人。','Wǒ shì Yuènán rén.','Tôi là người Việt Nam.'],
        ['我是學生。','Wǒ shì xuéshēng.','Tôi là sinh viên.'],
        ['謝謝！不客氣。','Xièxie! Bú kèqi.','Cảm ơn! Không có gì.'],
        ['不好意思。沒關係。','Bù hǎoyìsi. Méi guānxi.','Xin lỗi (làm phiền). Không sao.','Người Đài Loan dùng 不好意思 rất nhiều'],
        ['最近好嗎？','Zuìjìn hǎo ma?','Dạo này khỏe không?']
      ] },
    { id: 'zh-2', phase: 1, title: 'Số đếm và mua sắm', goal: 'Hỏi giá, trả giá, thanh toán.',
      grammar: [
        { h: 'Số đếm', b: '一 yī, 二 èr, 三 sān, 四 sì, 五 wǔ, 六 liù, 七 qī, 八 bā, 九 jiǔ, 十 shí. 11 = 十一, 20 = 二十, 100 = 一百, 1000 = 一千. Đếm đồ vật dùng 兩 liǎng thay cho 二: 兩個.' },
        { h: 'Lượng từ', b: 'Giống "cái, con, chiếc" của tiếng Việt: số + lượng từ + danh từ. 個 ge dùng chung, 杯 bēi ly, 本 běn quyển, 張 zhāng tờ, vé.' },
        { h: 'Tiền', b: 'Khi nói, tiền Đài Loan đếm bằng 塊 kuài: 一百塊 = 100 Đài tệ.' }
      ],
      phrases: [
        ['這個多少錢？','Zhège duōshǎo qián?','Cái này bao nhiêu tiền?'],
        ['一百五十塊。','Yìbǎi wǔshí kuài.','150 Đài tệ.'],
        ['太貴了！','Tài guì le!','Đắt quá!'],
        ['可以便宜一點嗎？','Kěyǐ piányí yìdiǎn ma?','Bớt một chút được không?'],
        ['我要這個。','Wǒ yào zhège.','Tôi lấy cái này.'],
        ['我要兩個。','Wǒ yào liǎng ge.','Tôi lấy hai cái.'],
        ['可以刷卡嗎？','Kěyǐ shuākǎ ma?','Quẹt thẻ được không?'],
        ['需要袋子嗎？不用，謝謝。','Xūyào dàizi ma? Búyòng, xièxie.','Cần túi không? Không cần, cảm ơn.']
      ] },
    { id: 'zh-3', phase: 1, title: 'Gọi món và ăn uống', goal: 'Gọi đồ ăn, trà sữa, tính tiền.',
      grammar: [
        { h: '我要 / 我想要', b: '我要 + món: tôi muốn/lấy. 我想要 nhẹ nhàng hơn. Cuối câu thêm 謝謝 cho lịch sự.' },
        { h: 'Lựa chọn với 還是', b: 'A 還是 B? = A hay B? Ví dụ: 內用還是外帶? Ăn ở đây hay mang đi?' }
      ],
      phrases: [
        ['有菜單嗎？','Yǒu càidān ma?','Có thực đơn không?'],
        ['我要一杯珍珠奶茶。','Wǒ yào yì bēi zhēnzhū nǎichá.','Cho tôi một ly trà sữa trân châu.'],
        ['半糖少冰。','Bàn táng shǎo bīng.','Nửa đường, ít đá.'],
        ['內用還是外帶？外帶。','Nèiyòng háishì wàidài? Wàidài.','Ăn ở đây hay mang đi? Mang đi.'],
        ['不要香菜。','Búyào xiāngcài.','Không cho rau mùi.'],
        ['這個辣嗎？','Zhège là ma?','Cái này cay không?'],
        ['很好吃！','Hěn hǎochī!','Ngon lắm!'],
        ['我要結帳。','Wǒ yào jiézhàng.','Tôi muốn tính tiền.']
      ] },
    { id: 'zh-4', phase: 1, title: 'Hỏi đường và đi lại', goal: 'Hỏi đường, đi MRT, đi taxi.',
      grammar: [
        { h: 'Vị trí với 在', b: 'Vật + 在 + nơi chốn: 廁所在哪裡? Nhà vệ sinh ở đâu? 哪裡 nǎlǐ = ở đâu (người Đài Loan hay nói 哪裡, ít dùng 哪兒).' },
        { h: '怎麼 + động từ', b: '怎麼走? = Đi thế nào? 怎麼說? = Nói thế nào?' }
      ],
      phrases: [
        ['請問，廁所在哪裡？','Qǐngwèn, cèsuǒ zài nǎlǐ?','Xin hỏi, nhà vệ sinh ở đâu?'],
        ['捷運站怎麼走？','Jiéyùn zhàn zěnme zǒu?','Ga MRT đi thế nào?','捷運 = MRT ở Đài Loan'],
        ['一直走，然後右轉。','Yìzhí zǒu, ránhòu yòu zhuǎn.','Đi thẳng, rồi rẽ phải.'],
        ['在左邊。','Zài zuǒbiān.','Ở bên trái.'],
        ['遠嗎？走路十分鐘。','Yuǎn ma? Zǒulù shí fēnzhōng.','Xa không? Đi bộ 10 phút.'],
        ['請到這個地址。','Qǐng dào zhège dìzhǐ.','Làm ơn đến địa chỉ này.'],
        ['在這裡停就好。','Zài zhèlǐ tíng jiù hǎo.','Dừng ở đây là được.'],
        ['這班車到高雄嗎？','Zhè bān chē dào Gāoxióng ma?','Chuyến xe này đến Cao Hùng không?']
      ] },
    { id: 'zh-5', phase: 1, title: 'Thời gian và hẹn gặp', goal: 'Nói giờ, ngày, hẹn lịch.',
      grammar: [
        { h: 'Thời gian đứng trước động từ', b: 'Khác tiếng Việt: thời gian đặt TRƯỚC động từ. 我明天去 (Tôi ngày mai đi). Thứ tự: chủ ngữ, thời gian, nơi chốn, động từ.' },
        { h: 'Thứ trong tuần', b: 'Người Đài Loan hay nói 星期 xīngqí hoặc 禮拜 lǐbài + số: 星期一 thứ hai, ..., 星期六 thứ bảy, 星期天 chủ nhật.' }
      ],
      phrases: [
        ['現在幾點？','Xiànzài jǐ diǎn?','Bây giờ mấy giờ?'],
        ['下午三點半。','Xiàwǔ sān diǎn bàn.','Ba giờ rưỡi chiều.'],
        ['你星期六有空嗎？','Nǐ xīngqíliù yǒu kòng ma?','Thứ bảy bạn rảnh không?'],
        ['我們幾點見？','Wǒmen jǐ diǎn jiàn?','Mấy giờ chúng ta gặp?'],
        ['明天見！','Míngtiān jiàn!','Mai gặp nhé!'],
        ['今天、明天、昨天','jīntiān, míngtiān, zuótiān','hôm nay, ngày mai, hôm qua'],
        ['不好意思，我遲到了。','Bù hǎoyìsi, wǒ chídào le.','Xin lỗi, tôi đến muộn.']
      ] },
    { id: 'zh-6', phase: 2, title: 'Bản thân, gia đình, sở thích', goal: 'Nói về gia đình, nơi ở, sở thích.',
      grammar: [
        { h: '有 (có) và 沒有', b: '我有一個姊姊 = Tôi có một chị gái. Phủ định của 有 là 沒有, không phải 不有.' },
        { h: '喜歡 + động từ', b: '我喜歡打羽毛球 = Tôi thích đánh cầu lông. 的 de nối sở hữu: 我的興趣 = sở thích của tôi (thứ tự ngược tiếng Việt).' }
      ],
      phrases: [
        ['我家有四個人。','Wǒ jiā yǒu sì ge rén.','Nhà tôi có bốn người.'],
        ['我有一個姊姊。','Wǒ yǒu yí ge jiějie.','Tôi có một chị gái.','Đài Loan viết 姊姊'],
        ['我在台灣讀書。','Wǒ zài Táiwān dúshū.','Tôi đang học ở Đài Loan.'],
        ['你住哪裡？','Nǐ zhù nǎlǐ?','Bạn sống ở đâu?'],
        ['你的興趣是什麼？','Nǐ de xìngqù shì shénme?','Sở thích của bạn là gì?'],
        ['我喜歡打羽毛球。','Wǒ xǐhuān dǎ yǔmáoqiú.','Tôi thích đánh cầu lông.'],
        ['我喜歡打電動跟看動漫。','Wǒ xǐhuān dǎ diàndòng gēn kàn dòngmàn.','Tôi thích chơi game và xem anime.','打電動 = chơi game (Đài Loan)'],
        ['我沒有兄弟。','Wǒ méiyǒu xiōngdì.','Tôi không có anh em trai.']
      ] },
    { id: 'zh-7', phase: 2, title: 'Kể chuyện đã qua', goal: 'Kể việc đã làm, trải nghiệm.',
      grammar: [
        { h: '了: việc đã xảy ra', b: 'Động từ + 了 = đã làm xong: 我吃了. Phủ định quá khứ dùng 沒 và bỏ 了: 我沒吃 (Tôi chưa/không ăn).' },
        { h: '過: đã từng', b: 'Động từ + 過 = đã từng: 我去過日本. Chưa từng: 我沒去過 / 我還沒去過.' },
        { h: '是…的: nhấn mạnh cách thức, thời gian', b: '我是坐捷運來的 = Tôi đến bằng MRT (việc đến đã xảy ra, nhấn cách thức).' }
      ],
      phrases: [
        ['我昨天去夜市了。','Wǒ zuótiān qù yèshì le.','Hôm qua tôi đi chợ đêm.'],
        ['週末你做了什麼？','Zhōumò nǐ zuò le shénme?','Cuối tuần bạn đã làm gì?'],
        ['我吃過臭豆腐。','Wǒ chīguò chòudòufu.','Tôi từng ăn đậu phụ thối rồi.'],
        ['你去過日本嗎？','Nǐ qùguò Rìběn ma?','Bạn đã từng đi Nhật chưa?'],
        ['我還沒去過。','Wǒ hái méi qùguò.','Tôi chưa từng đi.'],
        ['很好玩！','Hěn hǎowán!','Vui lắm!'],
        ['我是坐捷運來的。','Wǒ shì zuò jiéyùn lái de.','Tôi đến bằng MRT.'],
        ['我今天還沒吃飯。','Wǒ jīntiān hái méi chīfàn.','Hôm nay tôi chưa ăn cơm.']
      ] },
    { id: 'zh-8', phase: 2, title: 'Kế hoạch, mời rủ', goal: 'Nói dự định, rủ đi chơi, nhận lời và từ chối.',
      grammar: [
        { h: 'Tương lai', b: '要 sẽ/định (dự định chắc chắn), 想 muốn, 打算 dự tính, 會 sẽ (dự đoán).' },
        { h: 'Đang làm: 在', b: '在 + động từ = đang làm: 我在吃飯.' },
        { h: 'Rủ rê', b: '要不要 + động từ? = Có muốn … không? Dạng hỏi "khẳng định + phủ định", rất tự nhiên.' }
      ],
      phrases: [
        ['我明天要去上課。','Wǒ míngtiān yào qù shàngkè.','Mai tôi đi học.'],
        ['要不要一起吃飯？','Yào bú yào yìqǐ chīfàn?','Muốn đi ăn cùng không?'],
        ['好啊！','Hǎo a!','Được đó!'],
        ['不好意思，那天我沒空。','Bù hǎoyìsi, nà tiān wǒ méi kòng.','Xin lỗi, hôm đó tôi không rảnh.'],
        ['我想去海邊。','Wǒ xiǎng qù hǎibiān.','Tôi muốn đi biển.'],
        ['你在做什麼？','Nǐ zài zuò shénme?','Bạn đang làm gì đó?'],
        ['我打算寒假回越南。','Wǒ dǎsuàn hánjià huí Yuènán.','Tôi định nghỉ đông về Việt Nam.'],
        ['明天會下雨。','Míngtiān huì xià yǔ.','Mai sẽ mưa.']
      ] },
    { id: 'zh-9', phase: 2, title: 'So sánh và miêu tả', goal: 'So sánh, miêu tả đồ vật, thời tiết.',
      grammar: [
        { h: 'So sánh với 比', b: 'A 比 B + tính từ: 這個比那個便宜 = Cái này rẻ hơn cái kia. Không thêm 很 sau 比.' },
        { h: '最 nhất, 一樣 giống nhau', b: '最好 = tốt nhất. A 跟 B 一樣 + tính từ = A … bằng B.' },
        { h: 'Bổ ngữ 得', b: 'Động từ + 得 + đánh giá: 說得很好 = nói rất giỏi.' }
      ],
      phrases: [
        ['這個比那個便宜。','Zhège bǐ nàge piányí.','Cái này rẻ hơn cái kia.'],
        ['有別的顏色嗎？','Yǒu bié de yánsè ma?','Có màu khác không?'],
        ['太大了，有小一點的嗎？','Tài dà le, yǒu xiǎo yìdiǎn de ma?','To quá, có cái nhỏ hơn không?'],
        ['今天好熱喔！','Jīntiān hǎo rè o!','Hôm nay nóng quá!','好…喔 là cách nói rất Đài Loan'],
        ['哪個最好？','Nǎ ge zuì hǎo?','Cái nào tốt nhất?'],
        ['他跟我一樣高。','Tā gēn wǒ yíyàng gāo.','Anh ấy cao bằng tôi.'],
        ['你中文說得很好！','Nǐ Zhōngwén shuō de hěn hǎo!','Bạn nói tiếng Trung giỏi quá!'],
        ['還好啦，還在學。','Hái hǎo la, hái zài xué.','Cũng tạm thôi, vẫn đang học.']
      ] },
    { id: 'zh-10', phase: 2, title: 'Sức khỏe và nhờ giúp đỡ', goal: 'Nói khi ốm, nhờ người khác, xin nói chậm.',
      grammar: [
        { h: '可以…嗎? lời nhờ lịch sự', b: '可以幫我一下嗎? = Giúp tôi một chút được không? 一下 làm câu nhẹ nhàng hơn.' },
        { h: 'Bổ ngữ khả năng', b: 'Động từ + 得/不 + kết quả: 聽得懂 nghe hiểu được, 聽不懂 nghe không hiểu.' }
      ],
      phrases: [
        ['我不舒服。','Wǒ bù shūfu.','Tôi thấy không khỏe.'],
        ['我頭痛。','Wǒ tóu tòng.','Tôi đau đầu.'],
        ['藥局在哪裡？','Yàojú zài nǎlǐ?','Hiệu thuốc ở đâu?'],
        ['可以幫我一下嗎？','Kěyǐ bāng wǒ yíxià ma?','Giúp tôi một chút được không?'],
        ['可以說慢一點嗎？','Kěyǐ shuō màn yìdiǎn ma?','Nói chậm một chút được không?'],
        ['可以再說一次嗎？','Kěyǐ zài shuō yí cì ma?','Nói lại lần nữa được không?'],
        ['我聽不懂。','Wǒ tīng bù dǒng.','Tôi nghe không hiểu.'],
        ['這個中文怎麼說？','Zhège Zhōngwén zěnme shuō?','Cái này tiếng Trung nói thế nào?'],
        ['救命！','Jiùmìng!','Cứu với!']
      ] },
    { id: 'zh-11', phase: 3, title: 'Nêu ý kiến', goal: 'Đưa ý kiến, đồng ý, phản đối, giải thích lý do.',
      grammar: [
        { h: '我覺得 (tôi thấy)', b: 'Cách mở ý kiến phổ biến nhất ở Đài Loan. 我覺得還好 = tôi thấy cũng bình thường.' },
        { h: 'Liên từ', b: '因為…所以… vì…nên…; 可是/但是 nhưng; 而且 hơn nữa; 不過 có điều.' }
      ],
      phrases: [
        ['我覺得這個想法不錯。','Wǒ juéde zhège xiǎngfǎ búcuò.','Tôi thấy ý này hay đấy.'],
        ['我同意。','Wǒ tóngyì.','Tôi đồng ý.'],
        ['我不太同意。','Wǒ bú tài tóngyì.','Tôi không đồng ý lắm.'],
        ['真的嗎？','Zhēn de ma?','Thật à?'],
        ['因為太貴了，所以我沒買。','Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.','Vì đắt quá nên tôi không mua.'],
        ['可是我覺得有點難。','Kěshì wǒ juéde yǒudiǎn nán.','Nhưng tôi thấy hơi khó.'],
        ['你覺得呢？','Nǐ juéde ne?','Còn bạn thấy sao?'],
        ['對啊，而且很方便。','Duì a, érqiě hěn fāngbiàn.','Đúng vậy, hơn nữa còn rất tiện.']
      ] },
    { id: 'zh-12', phase: 3, title: 'Giả định và điều kiện', goal: 'Nói "nếu… thì…", "dù… vẫn…".',
      grammar: [
        { h: '如果…就…', b: '如果 + điều kiện, (chủ ngữ) 就 + kết quả. Văn nói thường dùng …的話: 有空的話 = nếu rảnh.' },
        { h: '就算…也… / 不然', b: '就算 = dù cho, theo sau là 也. 不然 = nếu không thì.' }
      ],
      phrases: [
        ['如果下雨，我就不去。','Rúguǒ xià yǔ, wǒ jiù bú qù.','Nếu mưa thì tôi không đi.'],
        ['有空的話，打給我。','Yǒu kòng dehuà, dǎ gěi wǒ.','Nếu rảnh thì gọi cho tôi.'],
        ['如果我有時間，我想去日本玩。','Rúguǒ wǒ yǒu shíjiān, wǒ xiǎng qù Rìběn wán.','Nếu có thời gian, tôi muốn đi Nhật chơi.'],
        ['如果是我，我會先問老師。','Rúguǒ shì wǒ, wǒ huì xiān wèn lǎoshī.','Nếu là tôi, tôi sẽ hỏi thầy trước.'],
        ['快一點，不然會遲到。','Kuài yìdiǎn, bùrán huì chídào.','Nhanh lên, không thì muộn.'],
        ['就算很累，我也要練球。','Jiùsuàn hěn lèi, wǒ yě yào liàn qiú.','Dù mệt tôi vẫn đi tập.'],
        ['早知道就好了。','Zǎo zhīdào jiù hǎo le.','Biết vậy sớm thì tốt rồi.']
      ] },
    { id: 'zh-13', phase: 3, title: 'Xử lý sự cố', goal: 'Mất đồ, hỏng hóc, nhầm món, khiếu nại.',
      grammar: [
        { h: 'Bị động với 被', b: 'Vật + 被 (+ người) + động từ + 了: 我的手機被偷了 = Điện thoại tôi bị trộm.' },
        { h: 'Câu 把', b: '把 + vật + động từ + kết quả: 請把護照給我 = Làm ơn đưa hộ chiếu cho tôi. Nhấn mạnh tác động lên vật.' }
      ],
      phrases: [
        ['我的錢包不見了。','Wǒ de qiánbāo bújiàn le.','Ví của tôi mất rồi.'],
        ['冷氣壞了。','Lěngqì huài le.','Máy lạnh hỏng rồi.'],
        ['我點的不是這個。','Wǒ diǎn de bú shì zhège.','Tôi không gọi món này.'],
        ['發生什麼事了？','Fāshēng shénme shì le?','Có chuyện gì vậy?'],
        ['可以幫我換一個嗎？','Kěyǐ bāng wǒ huàn yí ge ma?','Đổi giúp tôi cái khác được không?'],
        ['我的手機被偷了。','Wǒ de shǒujī bèi tōu le.','Điện thoại tôi bị trộm.'],
        ['請把護照給我。','Qǐng bǎ hùzhào gěi wǒ.','Làm ơn đưa hộ chiếu cho tôi.'],
        ['沒問題，我馬上處理。','Méi wèntí, wǒ mǎshàng chǔlǐ.','Không vấn đề, tôi xử lý ngay.']
      ] },
    { id: 'zh-14', phase: 3, title: 'Nói chuyện tự nhiên kiểu Đài Loan', goal: 'Phản hồi, trợ từ cuối câu, cách nói thân mật.',
      grammar: [
        { h: 'Trợ từ cuối câu', b: '啊 a (nhấn mạnh, thân thiện), 喔 o (nhắc nhẹ, rất Đài Loan), 啦 la (thoải mái), 吧 ba (đề nghị, đoán). Thay đổi sắc thái như "nhé, nha, mà, đi" trong tiếng Việt.' },
        { h: 'Phản hồi khi nghe', b: 'Khi người khác nói, chen vào 對啊, 是喔, 真的假的 để cuộc trò chuyện tự nhiên.' }
      ],
      phrases: [
        ['對啊！','Duì a!','Đúng rồi!'],
        ['是喔？','Shì o?','Vậy hả?'],
        ['真的假的？','Zhēn de jiǎ de?','Thật hay đùa vậy?'],
        ['好喔，等我一下。','Hǎo o, děng wǒ yíxià.','Ok, đợi tôi chút.'],
        ['最近怎麼樣？','Zuìjìn zěnmeyàng?','Dạo này sao rồi?'],
        ['好累喔。','Hǎo lèi o.','Mệt quá à.'],
        ['加油！','Jiāyóu!','Cố lên!'],
        ['算了啦。','Suàn le la.','Thôi bỏ đi.'],
        ['我們走吧！','Wǒmen zǒu ba!','Mình đi thôi!']
      ] }
  ]
};
