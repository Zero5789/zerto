
const quiz = [
    {
         question :"ゲーム市場、最も売れたゲーム機はどれですか",
         answers :[
            "スーパーファミコン", 
            "プレイステーション2", 
            "ニンテンドースイッチ", 
            "ニンテンドーDS"
         ], 
         correct:"ニンテンドーDS"
    },
    {
        question :"糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
        answers :[
           "MOTHER2", 
           "スーパーマリオブラザーズ3", 
           "スーパードンキーコング", 
           "星のカービー"
        ], 
        correct:"MOTHER2"
   },
   {
        question :"ファイナルファンタジーⅣの主人公の名前は？",
        answers :[
           "フリオニール", 
           "クラウド", 
           "ティーダ", 
           "セシル"
        ], 
        correct:"セシル"
},
];

const quizLength =quiz.length;
let quizIndex = 0;
let score = 0;

const $button =document.getElementsByTagName("button");
const setupQuiz = () => {
    document.getElementById("js-question").textContent =quiz[quizIndex].question;
    let buttonIndex =0;
    let buttonLength = document.getElementsByTagName("button").length;
    while(buttonIndex < buttonLength) {
       document.getElementsByTagName("button")[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
       buttonIndex++;
    }
}

setupQuiz ();

const clicklerIndex = (e) => {
    if(quiz[quizIndex].correct ===e.target.textContent) {
        window.alert("正解");
        score++;
    }
    else {
        window.alert("不正解");
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        setupQuiz();
    }
    else{
        window.alert("終了 あなたの正解数は" + score + "/" + quizLength + "です。");
    }

};

let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < $button.length) {
    $button[handlerIndex].addEventListener("click" , (e) => {
        clicklerIndex(e);
    })
    handlerIndex++;
}
