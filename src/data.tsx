export const ALL_TESTS = {
    test10: {
        name: 'Bài test 10 - Ngày 28-12-2025',
        multipleChoice: [
            { question: "Chọn cách viết Katakana đúng của 'やま':", options: ["ヤマ", "ムシ", "モモ", "サクラ"], correct: 0, explanation: "やま viết bằng Katakana là ヤマ" },
            { question: "Chọn cách viết Katakana đúng của 'やすみ':", options: ["ムシ", "ヤスミ", "ヒル", "シロ"], correct: 1, explanation: "やすみ viết bằng Katakana là ヤスミ" },
            { question: "Chọn cách viết Katakana đúng của 'むし':", options: ["ユメ", "ヤマ", "ムシ", "ラン"], correct: 2, explanation: "むし viết bằng Katakana là ムシ" },
            { question: "Chọn cách viết Katakana đúng của 'ゆめ':", options: ["ヒル", "モモ", "サクラ", "ユメ"], correct: 3, explanation: "ゆめ viết bằng Katakana là ユメ" },
            { question: "Chọn cách viết Katakana đúng của 'もも':", options: ["モモ", "ハレ", "ヤマ", "ツクエ"], correct: 0, explanation: "もも viết bằng Katakana là モモ" },
            { question: "Chọn cách viết Katakana đúng của 'さよなら':", options: ["クスリヤ", "サヨナラ", "ケサ", "フヘ"], correct: 1, explanation: "さよなら viết bằng Katakana là サヨナラ" },
            { question: "Chọn cách viết Katakana đúng của 'らん':", options: ["ヤスミ", "ムシ", "ラン", "イエ"], correct: 2, explanation: "らん viết bằng Katakana là ラン" },
            { question: "Chọn cách viết Katakana đúng của 'くすりや':", options: ["タチ", "ヌノ", "アサ", "クスリヤ"], correct: 3, explanation: "くすりや viết bằng Katakana là クスリヤ" },
            { question: "Chọn cách viết Katakana đúng của 'ひる':", options: ["ヒル", "シロ", "サクラ", "ヤマ"], correct: 0, explanation: "ひる viết bằng Katakana là ヒル" },
            { question: "Chọn cách viết Katakana đúng của 'はれ':", options: ["モモ", "ハレ", "ラン", "ユメ"], correct: 1, explanation: "はれ viết bằng Katakana là ハレ" },
            { question: "Chọn cách viết Katakana đúng của 'しろ':", options: ["ヤスミ", "クスリヤ", "シロ", "ツクエ"], correct: 2, explanation: "しろ viết bằng Katakana là シロ" },
            { question: "Chọn cách viết Katakana đúng của 'あさ':", options: ["ヒル", "サヨナラ", "ムシ", "アサ"], correct: 3, explanation: "あさ viết bằng Katakana là アサ" },
            { question: "Chọn cách viết Katakana đúng của 'いえ':", options: ["イエ", "ハレ", "ヤマ", "ケサ"], correct: 0, explanation: "いえ viết bằng Katakana là イエ" },
            { question: "Chọn cách viết Katakana đúng của 'さくら':", options: ["フヘ", "サクラ", "タチ", "ラン"], correct: 1, explanation: "さくら viết bằng Katakana là サクラ" },
            { question: "Chọn cách viết Katakana đúng của 'けさ':", options: ["シロ", "ヌノ", "ケサ", "ムシ"], correct: 2, explanation: "けさ viết bằng Katakana là ケサ" },
            { question: "Chọn cách viết Katakana đúng của 'たち':", options: ["アサ", "ユメ", "イエ", "タチ"], correct: 3, explanation: "たち viết bằng Katakana là タチ" },
            { question: "Chọn cách viết Katakana đúng của 'つくえ':", options: ["ツクエ", "サヨナラ", "ヒル", "モモ"], correct: 0, explanation: "つくえ viết bằng Katakana là ツクエ" },
            { question: "Chọn cách viết Katakana đúng của 'ぬの':", options: ["クスリヤ", "ヌノ", "ハレ", "ヤスミ"], correct: 1, explanation: "ぬの viết bằng Katakana là ヌノ" },
            { question: "Chọn cách viết Katakana đúng của 'へや':", options: ["ラン", "サクラ", "ヘヤ", "タチ"], correct: 2, explanation: "へや viết bằng Katakana là ヘヤ" }
        ],
        matching: [{
            "left": [
                "わたしは　いぬが　すき　です",
                "せんせいは　さんじゅうごさい　です",
                "きょうは　なんようび　ですか",
                "これは　はな　ですか",
                "いま　なんじ　ですか"
            ],
            "right": [
                "Bây giờ là mấy giờ",
                "Giáo viên 35 tuổi",
                "Đây là hoa đúng không?",
                "Tôi thích chó",
                "Hôm nay là thứ mấy"
            ],
            "correctPairs": [[0, 3], [1, 1], [2, 4], [3, 2], [4, 0]],
            "explanation": "わたしはいぬがすきです = Tôi thích chó, せんせいはさんじゅうごさいです = Giáo viên 35 tuổi, きょうはなんようびですか = Hôm nay là thứ mấy, これははなですか = Đây là hoa đúng không?, いまなんじですか = Bây giờ là mấy giờ"
        }]
        ,
        typing: [
            {
                question: "Tôi thích hoa",
                placeholder: "Nhập câu có nghĩa Tôi thích hoa",
                correct: "わたしははながすきです",
                hint: "わたし + は + はな + が + すき + です",
                explanation: "わたしははながすきです là Tôi thích hoa"
            },
            {
                question: "Tôi 12 tuổi",
                placeholder: "Nhập câu có nghĩa Tôi 12 tuổi",
                correct: "わたしはじゅうにさいです",
                hint: "わたし + は + じゅうにさい + です",
                explanation: "わたしはじゅうにさいです là Tôi 12 tuổi"
            },
            {
                question: "Giáo viên không phải 35 tuổi",
                placeholder: "Nhập câu có nghĩa Giáo viên không phải 35 tuổi",
                correct: "せんせさんじゅうごさいではありません",
                hint: "せんせい + は + さんじゅうごさい + ではありません",
                explanation: "せんせさんじゅうごさいではありません là Giáo viên không phải 35 tuổi"
            }
        ],
        wordConnect: [
            {
                word: "ウミ",
                options: ["えみ", "うみ", "おみ", "いみ"],
                correct: 1,
                explanation: "ウミ viết bằng hiragana là うみ"
            },
            {
                word: "エキ",
                options: ["いき", "おき", "えき", "あき"],
                correct: 2,
                explanation: "エキ viết bằng hiragana là えき"
            },
            {
                word: "オカ",
                options: ["うか", "あか", "いか", "おか"],
                correct: 3,
                explanation: "オカ viết bằng hiragana là おか"
            },
            {
                word: "カキ",
                options: ["きか", "かき", "くき", "けき"],
                correct: 1,
                explanation: "カキ viết bằng hiragana là かき"
            },
            {
                word: "コレ",
                options: ["くれ", "かれ", "これ", "きれ"],
                correct: 2,
                explanation: "コレ viết bằng hiragana là これ"
            },
            {
                word: "アシタ",
                options: ["あじた", "あきた", "あちた", "あした"],
                correct: 3,
                explanation: "アシタ viết bằng hiragana là あした"
            },
            {
                word: "スシ",
                options: ["しす", "じす", "ちす", "きす"],
                correct: 0,
                explanation: "スシ viết bằng hiragana là シス"
            },
            {
                word: "イス",
                options: ["いず", "いす", "いつ", "いく"],
                correct: 1,
                explanation: "イス viết bằng hiragana là いす"
            },
            {
                word: "ミセ",
                options: ["みぜ", "みて", "みせ", "みね"],
                correct: 2,
                explanation: "ミセ viết bằng hiragana là みせ"
            },
            {
                word: "ソラ",
                options: ["ぞら", "とら", "のら", "そら"],
                correct: 3,
                explanation: "ソラ viết bằng hiragana là そら"
            },
            {
                word: "トラ",
                options: ["とら", "どら", "たら", "ちら"],
                correct: 0,
                explanation: "トラ viết bằng hiragana là とら"
            },
            {
                word: "ニワ",
                options: ["かわ", "にわ", "みわ", "りわ"],
                correct: 1,
                explanation: "ニワ viết bằng hiragana là にわ"
            },
            {
                word: "イヌ",
                options: ["いね", "いの", "いぬ", "いな"],
                correct: 2,
                explanation: "イヌ viết bằng hiragana là いぬ"
            },
            {
                word: "ハナ",
                options: ["ばな", "ぱな", "まな", "はな"],
                correct: 3,
                explanation: "ハナ viết bằng hiragana là はな"
            },
            {
                word: "ヒナン",
                options: ["ひなん", "びなん", "ぴなん", "みなん"],
                correct: 0,
                explanation: "ヒナン viết bằng hiragana là ひなん"
            },
            {
                word: "フネ",
                options: ["ぶね", "ふね", "ぷね", "ほね"],
                correct: 1,
                explanation: "フネ viết bằng hiragana là ふね"
            },
            {
                word: "ヘヤ",
                options: ["べや", "ぺや", "へや", "めや"],
                correct: 2,
                explanation: "ヘヤ viết bằng hiragana là へや"
            },
            {
                word: "ホネ",
                options: ["ぼね", "ぽね", "もね", "ほね"],
                correct: 3,
                explanation: "ホネ viết bằng hiragana là ほね"
            }
        ],
        fillBlank: [
            {
                sentence: "こ___はせんぷう___ではありありません",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "これはせんぷうきではありありません = Cái này không phải là máy quạt"
            },
            {
                sentence: "それは___うしで___ありません",
                blanks: ["ぼ", "は"],
                options: [["ぼ", "ほ", "も", "の"], ["は", "が", "を", "に"]],
                explanation: "それはぼうしではありません = Cái đó không phải là cái nón"
            },
            {
                sentence: "い___なん___ですか",
                blanks: ["ま", "じ"],
                options: [["ま", "み", "む", "め"], ["じ", "ぎ", "び", "ぴ"]],
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            }
        ],
        sentenceOrder: [
            {
                words: ["ん", "で", "い", "す", "じ", "ま", "か", "な"],
                correct: [2, 5, 7, 0, 4, 1, 3, 6],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["す", "ご", "く", "で", "じ", "ん", "ふ", "ま", "い"],
                correct: [8, 7, 2, 4, 1, 6, 5, 3, 0],
                correctSentence: "いまくじごふんです",
                explanation: "いまくじごふんです = Bây giờ là 9 giờ 5 phút"
            },
            {
                words: ["ん", "す", "ご", "ふ", "じ", "い", "じゅ", "う", "ま", "よ", "で"],
                correct: [5, 8, 9, 4, 6, 7, 2, 3, 0, 10,1],
                correctSentence: "いまよじじゅうごふんです",
                explanation: "いまよじじゅうごふんです = Bây giờ là 4 giờ 15 phút"
            },
            {
                words: ["ぷ", "ん", "じ", "は", "ま", "い", "じゅ", "っ", "す", "で", "ち", "に"],
                correct: [5, 4, 3, 10, 2, 11, 6, 7, 0, 1, 9, 8],
                correctSentence: "いまはちじにじゅっぷんです",
                explanation: "いまはちじにじゅっぷんです = Bây giờ là 8 giờ 10 phút"
            }
        ]
    },
    test9: {
        name: 'Bài test 9 - Ngày 21-12-2025',
        multipleChoice: [
            {
                question: "Chọn nghĩa đúng của từ 'あ':",
                options: ["ア", "イ", "ウ", "エ"],
                correct: 0,
                explanation: "ア nghĩa là あ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'い':",
                options: ["ウ", "イ", "オ", "エ"],
                correct: 1,
                explanation: "イ nghĩa là い"
            },
            {
                question: "Chọn nghĩa đúng của từ 'う':",
                options: ["イ", "エ", "ウ", "ア"],
                correct: 2,
                explanation: "ウ nghĩa là う"
            },
            {
                question: "Chọn nghĩa đúng của từ 'え':",
                options: ["ア", "オ", "イ", "エ"],
                correct: 3,
                explanation: "エ nghĩa là え"
            },
            {
                question: "Chọn nghĩa đúng của từ 'お':",
                options: ["イ", "ウ", "エ", "オ"],
                correct: 3,
                explanation: "オ nghĩa là お"
            },
            {
                question: "Chọn nghĩa đúng của từ 'か':",
                options: ["カ", "キ", "ク", "ケ"],
                correct: 0,
                explanation: "カ nghĩa là か"
            },
            {
                question: "Chọn nghĩa đúng của từ 'き':",
                options: ["ク", "キ", "コ", "ケ"],
                correct: 1,
                explanation: "キ nghĩa là き"
            },
            {
                question: "Chọn nghĩa đúng của từ 'く':",
                options: ["キ", "ケ", "ク", "カ"],
                correct: 2,
                explanation: "ク nghĩa là く"
            },
            {
                question: "Chọn nghĩa đúng của từ 'け':",
                options: ["カ", "コ", "キ", "ケ"],
                correct: 3,
                explanation: "ケ nghĩa là け"
            },
            {
                question: "Chọn nghĩa đúng của từ 'こ':",
                options: ["キ", "ク", "ケ", "コ"],
                correct: 3,
                explanation: "コ nghĩa là こ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'さ':",
                options: ["サ", "シ", "ス", "セ"],
                correct: 0,
                explanation: "サ nghĩa là さ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'し':",
                options: ["ス", "シ", "ソ", "セ"],
                correct: 1,
                explanation: "シ nghĩa là し"
            },
            {
                question: "Chọn nghĩa đúng của từ 'す':",
                options: ["シ", "セ", "ス", "サ"],
                correct: 2,
                explanation: "ス nghĩa là す"
            },
            {
                question: "Chọn nghĩa đúng của từ 'せ':",
                options: ["サ", "ソ", "シ", "セ"],
                correct: 3,
                explanation: "セ nghĩa là せ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'そ':",
                options: ["シ", "ス", "セ", "ソ"],
                correct: 3,
                explanation: "ソ nghĩa là そ"
            }
        ],
        matching: [{
            left: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ"],
            right: ["こ", "う", "の", "に", "せ", "あ", "け", "お", "か", "ね", "た", "い", "て", "ち", "く", "つ", "と", "し", "き", "す", "そ", "え", "な", "ぬ", "さ"],
            correctPairs: [[0, 5], [1, 11], [2, 1], [3, 21], [4, 7], [5, 8], [6, 18], [7, 14], [8, 6], [9, 0], [10, 24], [11, 17], [12, 19], [13, 4], [14, 20], [15, 10], [16, 13], [17, 15], [18, 12], [19, 16], [20, 22], [21, 3], [22, 23], [23, 9], [24, 2]],
            explanation: "ア = あ, イ = い, ウ = う, エ = え, オ = お, カ = か, キ = き, ク = く, ケ = け, コ = こ, サ = さ, シ = し, ス = す, セ = せ, ソ = そ, タ = た, チ = ち, ツ = つ, テ = て, ト = と, ナ = な, ニ = に, ヌ = ぬ, ネ = ね, ノ = の"
        }]
        ,
        typing: [
            {
                question: "Tôi thích hoa",
                placeholder: "Nhập câu có nghĩa Tôi thích hoa",
                correct: "わたしははながすきです",
                hint: "わたし + は + はな + が + すき + です",
                explanation: "わたしははながすきです là Tôi thích hoa"
            },
            {
                question: "Tôi không thích truyện tranh",
                placeholder: "Nhập câu có nghĩa Tôi không thích truyện tranh",
                correct: "わたしはまんががすきではありません",
                hint: "わたし + は + まんが + が + すき + では + ありません",
                explanation: "わたしはまんががすきではありません là Tôi không thích truyện tranh"
            },
            {
                question: "Giáo viên có thích sách không",
                placeholder: "Nhập câu có nghĩa Giáo viên có thích sách không",
                correct: "せんせいはほんがすきですか",
                hint: "せんせい + は + ほん + が + すき + です + か",
                explanation: "せんせいはほんがすきですか là Giáo viên có thích sách không"
            }
        ],
        wordConnect: [
            {
                word: "さ",
                options: ["サ", "シ", "ス", "セ"],
                correct: 0,
                explanation: "さ là サ"
            },
            {
                word: "し",
                options: ["サ", "シ", "ス", "ソ"],
                correct: 1,
                explanation: "し là シ"
            },
            {
                word: "す",
                options: ["サ", "セ", "ス", "ソ"],
                correct: 2,
                explanation: "す là ス"
            },
            {
                word: "せ",
                options: ["サ", "シ", "ス", "セ"],
                correct: 3,
                explanation: "せ là セ"
            },
            {
                word: "そ",
                options: ["サ", "シ", "セ", "ソ"],
                correct: 3,
                explanation: "そ là ソ"
            },
            {
                word: "た",
                options: ["タ", "チ", "ツ", "テ"],
                correct: 0,
                explanation: "た là タ"
            },
            {
                word: "ち",
                options: ["タ", "チ", "ツ", "ト"],
                correct: 1,
                explanation: "ち là チ"
            },
            {
                word: "つ",
                options: ["タ", "テ", "ツ", "ト"],
                correct: 2,
                explanation: "つ là ツ"
            },
            {
                word: "て",
                options: ["タ", "チ", "ツ", "テ"],
                correct: 3,
                explanation: "て là テ"
            },
            {
                word: "と",
                options: ["タ", "チ", "テ", "ト"],
                correct: 3,
                explanation: "と là ト"
            },
            {
                word: "な",
                options: ["ナ", "ニ", "ヌ", "ネ"],
                correct: 0,
                explanation: "な là ナ"
            },
            {
                word: "に",
                options: ["ナ", "ニ", "ヌ", "ノ"],
                correct: 1,
                explanation: "に là ニ"
            },
            {
                word: "ぬ",
                options: ["ナ", "ネ", "ヌ", "ノ"],
                correct: 2,
                explanation: "ぬ là ヌ"
            },
            {
                word: "ね",
                options: ["ナ", "ニ", "ヌ", "ネ"],
                correct: 3,
                explanation: "ね là ネ"
            },
            {
                word: "の",
                options: ["ナ", "ニ", "ネ", "ノ"],
                correct: 3,
                explanation: "の là ノ"
            }
        ],
        fillBlank: [
            {
                sentence: "こ___はせんぷう___ではありありません",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "これはせんぷうきではありありません = Cái này không phải là máy quạt"
            },
            {
                sentence: "それは___うしで___ありません",
                blanks: ["ぼ", "は"],
                options: [["ぼ", "ほ", "も", "の"], ["は", "が", "を", "に"]],
                explanation: "それはぼうしではありません = Cái đó không phải là cái nón"
            },
            {
                sentence: "い___なん___ですか",
                blanks: ["ま", "じ"],
                options: [["ま", "み", "む", "め"], ["じ", "ぎ", "び", "ぴ"]],
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            }
        ],
        sentenceOrder: [
            {
                words: ["ん", "で", "い", "す", "じ", "ま", "か", "な"],
                correct: [2, 5, 7, 0, 4, 1, 3, 6],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["す", "ご", "く", "で", "じ", "ん", "ふ", "ま", "い"],
                correct: [8, 7, 2, 4, 1, 6, 5, 3, 0],
                correctSentence: "いまくじごふんです",
                explanation: "いまくじごふんです = Bây giờ là 9 giờ 5 phút"
            },
            {
                words: ["ん", "す", "ご", "ふ", "じ", "い", "じゅ", "う", "ま", "よ", "で"],
                correct: [5, 8, 9, 4, 6, 7, 2, 3, 0, 10,1],
                correctSentence: "いまよじじゅうごふんです",
                explanation: "いまよじじゅうごふんです = Bây giờ là 4 giờ 15 phút"
            },
            {
                words: ["ぷ", "ん", "じ", "は", "ま", "い", "じゅ", "っ", "す", "で", "ち", "に"],
                correct: [5, 4, 3, 10, 2, 11, 6, 7, 0, 1, 9, 8],
                correctSentence: "いまはちじにじゅっぷんです",
                explanation: "いまはちじにじゅっぷんです = Bây giờ là 8 giờ 10 phút"
            }
        ]
    },
    test8: {
        name: 'Bài test 8 - Ngày 14-12-2025',
        multipleChoice: [
            { question: "Chọn nghĩa đúng của từ 'hoa anh đào':", options: ["さくら", "ばら", "らん", "あり"], correct: 0, explanation: "さくら nghĩa là hoa anh đào" },
            { question: "Chọn nghĩa đúng của từ 'con kiến':", options: ["さる", "あり", "ぶた", "がか"], correct: 1, explanation: "あり nghĩa là con kiến" },
            { question: "Chọn nghĩa đúng của từ 'con khỉ':", options: ["ぶた", "あり", "さる", "がか"], correct: 2, explanation: "さる nghĩa là con khỉ" },
            { question: "Chọn nghĩa đúng của từ 'bạn trai':", options: ["ぼく", "わたし", "かぞく", "かれ"], correct: 3, explanation: "かれ nghĩa là bạn trai" },
            { question: "Chọn nghĩa đúng của từ 'buổi trưa':", options: ["ひる", "いちじ", "はれ", "かぜ"], correct: 0, explanation: "ひる nghĩa là buổi trưa" },
            { question: "Chọn nghĩa đúng của từ 'tiệm thuốc':", options: ["やおや", "くすりや", "たんぼ", "いりぐち"], correct: 1, explanation: "くすりや nghĩa là tiệm thuốc" },
            { question: "Chọn nghĩa đúng của từ 'màu trắng':", options: ["くろ", "みどり", "しろ", "かべ"], correct: 2, explanation: "しろ nghĩa là màu trắng" },
            { question: "Chọn nghĩa đúng của từ 'màu đen':", options: ["みどり", "しろ", "まど", "くろ"], correct: 3, explanation: "くろ nghĩa là màu đen" },
            { question: "Chọn nghĩa đúng của từ 'đơn giản':", options: ["かんたん", "ぺらぺら", "ぴかぴか", "かぜ"], correct: 0, explanation: "かんたん nghĩa là đơn giản" },
            { question: "Chọn nghĩa đúng của từ 'con sông':", options: ["みず", "かわ", "たんぼ", "やま"], correct: 1, explanation: "かわ nghĩa là con sông" },
            { question: "Chọn nghĩa đúng của từ 'tôi':", options: ["かれ", "ぼく", "わたし", "かぞく"], correct: 2, explanation: "わたし nghĩa là tôi" },
            { question: "Chọn nghĩa đúng của từ 'tiệm rau':", options: ["くすりや", "いりぐち", "でぐち", "やおや"], correct: 3, explanation: "やおや nghĩa là tiệm rau" },
            { question: "Chọn nghĩa đúng của từ 'Nhật Bản':", options: ["にほん", "にほんご", "まんが", "がか"], correct: 0, explanation: "にほん nghĩa là Nhật Bản" },
            { question: "Chọn nghĩa đúng của từ 'nắng':", options: ["かぜ", "はれ", "みず", "ひる"], correct: 1, explanation: "はれ nghĩa là nắng" },
            { question: "Chọn nghĩa đúng của từ 'hoa lan':", options: ["ばら", "さくら", "らん", "みどり"], correct: 2, explanation: "らん nghĩa là hoa lan" },
            { question: "Chọn nghĩa đúng của từ 'lối vào':", options: ["でぐち", "まど", "かべ", "いりぐち"], correct: 3, explanation: "いりぐち nghĩa là lối vào" },
            { question: "Chọn nghĩa đúng của từ 'lối ra':", options: ["でぐち", "いりぐち", "まど", "かぎ"], correct: 0, explanation: "でぐち nghĩa là lối ra" },
            { question: "Chọn nghĩa đúng của từ 'chói loá':", options: ["かんたん", "ぴかぴか", "ぺらぺら", "はれ"], correct: 1, explanation: "ぴかぴか nghĩa là chói loá" },
            { question: "Chọn nghĩa đúng của từ 'cửa sổ':", options: ["かべ", "かぎ", "まど", "いりぐち"], correct: 2, explanation: "まど nghĩa là cửa sổ" },
            { question: "Chọn nghĩa đúng của từ 'bức tường':", options: ["まど", "でぐち", "いりぐち", "かべ"], correct: 3, explanation: "かべ nghĩa là bức tường" },
            { question: "Chọn nghĩa đúng của từ 'chìa khóa':", options: ["かぎ", "まど", "かべ", "でぐち"], correct: 0, explanation: "かぎ nghĩa là chìa khóa" },
            { question: "Chọn nghĩa đúng của từ 'nước':", options: ["かわ", "みず", "ごはん", "はれ"], correct: 1, explanation: "みず nghĩa là nước" },
            { question: "Chọn nghĩa đúng của từ 'cơm':", options: ["みず", "たんぼ", "ごはん", "おみやげ"], correct: 2, explanation: "ごはん nghĩa là cơm" },
            { question: "Chọn nghĩa đúng của từ 'đặc sản':", options: ["ごはん", "みず", "かぎ", "おみやげ"], correct: 3, explanation: "おみやげ nghĩa là đặc sản" },
            { question: "Chọn nghĩa đúng của từ 'con lợn':", options: ["ぶた", "さる", "あり", "がか"], correct: 0, explanation: "ぶた nghĩa là con lợn" },
            { question: "Chọn nghĩa đúng của từ 'hoa hồng':", options: ["さくら", "ばら", "らん", "みどり"], correct: 1, explanation: "ばら nghĩa là hoa hồng" },
            { question: "Chọn nghĩa đúng của từ 'ngón tay':", options: ["からだ", "かぞく", "ゆび", "がか"], correct: 2, explanation: "ゆび nghĩa là ngón tay" },
            { question: "Chọn nghĩa đúng của từ 'cơ thể':", options: ["ゆび", "かぞく", "ぼく", "からだ"], correct: 3, explanation: "からだ nghĩa là cơ thể" },
            { question: "Chọn nghĩa đúng của từ 'gia đình':", options: ["かぞく", "わたし", "かれ", "ぼく"], correct: 0, explanation: "かぞく nghĩa là gia đình" },
            { question: "Chọn nghĩa đúng của từ 'tôi (nam)':", options: ["わたし", "ぼく", "かれ", "かぞく"], correct: 1, explanation: "ぼく nghĩa là tôi (nam)" },
            { question: "Chọn nghĩa đúng của từ 'họa sĩ':", options: ["ぶた", "さる", "がか", "あり"], correct: 2, explanation: "がか nghĩa là họa sĩ" },
            { question: "Chọn nghĩa đúng của từ 'màu xanh lá':", options: ["しろ", "くろ", "ばら", "みどり"], correct: 3, explanation: "みどり nghĩa là màu xanh lá" },
            { question: "Chọn nghĩa đúng của từ 'một giờ':", options: ["いちじ", "ひる", "はれ", "かぜ"], correct: 0, explanation: "いちじ nghĩa là một giờ" },
            { question: "Chọn nghĩa đúng của từ 'nói lưu loát, trôi chảy':", options: ["かんたん", "ぺらぺら", "ぴかぴか", "はれ"], correct: 1, explanation: "ぺらぺら nghĩa là nói lưu loát, trôi chảy" },
            { question: "Chọn nghĩa đúng của từ 'gió':", options: ["はれ", "みず", "かぜ", "かわ"], correct: 2, explanation: "かぜ nghĩa là gió" },
            { question: "Chọn nghĩa đúng của từ 'Bút chì':", options: ["かぎ", "まど", "でんき", "えんぴつ"], correct: 3, explanation: "えんぴつ nghĩa là Bút chì" },
            { question: "Chọn nghĩa đúng của từ 'Ruộng lúa':", options: ["たんぼ", "かわ", "ごはん", "やおや"], correct: 0, explanation: "たんぼ nghĩa là Ruộng lúa" },
            { question: "Chọn nghĩa đúng của từ 'Tiếng Nhật':", options: ["まんが", "にほんご", "にほん", "がか"], correct: 1, explanation: "にほんご nghĩa là Tiếng Nhật" },
            { question: "Chọn nghĩa đúng của từ 'Truyện tranh':", options: ["にほんご", "でんき", "まんが", "えんぴつ"], correct: 2, explanation: "まんが nghĩa là Truyện tranh" },
            { question: "Chọn nghĩa đúng của từ 'Điện':", options: ["えんぴつ", "かぎ", "まど", "でんき"], correct: 3, explanation: "でんき nghĩa là Điện" },
            { question: "Chọn nghĩa đúng của từ 'Thứ 2':", options: ["かようび", "げつようび", "すいようび", "きんようび"], correct: 1, explanation: "げつようび nghĩa là Thứ 2" },
            { question: "Chọn nghĩa đúng của từ 'Thứ 3':", options: ["かようび", "どようび", "もくようび", "にちようび"], correct: 0, explanation: "かようび nghĩa là Thứ 3" },
            { question: "Chọn nghĩa đúng của từ 'Thứ 4':", options: ["げつようび", "きんようび", "すいようび", "きのう"], correct: 2, explanation: "すいようび nghĩa là Thứ 4" },
            { question: "Chọn nghĩa đúng của từ 'Thứ 5':", options: ["どようび", "もくようび", "にちようび", "かようび"], correct: 1, explanation: "もくようび nghĩa là Thứ 5" },
            { question: "Chọn nghĩa đúng của từ 'Thứ 6':", options: ["きんようび", "げつようび", "すいようび", "あした"], correct: 0, explanation: "きんようび nghĩa là Thứ 6" },
            { question: "Chọn nghĩa đúng của từ 'Thứ 7':", options: ["きょう", "もくようび", "どようび", "かようび"], correct: 2, explanation: "どようび nghĩa là Thứ 7" },
            { question: "Chọn nghĩa đúng của từ 'Chủ nhật':", options: ["げつようび", "にちようび", "きんようび", "どようび"], correct: 1, explanation: "にちようび nghĩa là Chủ nhật" },
            { question: "Chọn nghĩa đúng của từ 'Hôm qua':", options: ["きのう", "きょう", "あした", "すいようび"], correct: 0, explanation: "きのう nghĩa là Hôm qua" },
            { question: "Chọn nghĩa đúng của từ 'Hôm nay':", options: ["あした", "きのう", "きょう", "もくようび"], correct: 2, explanation: "きょう nghĩa là Hôm nay" },
            { question: "Chọn nghĩa đúng của từ 'Ngày mai':", options: ["きんようび", "きょう", "きのう", "あした"], correct: 3, explanation: "あした nghĩa là Ngày mai" }
        ],
        matching: [{
            left: ["おはようございます", "こんにちは", "こんばんは", "はじめまして", "おねがいします", "おやすみなさい", "さよなら", "ありがとうございました", "どういたしまして", "すみません", "もういちどおねがいします", "いただきます", "ごちそうさまでした", "いってらっしゃい", "いってきます", "ただいま", "おかえりなさい", "どうぞ", "おじゃまします", "しつれいします"],
            right: ["Xin mời", "Chào buổi sáng", "Tạm biệt", "Vui lòng giúp đỡ", "Chúc ngủ ngon", "Cảm ơn", "Mừng bạn đã về", "Chào buổi chiều", "Xin lỗi", "Tôi xin phép", "Rất vui được gặp bạn", "Không có chi", "Cảm ơn sau bữa ăn", "Vui lòng nói lại lần nữa", "Tôi đã về đây", "Chào buổi tối", "Bạn đi nhé", "Tôi đi nhé", "Cảm ơn trước bữa ăn( mời ăn)", "Xin phép làm phiền"],
            correctPairs: [[0, 1], [1, 7], [2, 15], [3, 10], [4, 3], [5, 4], [6, 2], [7, 5], [8, 11], [9, 8], [10, 13], [11, 18], [12, 12], [13, 16], [14, 17], [15, 14], [16, 6], [17, 0], [18, 19], [19, 9]],
            explanation: "おはようございます = Chào buổi sáng, こんにちは = Chào buổi chiều, こんばんは = Chào buổi tối, はじめまして = Rất vui được gặp bạn, おねがいします = Vui lòng giúp đỡ, おやすみなさい = Chúc ngủ ngon, さよなら = Tạm biệt, ありがとうございました = Cảm ơn, どういたしまして = Không có chi, すみません = Xin lỗi, もういちどおねがいします = Vui lòng nói lại lần nữa, いただきます = Cảm ơn trước bữa ăn( mời ăn), ごちそうさまでした = Cảm ơn sau bữa ăn, いってらっしゃい = Bạn đi nhé, いってきます = Tôi đi nhé, ただいま = Tôi đã về đây, おかえりなさい = Mừng bạn đã về, どうぞ = Xin mời, おじゃまします = Xin phép làm phiền, しつれいします = Tôi xin phép"
        }]
        ,
        typing: [
            {
                question: "21",
                placeholder: "Nhập từ vựng có nghĩa 21",
                correct: "にじゅういち",
                hint: "に + じゅう + いち",
                explanation: "にじゅういち là 21"
            },
            {
                question: "92",
                placeholder: "Nhập từ vựng có nghĩa 92",
                correct: "きゅうじゅうに",
                hint: "きゅう + じゅう + に",
                explanation: "きゅうじゅうに là 92"
            },
            {
                question: "83",
                placeholder: "Nhập từ vựng có nghĩa 83",
                correct: "はちじゅうさん",
                hint: "はち + じゅう + さん",
                explanation: "はちじゅうさん là 83"
            },
            {
                question: "14",
                placeholder: "Nhập từ vựng có nghĩa 14",
                correct: "じゅうよん",
                hint: "じゅう + よん",
                explanation: "じゅうよん là 14"
            },
            {
                question: "43",
                placeholder: "Nhập từ vựng có nghĩa 43",
                correct: "よんじゅうさん",
                hint: "よん + じゅう + さん",
                explanation: "よんじゅうさん là 43"
            },
            {
                question: "76",
                placeholder: "Nhập từ vựng có nghĩa 76",
                correct: "ななじゅうろく",
                hint: "なな + じゅう + ろく",
                explanation: "ななじゅうろく là 76"
            },
            {
                question: "35",
                placeholder: "Nhập từ vựng có nghĩa 35",
                correct: "さんじゅうご",
                hint: "さん + じゅう + ご",
                explanation: "さんじゅうご là 35"
            },
            {
                question: "59",
                placeholder: "Nhập từ vựng có nghĩa 59",
                correct: "ごじゅうきゅう",
                hint: "ご + じゅう + きゅう",
                explanation: "ごじゅうきゅう là 59"
            },
            {
                question: "67",
                placeholder: "Nhập từ vựng có nghĩa 67",
                correct: "ろくじゅうなな",
                hint: "ろく + じゅう + なな",
                explanation: "ろくじゅうなな là 67"
            },
            {
                question: "28",
                placeholder: "Nhập từ vựng có nghĩa 28",
                correct: "にじゅうはち",
                hint: "に + じゅう + はち",
                explanation: "にじゅうはち là 28"
            },
            {
                question: "81",
                placeholder: "Nhập từ vựng có nghĩa 81",
                correct: "はちじゅういち",
                hint: "はち + じゅう + いち",
                explanation: "はちじゅういち là 81"
            },
            {
                question: "13",
                placeholder: "Nhập từ vựng có nghĩa 13",
                correct: "じゅうさん",
                hint: "じゅう + さん",
                explanation: "じゅうさん là 13"
            }
        ],
        wordConnect: [
            {
                word: "せんたく",
                options: ["Việc giặc giũ", "Kệ sách", "Tạp chí", "máy quạt"],
                correct: 0,
                explanation: "せんたく là Việc giặc giũ"
            },
            {
                word: "かんじ",
                options: ["Báo", "Chữ Hán", "Nhạc cụ", "bão"],
                correct: 1,
                explanation: "かんじ là Chữ Hán"
            },
            {
                word: "ほんだな",
                options: ["Nhật ký", "Việc kết hôn", "Kệ sách", "Con tem"],
                correct: 2,
                explanation: "ほんだな là Kệ sách"
            },
            {
                word: "しんぶん",
                options: ["Tác giả", "mẹ", "học sinh", "Báo"],
                correct: 3,
                explanation: "しんぶん là Báo"
            },
            {
                word: "さっか",
                options: ["Tác giả", "Vé tàu", "bà", "cái nón"],
                correct: 0,
                explanation: "さっか là Tác giả"
            },
            {
                word: "がっき",
                options: ["Chiếc lá", "Nhạc cụ", "ông", "em gái"],
                correct: 1,
                explanation: "がっき là Nhạc cụ"
            },
            {
                word: "にっき",
                options: ["giáo viên", "anh trai", "Nhật ký", "đá lạnh"],
                correct: 2,
                explanation: "にっき là Nhật ký"
            },
            {
                word: "けっこん",
                options: ["Cái đuôi", "bố", "nhiều", "Việc kết hôn"],
                correct: 3,
                explanation: "けっこん là Việc kết hôn"
            },
            {
                word: "ざっし",
                options: ["Tạp chí", "bức ảnh", "Ca sĩ", "Trà"],
                correct: 0,
                explanation: "ざっし là Tạp chí"
            },
            {
                word: "いっさい",
                options: ["chị gái", "1 tuổi", "Món ăn", "Sữa bò"],
                correct: 1,
                explanation: "いっさい là 1 tuổi"
            },
            {
                word: "きって",
                options: ["em trai", "Trường cấp 2", "Con tem", "Sách giáo khoa"],
                correct: 2,
                explanation: "きって là Con tem"
            },
            {
                word: "きっぷ",
                options: ["Luyện tập", "Thư viện", "Búp bê", "Vé tàu"],
                correct: 3,
                explanation: "きっぷ là Vé tàu"
            },
            {
                word: "はっぱ",
                options: ["Chiếc lá", "Bệnh viện", "Xe đạp", "Con trâu"],
                correct: 0,
                explanation: "はっぱ là Chiếc lá"
            },
            {
                word: "しっぽ",
                options: ["Việc giặc giũ", "Cái đuôi", "Chữ Hán", "Kệ sách"],
                correct: 1,
                explanation: "しっぽ là Cái đuôi"
            },
            {
                word: "おかあさん",
                options: ["Báo", "Tác giả", "mẹ", "Nhạc cụ"],
                correct: 2,
                explanation: "おかあさん là mẹ"
            },
            {
                word: "おばあさん",
                options: ["Nhật ký", "Việc kết hôn", "Tạp chí", "bà"],
                correct: 3,
                explanation: "おばあさん là bà"
            },
            {
                word: "おにいさん",
                options: ["anh trai", "1 tuổi", "Con tem", "Vé tàu"],
                correct: 0,
                explanation: "おにいさん là anh trai"
            },
            {
                word: "おじいさん",
                options: ["Chiếc lá", "ông", "Cái đuôi", "mẹ"],
                correct: 1,
                explanation: "おじいさん là ông"
            },
            {
                word: "たいふう",
                options: ["bà", "anh trai", "bão", "máy quạt"],
                correct: 2,
                explanation: "たいふう là bão"
            },
            {
                word: "せんぷうき",
                options: ["giáo viên", "học sinh", "chị gái", "máy quạt"],
                correct: 3,
                explanation: "せんぷうき là máy quạt"
            },
            {
                word: "せんせい",
                options: ["giáo viên", "cái nón", "bố", "em gái"],
                correct: 0,
                explanation: "せんせい là giáo viên"
            },
            {
                word: "せいと",
                options: ["em trai", "học sinh", "nhiều", "đá lạnh"],
                correct: 1,
                explanation: "せいと là học sinh"
            },
            {
                word: "おねえさん",
                options: ["bức ảnh", "Ca sĩ", "chị gái", "Trà"],
                correct: 2,
                explanation: "おねえさん là chị gái"
            },
            {
                word: "ぼうし",
                options: ["Món ăn", "Sữa bò", "Trường cấp 2", "cái nón"],
                correct: 3,
                explanation: "ぼうし là cái nón"
            },
            {
                word: "おとうさん",
                options: ["bố", "Sách giáo khoa", "Luyện tập", "Thư viện"],
                correct: 0,
                explanation: "おとうさん là bố"
            },
            {
                word: "いもうと",
                options: ["Búp bê", "em gái", "Bệnh viện", "Xe đạp"],
                correct: 1,
                explanation: "いもうと là em gái"
            },
            {
                word: "おとうと",
                options: ["Con trâu", "Việc giặc giũ", "em trai", "Chữ Hán"],
                correct: 2,
                explanation: "おとうと là em trai"
            },
            {
                word: "おおい",
                options: ["Kệ sách", "Báo", "Tác giả", "nhiều"],
                correct: 3,
                explanation: "おおい là nhiều"
            },
            {
                word: "こおり",
                options: ["đá lạnh", "Nhạc cụ", "Nhật ký", "Việc kết hôn"],
                correct: 0,
                explanation: "こおり là đá lạnh"
            },
            {
                word: "しゃしん",
                options: ["Tạp chí", "bức ảnh", "1 tuổi", "Con tem"],
                correct: 1,
                explanation: "しゃしん là bức ảnh"
            },
            {
                word: "かしゅ",
                options: ["Vé tàu", "Chiếc lá", "Ca sĩ", "Cái đuôi"],
                correct: 2,
                explanation: "かしゅ là Ca sĩ"
            },
            {
                word: "おちゃ",
                options: ["mẹ", "bà", "anh trai", "Trà"],
                correct: 3,
                explanation: "おちゃ là Trà"
            },
            {
                word: "りょうり",
                options: ["Món ăn", "ông", "bão", "máy quạt"],
                correct: 0,
                explanation: "りょうり là Món ăn"
            },
            {
                word: "ぎゅうにゅう",
                options: ["giáo viên", "Sữa bò", "học sinh", "chị gái"],
                correct: 1,
                explanation: "ぎゅうにゅう là Sữa bò"
            },
            {
                word: "ちゅうがっこう",
                options: ["cái nón", "bố", "Trường cấp 2", "em gái"],
                correct: 2,
                explanation: "ちゅうがっこう là Trường cấp 2"
            },
            {
                word: "きょうかしょ",
                options: ["em trai", "nhiều", "đá lạnh", "Sách giáo khoa"],
                correct: 3,
                explanation: "きょうかしょ là Sách giáo khoa"
            },
            {
                word: "れんしゅう",
                options: ["Luyện tập", "bức ảnh", "Ca sĩ", "Trà"],
                correct: 0,
                explanation: "れんしゅう là Luyện tập"
            },
            {
                word: "としょかん",
                options: ["Món ăn", "Thư viện", "Sữa bò", "Trường cấp 2"],
                correct: 1,
                explanation: "としょかん là Thư viện"
            },
            {
                word: "にんぎょう",
                options: ["Sách giáo khoa", "Luyện tập", "Búp bê", "Bệnh viện"],
                correct: 2,
                explanation: "にんぎょう là Búp bê"
            },
            {
                word: "びょういん",
                options: ["Xe đạp", "Con trâu", "Việc giặc giũ", "Bệnh viện"],
                correct: 3,
                explanation: "びょういん là Bệnh viện"
            },
            {
                word: "じてんしゃ",
                options: ["Xe đạp", "Chữ Hán", "Kệ sách", "Báo"],
                correct: 0,
                explanation: "じてんしゃ là Xe đạp"
            },
            {
                word: "すいぎゅう",
                options: ["Tác giả", "Con trâu", "Nhạc cụ", "Nhật ký"],
                correct: 1,
                explanation: "すいぎゅう là Con trâu"
            }
        ],
        fillBlank: [
            {
                sentence: "こ___はせんぷう___ではありありません",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "これはせんぷうきではありありません = Cái này không phải là máy quạt"
            },
            {
                sentence: "それは___うしで___ありません",
                blanks: ["ぼ", "は"],
                options: [["ぼ", "ほ", "も", "の"], ["は", "が", "を", "に"]],
                explanation: "それはぼうしではありません = Cái đó không phải là cái nón"
            },
            {
                sentence: "い___なん___ですか",
                blanks: ["ま", "じ"],
                options: [["ま", "み", "む", "め"], ["じ", "ぎ", "び", "ぴ"]],
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            }
        ],
        sentenceOrder: [
            {
                words: ["ん", "で", "い", "す", "じ", "ま", "か", "な"],
                correct: [2, 5, 7, 0, 4, 1, 3, 6],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["す", "ご", "く", "で", "じ", "ん", "ふ", "ま", "い"],
                correct: [8, 7, 2, 4, 1, 6, 5, 3, 0],
                correctSentence: "いまくじごふんです",
                explanation: "いまくじごふんです = Bây giờ là 9 giờ 5 phút"
            },
            {
                words: ["ん", "す", "ご", "ふ", "じ", "い", "じゅ", "う", "ま", "よ", "で"],
                correct: [5, 8, 9, 4, 6, 7, 2, 3, 0, 10,1],
                correctSentence: "いまよじじゅうごふんです",
                explanation: "いまよじじゅうごふんです = Bây giờ là 4 giờ 15 phút"
            },
            {
                words: ["ぷ", "ん", "じ", "は", "ま", "い", "じゅ", "っ", "す", "で", "ち", "に"],
                correct: [5, 4, 3, 10, 2, 11, 6, 7, 0, 1, 9, 8],
                correctSentence: "いまはちじにじゅっぷんです",
                explanation: "いまはちじにじゅっぷんです = Bây giờ là 8 giờ 10 phút"
            }
        ]
    },
    test7: {
        name: 'Bài test 7 - Ngày 06-12-2025',
        multipleChoice: [
            {
                question: "Chọn nghĩa đúng của từ 'bức ảnh':",
                options: ["かしゅ", "しゃしん", "おちゃ", "りょうり"],
                correct: 1,
                explanation: "しゃしん nghĩa là bức ảnh"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Ca sĩ':",
                options: ["ぎゅうにゅう", "きょうかしょ", "かしゅ", "おちゃ"],
                correct: 2,
                explanation: "かしゅ nghĩa là Ca sĩ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Trà':",
                options: ["おちゃ", "りょうり", "しゃしん", "ちゅうがっこう"],
                correct: 0,
                explanation: "おちゃ nghĩa là Trà"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Món ăn':",
                options: ["かしゅ", "ぎゅうにゅう", "きょうかしょ", "りょうり"],
                correct: 3,
                explanation: "りょうり nghĩa là Món ăn"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Sữa bò':",
                options: ["しゃしん", "ぎゅうにゅう", "おちゃ", "ちゅうがっこう"],
                correct: 1,
                explanation: "ぎゅうにゅう nghĩa là Sữa bò"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Trường cấp 2':",
                options: ["りょうり", "かしゅ", "ちゅうがっこう", "きょうかしょ"],
                correct: 2,
                explanation: "ちゅうがっこう nghĩa là Trường cấp 2"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Sách giáo khoa':",
                options: ["おちゃ", "しゃしん", "ぎゅうにゅう", "きょうかしょ"],
                correct: 3,
                explanation: "きょうかしょ nghĩa là Sách giáo khoa"
            }
        ],
        matching: [
            {
                left: ["いってきます", "いってらっしゃい", "ただいま", "おかえりなさい"],
                right: ["Bạn đã về đó à( Người ở nhà chào người mới về)", "Tôi đi đây( Người đi ra ngoài chào)", "Bạn đi đi nhé( Người ở trong nhà chào người đi)", "Tôi đã về( Người ở ngoài về chào)"],
                correctPairs: [[0, 1], [1, 2], [2, 3], [3, 0]],
                explanation: "いってきます = Tôi đi đây( Người đi ra ngoài chào), いってらっしゃい = Bạn đi đi nhé( Người ở trong nhà chào người đi), ただいま = Tôi đã về( Người ở ngoài về chào), おかえりなさい = Bạn đã về đó à( Người ở nhà chào người mới về)"
            }
        ]
        ,
        typing: [
            {
                question: "Ca sĩ",
                placeholder: "Nhập từ vựng có nghĩa Ca sĩ",
                correct: "かしゅ",
                hint: "か + しゅ",
                explanation: "かしゅ là Ca sĩ"
            },
            {
                question: "Món ăn",
                placeholder: "Nhập từ vựng có nghĩa Món ăn",
                correct: "りょうり",
                hint: "りょ + う + り",
                explanation: "りょうり là Món ăn"
            },
            {
                question: "Sữa bò",
                placeholder: "Nhập từ vựng có nghĩa Sữa bò",
                correct: "ぎゅうにゅう",
                hint: "ぎゅ + う + にゅ + う",
                explanation: "ぎゅうにゅう là Sữa bò"
            },
            {
                question: "Trường cấp 2",
                placeholder: "Nhập từ vựng có nghĩa Trường cấp 2",
                correct: "ちゅうがっこう",
                hint: "ちゅ + う + が + っ + こ + う",
                explanation: "ちゅうがっこう là Trường cấp 2"
            },
            {
                question: "Sách giáo khoa",
                placeholder: "Nhập từ vựng có nghĩa Sách giáo khoa",
                correct: "きょうかしょ",
                hint: "きょ + う + か + しょ",
                explanation: "きょうかしょ là Sách giáo khoa"
            },
            {
                question: "Thư viện",
                placeholder: "Nhập từ vựng có nghĩa Thư viện",
                correct: "としょかん",
                hint: "と + しょ + か + ん",
                explanation: "としょかん là Thư viện"
            },
            {
                question: "Búp bê",
                placeholder: "Nhập từ vựng có nghĩa Búp bê",
                correct: "にんぎょう",
                hint: "に + ん + ぎょ + う",
                explanation: "にんぎょう là Búp bê"
            },
            {
                question: "Bệnh viện",
                placeholder: "Nhập từ vựng có nghĩa Bệnh viện",
                correct: "びょういん",
                hint: "びょ + う + い + ん",
                explanation: "びょういん là Bệnh viện"
            }
        ],
        wordConnect: [
            {
                word: "れんしゅう",
                options: ["Luyện tập", "Thư viện", "Bệnh viện", "Xe đạp"],
                correct: 0,
                explanation: "れんしゅう là Luyện tập"
            },
            {
                word: "としょかん",
                options: ["Búp bê", "Thư viện", "Con trâu", "Luyện tập"],
                correct: 1,
                explanation: "としょかん là Thư viện"
            },
            {
                word: "にんぎょう",
                options: ["Bệnh viện", "Xe đạp", "Búp bê", "Thư viện"],
                correct: 2,
                explanation: "にんぎょう là Búp bê"
            },
            {
                word: "びょういん",
                options: ["Con trâu", "Luyện tập", "Búp bê", "Bệnh viện"],
                correct: 3,
                explanation: "びょういん là Bệnh viện"
            },
            {
                word: "じてんしゃ",
                options: ["Thư viện", "Xe đạp", "Con trâu", "Bệnh viện"],
                correct: 1,
                explanation: "じてんしゃ là Xe đạp"
            },
            {
                word: "すいぎゅう",
                options: ["Búp bê", "Luyện tập", "Con trâu", "Thư viện"],
                correct: 2,
                explanation: "すいぎゅう là Con trâu"
            }
        ],
        fillBlank: [
            {
                sentence: "こ___はせんぷう___ではありありません",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "これはせんぷうきではありありません = Cái này không phải là máy quạt"
            },
            {
                sentence: "それは___うしで___ありません",
                blanks: ["ぼ", "は"],
                options: [["ぼ", "ほ", "も", "の"], ["は", "が", "を", "に"]],
                explanation: "それはぼうしではありません = Cái đó không phải là cái nón"
            },
            {
                sentence: "い___なん___ですか",
                blanks: ["ま", "じ"],
                options: [["ま", "み", "む", "め"], ["じ", "ぎ", "び", "ぴ"]],
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            }
        ],
        sentenceOrder: [
            {
                words: ["ん", "で", "い", "す", "じ", "ま", "か", "な"],
                correct: [2, 5, 7, 0, 4, 1, 3, 6],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["す", "ご", "く", "で", "じ", "ん", "ふ", "ま", "い"],
                correct: [8, 7, 2, 4, 1, 6, 5, 3, 0],
                correctSentence: "いまくじごふんです",
                explanation: "いまくじごふんです = Bây giờ là 9 giờ 5 phút"
            },
            {
                words: ["ん", "す", "ご", "ふ", "じ", "い", "じゅ", "う", "ま", "よ", "で"],
                correct: [5, 8, 9, 4, 6, 7, 2, 3, 0, 10,1],
                correctSentence: "いまよじじゅうごふんです",
                explanation: "いまよじじゅうごふんです = Bây giờ là 4 giờ 15 phút"
            },
            {
                words: ["ぷ", "ん", "じ", "は", "ま", "い", "じゅ", "っ", "す", "で", "ち", "に"],
                correct: [5, 4, 3, 10, 2, 11, 6, 7, 0, 1, 9, 8],
                correctSentence: "いまはちじにじゅっぷんです",
                explanation: "いまはちじにじゅっぷんです = Bây giờ là 8 giờ 10 phút"
            }
        ]
    },
    test6: {
        name: 'Bài test 6 - Ngày 30-11-2025',
        multipleChoice: [
            {
                question: "Chọn nghĩa đúng của từ 'mẹ':",
                options: ["おにいさん", "おかあさん", "せんぷうき", "たいふう"],
                correct: 1,
                explanation: "おかあさん nghĩa là mẹ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'bà':",
                options: ["おばあさん", "おじいさん", "せんせい", "おかあさん"],
                correct: 0,
                explanation: "おばあさん nghĩa là bà"
            },
            {
                question: "Chọn nghĩa đúng của từ 'anh trai':",
                options: ["たいふう", "せんぷうき", "おにいさん", "おじいさん"],
                correct: 2,
                explanation: "おにいさん nghĩa là anh trai"
            },
            {
                question: "Chọn nghĩa đúng của từ 'ông':",
                options: ["おかあさん", "おばあさん", "せんせい", "おじいさん"],
                correct: 3,
                explanation: "おじいさん nghĩa là ông"
            },
            {
                question: "Chọn nghĩa đúng của từ 'bão':",
                options: ["たいふう", "せんぷうき", "おにいさん", "おばあさん"],
                correct: 0,
                explanation: "たいふう nghĩa là bão"
            },
            {
                question: "Chọn nghĩa đúng của từ 'máy quạt':",
                options: ["おじいさん", "たいふう", "せんぷうき", "せんせい"],
                correct: 2,
                explanation: "せんぷうき nghĩa là máy quạt"
            },
            {
                question: "Chọn nghĩa đúng của từ 'giáo viên':",
                options: ["おかあさん", "おにいさん", "せんぷうき", "せんせい"],
                correct: 3,
                explanation: "せんせい nghĩa là giáo viên"
            }
        ],
        matching: [
            {
                left: ["いってきます", "いってらっしゃい", "ただいま", "おかえりなさい"],
                right: ["Bạn đã về đó à( Người ở nhà chào người mới về)", "Tôi đi đây( Người đi ra ngoài chào)", "Bạn đi đi nhé( Người ở trong nhà chào người đi)", "Tôi đã về( Người ở ngoài về chào)"],
                correctPairs: [[0, 1], [1, 2], [2, 3], [3, 0]],
                explanation: "いってきます = Tôi đi đây( Người đi ra ngoài chào), いってらっしゃい = Bạn đi đi nhé( Người ở trong nhà chào người đi), ただいま = Tôi đã về( Người ở ngoài về chào), おかえりなさい = Bạn đã về đó à( Người ở nhà chào người mới về)"
            }
        ]
        ,
        typing: [
            {
                question: "Mẹ",
                placeholder: "Nhập từ vựng có nghĩa Mẹ",
                correct: "おかあさん",
                hint: "お + か + あ + さ + ん",
                explanation: "おかあさん là Mẹ"
            },
            {
                question: "Bà",
                placeholder: "Nhập từ vựng có nghĩa Bà",
                correct: "おばあさん",
                hint: "お + ば + あ + さ + ん",
                explanation: "おばあさん là Bà"
            },
            {
                question: "Anh trai",
                placeholder: "Nhập từ vựng có nghĩa Anh trai",
                correct: "おにいさん",
                hint: "お + に + い + さ + ん",
                explanation: "おにいさん là Anh trai"
            },
            {
                question: "Chị gái",
                placeholder: "Nhập từ vựng có nghĩa Chị gái",
                correct: "おねえさん",
                hint: "お + ね + え + さ + ん",
                explanation: "おねえさん là Chị gái"
            },
            {
                question: "Bố",
                placeholder: "Nhập từ vựng có nghĩa Bố",
                correct: "おとうさん",
                hint: "お + と + う + さ + ん",
                explanation: "おとうさん là Bố"
            },
            {
                question: "Em gái",
                placeholder: "Nhập từ vựng có nghĩa Em gái",
                correct: "いもうと",
                hint: "い + も + う + と",
                explanation: "いもうと là Em gái"
            },
            {
                question: "Em trai",
                placeholder: "Nhập từ vựng có nghĩa Em trai",
                correct: "おとうと",
                hint: "お + と + う + と",
                explanation: "おとうと là Em trai"
            }
        ],
        wordConnect: [
            {
                word: "せいと",
                options: ["Cái nón", "Học sinh", "Em trai", "Đá lạnh"],
                correct: 1,
                explanation: "せいと là Học sinh"
            },
            {
                word: "おねえさん",
                options: ["Bố", "Em gái", "Chị gái", "Nhiều"],
                correct: 2,
                explanation: "おねえさん là Chị gái"
            },
            {
                word: "ぼうし",
                options: ["Học sinh", "Chị gái", "Em trai", "Cái nón"],
                correct: 3,
                explanation: "ぼうし là Cái nón"
            },
            {
                word: "おとうさん",
                options: ["Bố", "Đá lạnh", "Em gái", "Cái nón"],
                correct: 0,
                explanation: "おとうさん là Bố"
            },
            {
                word: "いもうと",
                options: ["Nhiều", "Chị gái", "Em gái", "Học sinh"],
                correct: 2,
                explanation: "いもうと là Em gái"
            },
            {
                word: "おとうと",
                options: ["Em trai", "Bố", "Đá lạnh", "Cái nón"],
                correct: 0,
                explanation: "おとうと là Em trai"
            },
            {
                word: "おおい",
                options: ["Học sinh", "Em gái", "Chị gái", "Nhiều"],
                correct: 3,
                explanation: "おおい là Nhiều"
            },
            {
                word: "こおり",
                options: ["Đá lạnh", "Em trai", "Cái nón", "Bố"],
                correct: 0,
                explanation: "こおり là Đá lạnh"
            }
        ],
        fillBlank: [
            {
                sentence: "こ___はせんぷう___ではありありません",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "これはせんぷうきではありありません = Cái này không phải là máy quạt"
            },
            {
                sentence: "それは___うしで___ありません",
                blanks: ["ぼ", "は"],
                options: [["ぼ", "ほ", "も", "の"], ["は", "が", "を", "に"]],
                explanation: "それはぼうしではありません = Cái đó không phải là cái nón"
            },
            {
                sentence: "い___なん___ですか",
                blanks: ["ま", "じ"],
                options: [["ま", "み", "む", "め"], ["じ", "ぎ", "び", "ぴ"]],
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            }
        ],
        sentenceOrder: [
            {
                words: ["で", "く", "す", "じ", "ま", "い"],
                correct: [5, 4, 1, 3, 0, 2],
                correctSentence: "いまくじです",
                explanation: "いまくじです = Bây giờ là 9 giờ"
            },
            {
                words: ["す", "し", "う", "こ", "は", "で", "ぼ", "れ"],
                correct: [3, 7, 4, 6, 2, 1, 5, 0],
                correctSentence: "これはすいかです",
                explanation: "これはすいかです = Cái này là dưa hấu"
            },
            {
                words: [ "が", "で", "っ", "き", "せ", "あ", "り", "ま", "は","それは","ん"],
                correct: [9, 0, 2, 3, 1, 8, 5, 6, 7, 4, 10],
                correctSentence: "それはがっきではありません",
                explanation: "きがっきではありません = Cái đó không phải là nhạc cụ"
            }
        ]
    },
    test5: {
        name: 'Bài test 5 - Ngày 23-11-2025',
        multipleChoice: [
            { question: "Chọn nghĩa đúng của từ 'Bút chì':", options: ["えんぴつ", "たんぼ", "まんが", "かんじ"], correct: 0, explanation: "えんぴつ nghĩa là Bút chì" },
            { question: "Chọn nghĩa đúng của từ 'Ruộng lúa':", options: ["にほんご", "たんぼ", "でんき", "ほんだな"], correct: 1, explanation: "たんぼ nghĩa là Ruộng lúa" },
            { question: "Chọn nghĩa đúng của từ 'Tiếng Nhật':", options: ["せんたく", "まんが", "にほんご", "しんぶん"], correct: 2, explanation: "にほんご nghĩa là Tiếng Nhật" },
            { question: "Chọn nghĩa đúng của từ 'Truyện tranh':", options: ["えんぴつ", "でんき", "かんじ", "まんが"], correct: 3, explanation: "まんが nghĩa là Truyện tranh" },
            { question: "Chọn nghĩa đúng của từ 'Điện':", options: ["でんき", "たんぼ", "ほんだな", "にほんご"], correct: 0, explanation: "でんき nghĩa là Điện" },
            { question: "Chọn nghĩa đúng của từ 'Việc giặc giũ':", options: ["まんが", "せんたく", "えんぴつ", "しんぶん"], correct: 1, explanation: "せんたく nghĩa là Việc giặc giũ" },
            { question: "Chọn nghĩa đúng của từ 'Chữ Hán':", options: ["でんき", "たんぼ", "かんじ", "ほんだな"], correct: 2, explanation: "かんじ nghĩa là Chữ Hán" },
            { question: "Chọn nghĩa đúng của từ 'Kệ sách':", options: ["にほんご", "せんたく", "まんが", "ほんだな"], correct: 3, explanation: "ほんだな nghĩa là Kệ sách" },
            { question: "Chọn nghĩa đúng của từ 'Báo':", options: ["しんぶん", "えんぴつ", "かんじ", "でんき"], correct: 0, explanation: "しんぶん nghĩa là Báo" }
        ],
        matching: [
            {
                left: ["さっか", "がっき", "にっき", "けっこん", "ざっし", "いっさい", "きって", "きっぷ", "はっぱ", "しっぽ"],
                right: ["Cái đuôi", "Nhật ký", "Tác giả", "Vé tàu", "Nhạc cụ", "Con tem", "1 tuổi", "Tạp chí", "Việc kết hôn", "Chiếc lá"],
                correctPairs: [[0, 2], [1, 4], [2, 1], [3, 8], [4, 7], [5, 6], [6, 5], [7, 3], [8, 9], [9, 0]],
                explanation: "さっか = Tác giả, がっき = Nhạc cụ, にっき = Nhật ký, けっこん = Việc kết hôn, ざっし = Tạp chí, いっさい = 1 tuổi, きって = Con tem, きっぷ = Vé tàu, はっぱ = Chiếc lá, しっぽ = Cái đuôi"
            }
        ]
        ,
        typing: [
            { question: "Tác giả", placeholder: "Nhập từ vựng có nghĩa Tác giả", correct: "さっか", hint: "さっ + か", explanation: "さっか là Tác giả" },
            { question: "Việc kết hôn", placeholder: "Nhập từ vựng có nghĩa Việc kết hôn", correct: "けっこん", hint: "けっ + こん", explanation: "けっこん là Việc kết hôn" },
            { question: "1 tuổi", placeholder: "Nhập từ vựng có nghĩa 1 tuổi", correct: "いっさい", hint: "いっ + さい", explanation: "いっさい là 1 tuổi" },
            { question: "Vé tàu", placeholder: "Nhập từ vựng có nghĩa Vé tàu", correct: "きっぷ", hint: "きっ + ぷ", explanation: "きっぷ là Vé tàu" },
            { question: "Chiếc lá", placeholder: "Nhập từ vựng có nghĩa Chiếc lá", correct: "はっぱ", hint: "はっ + ぱ", explanation: "はっぱ là Chiếc lá" },
            { question: "Cái đuôi", placeholder: "Nhập từ vựng có nghĩa Cái đuôi", correct: "しっぽ", hint: "しっ + ぽ", explanation: "しっぽ là Cái đuôi" }
        ],
        wordConnect: [
            { word: "えんぴつ", options: ["empitsu", "enpitsu", "engpitsu"], correct: 0, explanation: "えんぴつ là empitsu" },
            { word: "たんぼ", options: ["tanbo", "tambo", "tangbo"], correct: 1, explanation: "たんぼ là tambo" },
            { word: "にほんご", options: ["nihomgo", "nihongo", "nihonggo"], correct: 2, explanation: "にほんご là nihonggo" },
            { word: "まんが", options: ["mamga", "manga", "mangga"], correct: 2, explanation: "まんが là mangga" },
            { word: "でんき", options: ["dengki", "denki", "demki"], correct: 0, explanation: "でんき là dengki" },
            { word: "せんたく", options: ["sengtaku", "sentaku", "semtaku"], correct: 1, explanation: "せんたく là sentaku" },
            { word: "かんじ", options: ["kamji", "kangji", "kanji"], correct: 2, explanation: "かんじ là kanji" },
            { word: "ほんだな", options: ["hongdana", "hondana", "homdana"], correct: 1, explanation: "ほんだな là hondana" },
            { word: "しんぶん", options: ["shimbung", "shinbung", "shimbun"], correct: 0, explanation: "しんぶん là shimbung" }
        ],
        fillBlank: [
            {
                sentence: "これはが___き___す",
                blanks: ["っ", "で"],
                options: [["っ", "ん", "い", "き"], ["で", "だ", "に", "ね"]],
                explanation: "これはがっきです = Đây là nhạc cụ"
            },
            {
                sentence: "そ___はにっ___です",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "それはにっきです = Đó là nhật ký"
            },
            {
                sentence: "あれ___ざっ___です",
                blanks: ["は", "し"],
                options: [["は", "が", "を", "に"], ["し", "ち", "き", "り"]],
                explanation: "あれはざっしです = Kia là tạp chí"
            },
            {
                sentence: "こ___は___ってです",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "これはきってです = Đây là con tem"
            }
        ],
        sentenceOrder: [
            {
                words: ["で", "ん", "か", "い", "す", "じ", "ま", "な"],
                correct: [3, 6, 7, 1, 5, 0, 4, 2],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["す", "じ", "く", "ま", "い", "で"],
                correct: [4, 3, 2, 1, 5, 0],
                correctSentence: "いまくじです",
                explanation: "いまくじです = Bây giờ là 9 giờ"
            },
            {
                words: ["す", "っ", "に", "は", "で", "き", "こ", "れ"],
                correct: [6, 7, 3, 2, 1, 5, 4, 0],
                correctSentence: "これはにっきです",
                explanation: "これはにっきです = Cái này là nhật kí"
            },
            {
                words: ["き", "す", "っ", "で", "そ", "は", "れ", "が"],
                correct: [4, 6, 5, 7, 2, 0, 3, 1],
                correctSentence: "それはがっきです",
                explanation: "それはがっきです = Cái đó là nhạc cụ"
            }
        ]
    },
    test4: {
        name: 'Bài test 4 - Ngày 09-11-2025',
        multipleChoice: [
            { question: "Chọn nghĩa đúng của từ 'lối vào':", options: ["まど", "いりぐち", "ごはん", "かぎ"], correct: 1, explanation: "いりぐち nghĩa là lối vào" },
            { question: "Chọn nghĩa đúng của từ 'lối ra':", options: ["みず", "でぐち", "かべ", "ぴかぴか"], correct: 1, explanation: "でぐち nghĩa là lối ra" },
            { question: "Chọn nghĩa đúng của từ 'chói loá':", options: ["ぴかぴか", "おみやげ", "でぐち", "まど"], correct: 0, explanation: "ぴかぴか nghĩa là chói loá" },
            { question: "Chọn nghĩa đúng của từ 'cửa sổ':", options: ["かべ", "まど", "ごはん", "いりぐち"], correct: 1, explanation: "まど nghĩa là cửa sổ" },
            { question: "Chọn nghĩa đúng của từ 'bức tường':", options: ["ごはん", "かぎ", "かべ", "みず"], correct: 2, explanation: "かべ nghĩa là bức tường" },
            { question: "Chọn nghĩa đúng của từ 'chìa khóa':", options: ["かぎ", "ぴかぴか", "おみやげ", "でぐち"], correct: 0, explanation: "かぎ nghĩa là chìa khóa" },
            { question: "Chọn nghĩa đúng của từ 'nước':", options: ["みず", "まど", "いりぐち", "ごはん"], correct: 0, explanation: "みず nghĩa là nước" },
            { question: "Chọn nghĩa đúng của từ 'cơm':", options: ["かべ", "おみやげ", "ごはん", "ぴかぴか"], correct: 2, explanation: "ごはん nghĩa là cơm" },
            { question: "Chọn nghĩa đúng của từ 'đặc sản':", options: ["おみやげ", "かぎ", "みず", "でぐち"], correct: 0, explanation: "おみやげ nghĩa là đặc sản" }
        ],
        matching: [
            {
                left: ["ぶた", "ばら", "ゆび", "からだ", "かぞく"],
                right: ["gia đình", "ngón tay", "con lợn", "cơ thể", "hoa hồng"],
                correctPairs: [
                    [0, 2],
                    [1, 4],
                    [2, 1],
                    [3, 3],
                    [4, 0]
                ],
                explanation: "ぶた = con lợn, ばら = hoa hồng, ゆび = ngón tay, からだ = cơ thể, かぞく = gia đình"
            }
        ]
        ,
        typing: [
            {
                question: "これはぶたです",
                placeholder: "Nhập câu có nghĩa 'Đây là con heo'",
                correct: "これはぶたです",
                hint: "こ + れ + は + ぶ + た + で + す",
                explanation: "これはぶたです nghĩa là 'Đây là con heo'"
            },
            {
                question: "それははなです",
                placeholder: "Nhập câu có nghĩa 'Đó là hoa'",
                correct: "それははなです",
                hint: "そ + れ + は + は + な + で + す",
                explanation: "それははなです nghĩa là 'Đó là hoa'"
            },
            {
                question: "いまなんじですか",
                placeholder: "Nhập câu có nghĩa 'Bây giờ là mấy giờ?'",
                correct: "いまなんじですか",
                hint: "い + ま + な + ん + じ + で + す + か",
                explanation: "いまなんじですか nghĩa là 'Bây giờ là mấy giờ?'"
            }
        ],
        wordConnect: [
            {
                word: "ぼく",
                options: ["tôi (nam)", "gió", "họa sĩ", "một giờ"],
                correct: 0,
                explanation: "ぼく là tôi (nam)"
            },
            {
                word: "がか",
                options: ["một giờ", "họa sĩ", "màu xanh lá", "nói lưu loát trôi chảy"],
                correct: 1,
                explanation: "がか là họa sĩ"
            },
            {
                word: "みどり",
                options: ["gió", "màu xanh lá", "nói lưu loát trôi chảy", "tôi (nam)"],
                correct: 1,
                explanation: "みどり là màu xanh lá"
            },
            {
                word: "いちじ",
                options: ["một giờ", "họa sĩ", "màu xanh lá", "gió"],
                correct: 0,
                explanation: "いちじ là một giờ"
            },
            {
                word: "ぺらぺら",
                options: ["nói lưu loát trôi chảy", "gió", "một giờ", "họa sĩ"],
                correct: 0,
                explanation: "ぺらぺら là nói lưu loát trôi chảy"
            },
            {
                word: "かぜ",
                options: ["một giờ", "màu xanh lá", "gió", "tôi (nam)"],
                correct: 2,
                explanation: "かぜ là gió"
            }
        ],
        fillBlank: [
            {
                sentence: "い___な___じですか",
                blanks: ["ま", "ん"],
                options: [["ま", "も", "み", "め"], ["ん", "に", "の", "ね"]],
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                sentence: "い___く___です",
                blanks: ["ま", "じ"],
                options: [["ま", "も", "み", "む"], ["じ", "ち", "ぢ", "し"]],
                explanation: "いまくじです = Bây giờ là 9 giờ"
            },
            {
                sentence: "あ___は___べです",
                blanks: ["れ", "か"],
                options: [["れ", "ね", "め", "せ"], ["か", "が", "さ", "た"]],
                explanation: "あれはかべです = Kia là bức tường"
            },
            {
                sentence: "こ___は___です",
                blanks: ["れ", "き"],
                options: [["れ", "ね", "ろ", "り"], ["き", "ぎ", "し", "ち"]],
                explanation: "これはきです = Đây là cái cây"
            },
            {
                sentence: "そ___はい___です",
                blanks: ["れ", "ぬ"],
                options: [["れ", "ね", "ろ", "り"], ["ぬ", "む", "る", "す"]],
                explanation: "それはいぬです = Con đó là con chó"
            }
        ],
        sentenceOrder: [
            {
                words: ["ず", "み", "は", "こ", "れ", "す", "で"],
                correct: [3, 4, 2, 1, 0, 6, 5],
                correctSentence: "これはみずです",
                explanation: "これはみずです = Đây là nước"
            },
            {
                words: ["た", "ぶ", "は", "す", "そ", "れ", "で"],
                correct: [4, 5, 2, 1, 0, 6, 3],
                correctSentence: "それはぶたです",
                explanation: "それはぶたです = Con đó là con lợn"
            },
            {
                words: ["ん", "な", "い", "じ", "で", "か", "す", "ま"],
                correct: [2, 7, 1, 0, 3, 4, 6,5 ],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["で", "よ", "い", "ま", "す", "じ"],
                correct: [2, 3, 1, 5, 0, 4],
                correctSentence: "いまよじです",
                explanation: "いまよじです = Bây giờ là 4 giờ"
            },
            {
                words: ["こ", "ね", "す", "れ", "は", "で", "あ"],
                correct: [6, 3, 4, 1, 0, 5, 2],
                correctSentence: "あれはねこです",
                explanation: "あれはねこです = Kia là con mèo"
            }
        ]
    },
    test3: {
        name: 'Bài test 3 - Ngày 02-11-2025',
        multipleChoice: [
            {
                question: "Chọn nghĩa đúng của từ 'Cỏ':",
                options: ["き", "くさ", "えき", "かさ"],
                correct: 1,
                explanation: "くさ nghĩa là Cỏ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'mắt':",
                options: ["き", "くさ", "め", "かさ"],
                correct: 2,
                explanation: "め nghĩa là mắt"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Cây':",
                options: ["こえ", "あお", "き", "あし"],
                correct: 2,
                explanation: "き nghĩa là Cây"
            },
            {
                question: "Chọn nghĩa đúng của từ 'ga, nhà ga':",
                options: ["えき", "かお", "すいか", "うし"],
                correct: 0,
                explanation: "えき nghĩa là ga, nhà ga"
            },
            {
                question: "Chọn nghĩa đúng của từ 'giọng nói, tiếng nói':",
                options: ["あか", "しお", "いす", "こえ"],
                correct: 3,
                explanation: "こえ nghĩa là giọng nói, tiếng nói"
            },
            {
                question: "Chọn nghĩa đúng của từ 'khuôn mặt':",
                options: ["は", "かお", "て", "くさ"],
                correct: 1,
                explanation: "かお nghĩa là khuôn mặt"
            },
            {
                question: "Chọn nghĩa đúng của từ 'màu xanh nước biển':",
                options: ["き", "えき", "あお", "かさ"],
                correct: 2,
                explanation: "あお nghĩa là màu xanh nước biển"
            },
            {
                question: "Chọn nghĩa đúng của từ 'màu đỏ':",
                options: ["あか", "こえ", "あし", "すいか"],
                correct: 0,
                explanation: "あか nghĩa là màu đỏ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Cây dù':",
                options: ["うし", "しお", "かさ", "いす"],
                correct: 2,
                explanation: "かさ nghĩa là Cây dù"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Bàn chân':",
                options: ["は", "あし", "て", "くさ"],
                correct: 1,
                explanation: "あし nghĩa là Bàn chân"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Dưa hấu':",
                options: ["き", "えき", "こえ", "すいか"],
                correct: 3,
                explanation: "すいか nghĩa là Dưa hấu"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Con bò':",
                options: ["うし", "かお", "あお", "あか"],
                correct: 0,
                explanation: "うし nghĩa là Con bò"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Muối':",
                options: ["かさ", "しお", "あし", "すいか"],
                correct: 1,
                explanation: "しお nghĩa là Muối"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Ghế':",
                options: ["うし", "いす", "は", "て"],
                correct: 1,
                explanation: "いす nghĩa là Ghế"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Răng':",
                options: ["くさ", "き", "は", "えき"],
                correct: 2,
                explanation: "は nghĩa là Răng"
            },
            {
                question: "Chọn nghĩa đúng của từ 'tay':",
                options: ["こえ", "かお", "あお", "て"],
                correct: 3,
                explanation: "て nghĩa là tay"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chào buổi sáng':",
                options: ["Konnichiwa", "Ohayougozaimasu", "Oyasuminasai", "Konbanwa"],
                correct: 1,
                explanation: "Ohayougozaimasu nghĩa là Chào buổi sáng"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chào buổi chiều':",
                options: ["Konbanwa", "Konnichiwa", "sayonara", "Ohayougozaimasu"],
                correct: 1,
                explanation: "Konnichiwa nghĩa là Chào buổi chiều"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chào buổi tối':",
                options: ["Oyasuminasai", "Konbanwa", "Konnichiwa", "Sumimasen"],
                correct: 1,
                explanation: "Konbanwa nghĩa là Chào buổi tối"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Rất vui được gặp bạn':",
                options: ["Hajimemashite", "Arigato gozaimasu", "onegaishimasu", "Dooitashimashite"],
                correct: 0,
                explanation: "Hajimemashite nghĩa là Rất vui được gặp bạn"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Vui lòng giúp đỡ':",
                options: ["Arigato gozaimasu", "onegaishimasu", "Sumimasen", "Dooitashimashite"],
                correct: 1,
                explanation: "onegaishimasu nghĩa là Vui lòng giúp đỡ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chúc ngủ ngon':",
                options: ["Ohayougozaimasu", "Konnichiwa", "Oyasuminasai", "Konbanwa"],
                correct: 2,
                explanation: "Oyasuminasai nghĩa là Chúc ngủ ngon"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Tạm biệt':",
                options: ["sayonara", "Sumimasen", "Konnichiwa", "Dooitashimashite"],
                correct: 0,
                explanation: "sayonara nghĩa là Tạm biệt"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Cảm ơn':",
                options: ["Dooitashimashite", "onegaishimasu", "Arigato gozaimasu", "Sumimasen"],
                correct: 2,
                explanation: "Arigato gozaimasu nghĩa là Cảm ơn"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Không có chi':",
                options: ["Sumimasen", "Arigato gozaimasu", "sayonara", "Dooitashimashite"],
                correct: 3,
                explanation: "Dooitashimashite nghĩa là Không có chi"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Xin lỗi':",
                options: ["onegaishimasu", "Dooitashimashite", "Sumimasen", "Arigato gozaimasu"],
                correct: 2,
                explanation: "Sumimasen nghĩa là Xin lỗi"
            }
        ],
        matching: [
            {
                left: ["おかし", "せかい", "くち", "つくえ", "たいこ", "つき", "ぬの", "にく", "いぬ", "ねこ"],
                right: ["Con mèo", "Thịt", "Bánh kẹo", "Cái trống", "Mặt trăng", "cái bàn", "Thế giới", "miệng", "Vải", "Con chó"],
                correctPairs: [[0, 2], [1, 6], [2, 7], [3, 5], [4, 3], [5, 4], [6, 8], [7, 1], [8, 9], [9, 0]],
                explanation: "おかし = Bánh kẹo, せかい = Thế giới, くち = miệng, つくえ = cái bàn, たいこ = Cái trống, つき = Mặt trăng, ぬの = Vải, にく = Thịt, いぬ = Con chó, ねこ = Con mèo"
            }
        ],
        typing: [
            {
                question: "21",
                placeholder: "Nhập từ vựng có nghĩa 21",
                correct: "nijyuuichi",
                hint: "ni + jyuu + ichi",
                explanation: "nijyuuichi là 21"
            },
            {
                question: "92",
                placeholder: "Nhập từ vựng có nghĩa 92",
                correct: "kyuujyuuni",
                hint: "kyuu + jyuu + ni",
                explanation: "kyuujyuuni là 92"
            },
            {
                question: "83",
                placeholder: "Nhập từ vựng có nghĩa 83",
                correct: "hachijyuusan",
                hint: "hachi + jyuu + san",
                explanation: "hachijyuusan là 83"
            },
            {
                question: "14",
                placeholder: "Nhập từ vựng có nghĩa 14",
                correct: "jyuuyon",
                hint: "jyuu + yon",
                explanation: "jyuuyon là 14"
            },
            {
                question: "43",
                placeholder: "Nhập từ vựng có nghĩa 43",
                correct: "yonjyuusan",
                hint: "yon + jyuu + san",
                explanation: "yonjyuusan là 43"
            },
            {
                question: "76",
                placeholder: "Nhập từ vựng có nghĩa 76",
                correct: "nanajyuuroku",
                hint: "nana + jyuu + roku",
                explanation: "nanajyuuroku là 76"
            },
            {
                question: "35",
                placeholder: "Nhập từ vựng có nghĩa 35",
                correct: "sanjyuugo",
                hint: "san + jyuu + go",
                explanation: "sanjyuugo là 35"
            },
            {
                question: "59",
                placeholder: "Nhập từ vựng có nghĩa 59",
                correct: "gojyuukyuu",
                hint: "go + jyuu + kyuu",
                explanation: "gojyuukyuu là 59"
            },
            {
                question: "67",
                placeholder: "Nhập từ vựng có nghĩa 67",
                correct: "rokujyuunana",
                hint: "roku + jyuu + nana",
                explanation: "rokujyuunana là 67"
            },
            {
                question: "28",
                placeholder: "Nhập từ vựng có nghĩa 28",
                correct: "nijyuuhachi",
                hint: "ni + jyuu + hachi",
                explanation: "nijyuuhachi là 28"
            }
        ],
        wordConnect: [
            {
                word: "Vải",
                options: ["ぬの", "にく", "いぬ", "はな"],
                correct: 0,
                explanation: "Vải là ぬの"
            },
            {
                word: "Thịt",
                options: ["ねこ", "にく", "そと", "は"],
                correct: 1,
                explanation: "Thịt là にく"
            },
            {
                word: "Con chó",
                options: ["ほし", "ふね", "いぬ", "なか"],
                correct: 2,
                explanation: "Con chó là いぬ"
            },
            {
                word: "Con mèo",
                options: ["はな", "ひと", "ぬの", "ねこ"],
                correct: 3,
                explanation: "Con mèo là ねこ"
            },
            {
                word: "Bên ngoài",
                options: ["そと", "は", "にく", "ふね"],
                correct: 0,
                explanation: "Bên ngoài là そと"
            },
            {
                word: "Bên trong",
                options: ["いぬ", "なか", "ほし", "ぬの"],
                correct: 1,
                explanation: "Bên trong là なか"
            },
            {
                word: "Răng",
                options: ["ねこ", "はな", "は", "ひと"],
                correct: 2,
                explanation: "Răng là は"
            },
            {
                word: "Hoa",
                options: ["ふね", "にく", "そと", "はな"],
                correct: 3,
                explanation: "Hoa là はな"
            },
            {
                word: "Con người",
                options: ["ひと", "ぬの", "ほし", "なか"],
                correct: 0,
                explanation: "Con người là ひと"
            },
            {
                word: "Tàu thuyền",
                options: ["いぬ", "ふね", "は", "ねこ"],
                correct: 1,
                explanation: "Tàu thuyền là ふね"
            },
            {
                word: "Ngôi sao",
                options: ["そと", "はな", "ほし", "にく"],
                correct: 2,
                explanation: "Ngôi sao là ほし"
            }
        ],
        fillBlank: [
            {
                sentence: "そ___",
                blanks: ["と"],
                options: [["た", "と", "て", "つ"]],
                explanation: "そと = Bên ngoài"
            },
            {
                sentence: "な___",
                blanks: ["か"],
                options: [["き", "く", "か", "け"]],
                explanation: "なか = Bên trong"
            },
            {
                sentence: "は___",
                blanks: ["な"],
                options: [["に", "な", "ぬ", "ね"]],
                explanation: "はな = Hoa"
            },
            {
                sentence: "ひ___",
                blanks: ["と"],
                options: [["て", "つ", "と", "た"]],
                explanation: "ひと = Con người"
            },
            {
                sentence: "ふ___",
                blanks: ["ね"],
                options: [["ね", "な", "に", "の"]],
                explanation: "ふね = Tàu thuyền"
            },
            {
                sentence: "ほ___",
                blanks: ["し"],
                options: [["さ", "す", "し", "せ"]],
                explanation: "ほし = Ngôi sao"
            },
            {
                sentence: "み___",
                blanks: ["ち"],
                options: [["て", "ち", "つ", "と"]],
                explanation: "みち = Con đường"
            },
            {
                sentence: "ま___",
                blanks: ["ち"],
                options: [["ち", "た", "て", "つ"]],
                explanation: "まち = Con phố"
            },
            {
                sentence: "み___",
                blanks: ["み"],
                options: [["む", "み", "ま", "め"]],
                explanation: "みみ = Cái tai"
            },
            {
                sentence: "む___",
                blanks: ["し"],
                options: [["す", "せ", "し", "さ"]],
                explanation: "むし = sâu, côn trùng"
            },
            {
                sentence: "ら___",
                blanks: ["ん"],
                options: [["ん", "わ", "を", "ね"]],
                explanation: "らん = hoa lan"
            },
            {
                sentence: "や___や",
                blanks: ["お"],
                options: [["え", "お", "あ", "い"]],
                explanation: "やおや = tiệm rau"
            },
            {
                sentence: "く___り___",
                blanks: ["す", "や"],
                options: [["し", "す", "さ", "せ"], ["よ", "ゆ", "や", "ら"]],
                explanation: "くすりや = tiệm thuốc"
            },
            {
                sentence: "し___",
                blanks: ["ろ"],
                options: [["ら", "り", "る", "ろ"]],
                explanation: "しろ = màu trắng"
            },
            {
                sentence: "く___",
                blanks: ["ろ"],
                options: [["ろ", "り", "れ", "る"]],
                explanation: "くろ = màu đen"
            },
            {
                sentence: "ひ___",
                blanks: ["る"],
                options: [["ら", "る", "り", "れ"]],
                explanation: "ひる = buổi trưa"
            },
            {
                sentence: "よ___",
                blanks: ["る"],
                options: [["れ", "り", "る", "ろ"]],
                explanation: "よる = buổi tối"
            },
            {
                sentence: "は___",
                blanks: ["れ"],
                options: [["ら", "れ", "り", "る"]],
                explanation: "はれ = trời nắng"
            },
            {
                sentence: "か___",
                blanks: ["わ"],
                options: [["を", "わ", "ん", "ね"]],
                explanation: "かわ = con sông"
            },
            {
                sentence: "も___",
                blanks: ["も"],
                options: [["ま", "も", "む", "め"]],
                explanation: "もも = Quả đào"
            },
            {
                sentence: "あ___",
                blanks: ["め"],
                options: [["む", "ま", "め", "も"]],
                explanation: "あめ = Mưa"
            },
            {
                sentence: "や___",
                blanks: ["ま"],
                options: [["ま", "み", "む", "め"]],
                explanation: "やま = Ngọn núi"
            },
            {
                sentence: "ゆ___",
                blanks: ["き"],
                options: [["け", "き", "く", "か"]],
                explanation: "ゆき = Tuyết"
            },
            {
                sentence: "ゆ___",
                blanks: ["め"],
                options: [["ま", "め", "み", "も"]],
                explanation: "ゆめ = Giấc mơ"
            },
            {
                sentence: "へ___",
                blanks: ["や"],
                options: [["ゆ", "よ", "や", "ら"]],
                explanation: "へや = Căn phòng"
            },
            {
                sentence: "や___み",
                blanks: ["す"],
                options: [["さ", "し", "す", "せ"]],
                explanation: "やすみ = Nghỉ ngơi"
            },
            {
                sentence: "わ___し",
                blanks: ["た"],
                options: [["て", "た", "つ", "と"]],
                explanation: "わたし = tôi"
            },
            {
                sentence: "に___ん",
                blanks: ["ほ"],
                options: [["は", "ほ", "ひ", "へ"]],
                explanation: "にほん = Nhật Bản"
            }
        ],
        sentenceOrder: [
            {
                words: ["い", "す", "か"],
                correct: [1, 0, 2],
                correctSentence: "すいか",
                explanation: "すいか = Dưa hấu"
            },
            {
                words: ["か", "お", "し"],
                correct: [1, 0, 2],
                correctSentence: "おかし",
                explanation: "おかし = Bánh kẹo"
            },
            {
                words: ["か", "せ", "い"],
                correct: [1, 0, 2],
                correctSentence: "せかい",
                explanation: "せかい = Thế giới"
            },
            {
                words: ["く", "え", "つ"],
                correct: [2, 0, 1],
                correctSentence: "つくえ",
                explanation: "つくえ = cái bàn"
            },
            {
                words: ["い", "た", "こ"],
                correct: [1, 0, 2],
                correctSentence: "たいこ",
                explanation: "たいこ = Cái trống"
            },
            {
                words: ["す", "や", "く", "り"],
                correct: [2, 0, 3, 1],
                correctSentence: "くすりや",
                explanation: "くすりや = tiệm thuốc"
            },
            {
                words: ["す", "や", "み"],
                correct: [1, 0, 2],
                correctSentence: "やすみ",
                explanation: "やすみ = Nghỉ ngơi"
            },
            {
                words: ["た", "わ", "し"],
                correct: [1, 0, 2],
                correctSentence: "わたし",
                explanation: "わたし = tôi"
            },
            {
                words: ["ほ", "に", "ん"],
                correct: [1, 0, 2],
                correctSentence: "にほん",
                explanation: "にほん = Nhật Bản"
            }
        ]
    },
    test2: {
        name: 'Bài test 2 - Ngày 26-10-2025',
        multipleChoice: [
            { question: "Chọn nghĩa đúng của từ 'hoa anh đào'", options: ["さくら", "あり", "しろ", "くろ"], correct: 0, explanation: "さくら nghĩa là hoa anh đào" },
            { question: "Chọn nghĩa đúng của từ 'con kiến'", options: ["さる", "あり", "かわ", "ひる"], correct: 1, explanation: "あり nghĩa là con kiến" },
            { question: "Chọn nghĩa đúng của từ 'con khỉ'", options: ["かれ", "さる", "にほん", "やおや"], correct: 1, explanation: "さる nghĩa là con khỉ" },
            { question: "Chọn nghĩa đúng của từ 'bạn trai'", options: ["わたし", "くすりや", "かれ", "はれ"], correct: 2, explanation: "かれ nghĩa là bạn trai" },
            { question: "Chọn nghĩa đúng của từ 'buổi trưa'", options: ["ひる", "らん", "にほん", "しろ"], correct: 0, explanation: "ひる nghĩa là buổi trưa" },
            { question: "Chọn nghĩa đúng của từ 'tiệm thuốc'", options: ["やおや", "かわ", "くすりや", "かんたん"], correct: 2, explanation: "くすりや nghĩa là tiệm thuốc" },
            { question: "Chọn nghĩa đúng của từ 'màu trắng'", options: ["くろ", "しろ", "さくら", "ひる"], correct: 1, explanation: "しろ nghĩa là màu trắng" },
            { question: "Chọn nghĩa đúng của từ 'màu đen'", options: ["くろ", "あり", "はれ", "かわ"], correct: 0, explanation: "くろ nghĩa là màu đen" },

        ],
        matching: [
            {
                left: ["Ohayougozaimasu", "Konnichiwa", "Konbanwa", "Hajimemashite", "Onegaishimasu", "Oyasuminasai", "Sayonara", "Arigato gozaimasu", "Dooitashimashite", "Sumimasen", "Mou ichido onegai shimasu"],
                right: ["Xin lỗi", "Chào buổi chiều", "Tạm biệt", "Chúc ngủ ngon", "Vui lòng nói lại lần nữa", "Cảm ơn", "Chào buổi sáng", "Không có chi", "Rất vui được gặp bạn", "Chào buổi tối", "Vui lòng giúp đỡ"],
                correctPairs: [[0, 6], [1, 1], [2, 9], [3, 8], [4, 10], [5, 3], [6, 2], [7, 5], [8, 7], [9, 0], [10, 4]],
                explanation: "Ohayougozaimasu = Chào buổi sáng, Konnichiwa = Chào buổi chiều, Konbanwa = Chào buổi tối, Hajimemashite = Rất vui được gặp bạn, Onegaishimasu = Vui lòng giúp đỡ, Oyasuminasai = Chúc ngủ ngon, Sayonara = Tạm biệt, Arigato gozaimasu = Cảm ơn, Dooitashimashite = Không có chi, Sumimasen = Xin lỗi, Mou ichido onegai shimasu = Vui lòng nói lại lần nữa"
            }
        ],
        wordConnect: [
                { word: "かんたん", options: ["con sông", "đơn giản", "nắng", "hoa lan"], correct: 1, explanation: "かんたん là đơn giản" },
                { word: "かわ", options: ["con sông", "tôi", "tiệm rau", "Nhật Bản"], correct: 0, explanation: "かわ là con sông" },
                { word: "わたし", options: ["nắng", "đơn giản", "tôi", "hoa lan"], correct: 2, explanation: "わたし là tôi" },
                { word: "やおや", options: ["con sông", "Nhật Bản", "đơn giản", "tiệm rau"], correct: 3, explanation: "やおや là tiệm rau" },
                { word: "にほん", options: ["Nhật Bản", "nắng", "tôi", "con sông"], correct: 0, explanation: "にほん là Nhật Bản" },
                { word: "はれ", options: ["hoa lan", "tiệm rau", "nắng", "đơn giản"], correct: 2, explanation: "はれ là nắng" },
                { word: "らん", options: ["tôi", "con sông", "Nhật Bản", "hoa lan"], correct: 3, explanation: "らん là hoa lan" }
        ],
        fillBlank: [
            { sentence: "わたし___ ___です", blanks: ["は", "がくせい"], options: [["は", "を", "が", "に"], ["せんせい", "がくせい", "いしゃ", "かいしゃいん"]], explanation: "わたしは がくせいです = Tôi là học sinh" },
            { sentence: "これ___ ___です", blanks: ["は", "ほん"], options: [["は", "を", "が", "の"], ["ほん", "ペン", "ノート", "つくえ"]], explanation: "これは ほんです = Đây là sách" }
        ],
        sentenceOrder: [
            { words: ["です", "がくせい", "は", "わたし"], correct: [3, 2, 1, 0], correctSentence: "わたし は がくせい です", explanation: "わたし は がくせい です (Tôi là học sinh)" }
        ],
        typing: [
            { question: "Hoa anh đào", placeholder: "Nhập từ vựng có nghĩa Hoa anh đào", correct: "さくら", hint: "さ + く + ら", explanation: "さくら là Hoa anh đào" },
            { question: "Con kiến", placeholder: "Nhập từ vựng có nghĩa Con kiến", correct: "あり", hint: "あ + り", explanation: "あり là Con kiến" },
            { question: "Con khỉ", placeholder: "Nhập từ vựng có nghĩa Con khỉ", correct: "さる", hint: "さ + る", explanation: "さる là Con khỉ" },
            { question: "Bạn trai", placeholder: "Nhập từ vựng có nghĩa Bạn trai", correct: "かれ", hint: "か + れ", explanation: "かれ là Bạn trai" },
            { question: "Buổi trưa", placeholder: "Nhập từ vựng có nghĩa Buổi trưa", correct: "ひる", hint: "ひ + る", explanation: "ひる là Buổi trưa" },
            { question: "Tiệm thuốc", placeholder: "Nhập từ vựng có nghĩa Tiệm thuốc", correct: "くすりや", hint: "く + す + り + や", explanation: "くすりや là Tiệm thuốc" },
            { question: "Màu trắng", placeholder: "Nhập từ vựng có nghĩa Màu trắng", correct: "しろ", hint: "し + ろ", explanation: "しろ là Màu trắng" },
            { question: "Màu đen", placeholder: "Nhập từ vựng có nghĩa Màu đen", correct: "くろ", hint: "く + ろ", explanation: "くろ là Màu đen" },
            { question: "Đơn giản", placeholder: "Nhập từ vựng có nghĩa Đơn giản", correct: "かんたん", hint: "か + ん + た + ん", explanation: "かんたん là Đơn giản" },
            { question: "Con sông", placeholder: "Nhập từ vựng có nghĩa Con sông", correct: "かわ", hint: "か + わ", explanation: "かわ là Con sông" },
            { question: "Tôi", placeholder: "Nhập từ vựng có nghĩa Tôi", correct: "わたし", hint: "わ + た + し", explanation: "わたし là Tôi" },
            { question: "Tiệm rau", placeholder: "Nhập từ vựng có nghĩa Tiệm rau", correct: "やおや", hint: "や + お + や", explanation: "やおや là Tiệm rau" },
            { question: "Nhật Bản", placeholder: "Nhập từ vựng có nghĩa Nhật Bản", correct: "にほん", hint: "に + ほ + ん", explanation: "にほん là Nhật Bản" },
            { question: "Nắng", placeholder: "Nhập từ vựng có nghĩa Nắng", correct: "はれ", hint: "は + れ", explanation: "はれ là Nắng" },
            { question: "Hoa lan", placeholder: "Nhập từ vựng có nghĩa Hoa lan", correct: "らん", hint: "ら + ん", explanation: "らん là Hoa lan" }
        ]
    },
    test1: {
        name: 'Bài test 1 - Ngày 19-10-2025',
        multipleChoice: [
            { question: "Chọn từ đúng cho từ con đường:", options: ["みち", "いぬ", "とり", "さかな"], correct: 0, explanation: "みち　nghĩa là con đường " },
            { question: "Chọn nghĩa đúng của đường phố/con phố:", options: ["ほし", "まち", "もも", "て"], correct: 1, explanation: "まち nghĩa là đường phố/con phố" },
            { question: "Chọn từ đúng cho từ cái tai:", options: ["みち", "ねこ", "とり", "みみ"], correct: 3, explanation: "みみ　nghĩa là cái tai " },
            { question: "Chọn từ đúng cho từ côn trùng:", options: ["やま", "むし", "あめ", "さかな"], correct: 1, explanation: "むし　nghĩa là côn trùng " },
            { question: "Chọn từ đúng cho từ con mắt:", options: ["みち", "ねこ", "とり", "め"], correct: 3, explanation: "め　nghĩa là con mắt " }
        ],
        matching: [{ left: ["へや", "あめ", "やま", "ゆき", "ゆめ"], right: ["Giấc mơ", "Mưa", "Căn phòng", "Ngọn núi", "Tuyết" ], correctPairs: [[0, 2], [1, 1], [2, 3], [3, 4], [4, 0]],
            explanation: "へや = Căn phòng, あめ = Mưa, やま = Ngọn núi, ゆき = Tuyết, ゆめ = Giấc mơ" }],
        fillBlank: [
            { sentence: "わたし___ ___です", blanks: ["は", "がくせい"], options: [["は", "を", "が", "に"], ["せんせい", "がくせい", "いしゃ", "かいしゃいん"]], explanation: "わたしは がくせいです = Tôi là học sinh" },
            { sentence: "これ___ ___です", blanks: ["は", "ほん"], options: [["は", "を", "が", "の"], ["ほん", "ペン", "ノート", "つくえ"]], explanation: "これは ほんです = Đây là sách" }
        ],
        wordConnect: [
            { word: "もも", options: ["🌙", "🌇", "⭐", "🍑"], correct: 3, explanation: "もも là quả đào" },
            { word: "やすみ", options: ["⛵", "👤", "😴", "🌸"], correct: 2, explanation: "やすみ là nghỉ ngơi" }
        ],
        sentenceOrder: [
            { words: ["です", "がくせい", "は", "わたし"], correct: [3, 2, 1, 0], correctSentence: "わたし は がくせい です", explanation: "わたし は がくせい です (Tôi là học sinh)" }
        ],
        typing: [
            { question: "Con đường", placeholder: "Nhập từ vựng", correct: "みち", hint: "も + も", explanation: "みち là Con đường" },
            { question: "Con phố", placeholder: "Nhập từ vựng", correct: "まち", hint: "ね + こ", explanation: "まち là Con phố" },
            { question: "Cái tai", placeholder: "Nhập từ vựng", correct: "みみ", hint: "も + も", explanation: "みみ là Cái tai" },
            { question: "Côn trùng", placeholder: "Nhập từ vựng", correct: "むし", hint: "も + も", explanation: "むし là Côn trùng" },
            { question: "Con mắt", placeholder: "Nhập từ vựng", correct: "め", hint: "も + も", explanation: "め là Con mắt" },
            { question: "Quả đào", placeholder: "Nhập từ vựng", correct: "もも", hint: "も + も", explanation: "もも là Quả đào" },
            { question: "Mưa", placeholder: "Nhập từ vựng", correct: "あめ", hint: "も + も", explanation: "あめ là Mưa" },
            { question: "Ngọn núi", placeholder: "Nhập từ vựng", correct: "やま", hint: "も + も", explanation: "やま là Ngọn núi" },
            { question: "Tuyết", placeholder: "Nhập từ vựng", correct: "ゆき", hint: "も + も", explanation: "ゆき là Tuyết" },
            { question: "Giấc mơ", placeholder: "Nhập từ vựng", correct: "ゆめ", hint: "も + も", explanation: "ゆめ là Giấc mơ" },
            { question: "Căn phòng", placeholder: "Nhập từ vựng", correct: "へや", hint: "も + も", explanation: "へや là Căn phòng" },
            { question: "Nghỉ ngơi", placeholder: "Nhập từ vựng", correct: "やすみ", hint: "も + も", explanation: "やすみ là Nghỉ ngơi" },
        ]
    }
};