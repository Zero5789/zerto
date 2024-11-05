const question ="ゲーム市場、最も売れたゲーム機はどれですか";
const answers =[
    "スーパーファミコン", 
    "プレイステーション2", 
    "ニンテンドースイッチ", 
    "ニンテンドーDS"
];
const correct ="ニンテンドーDS";
const $button =document.getElementsByTagName("button");
const setupQuiz = () => {
    document.getElementById("js-question").textContent =question;
    let buttonIndex =0;
    let buttonLength = document.getElementsByTagName("button").length;
    while(buttonIndex < buttonLength) {
       document.getElementsByTagName("button")[buttonIndex].textContent = answers[buttonIndex];
       buttonIndex++;
    }
}

setupQuiz ();

const clicklerIndex = (e) => {
    if(correct ===e.target.textContent) {
        window.alert("正解");
    }
    else {
        window.alert("不正解");
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
