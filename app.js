const question ="ゲーム市場、最も売れたゲーム機はどれですか";
const answers =[
    "スーパーファミコン", 
    "プレイステーション2", 
    "ニンテンドースイッチ", 
    "ニンテンドーDS"
];
const correct ="ニンテンドーDS";

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

//ボタンをクリックしたら正誤判定
document.getElementsByTagName("button")[0].addEventListener("click", () => {
    if(correct === document.getElementsByTagName("button")[0].textContent) {
        window.alert("正解");
    }
    else {
        window.alert("不正解");
    }
})
document.getElementsByTagName("button")[1].addEventListener("click", () => {
    if(correct === document.getElementsByTagName("button")[1].textContent) {
        window.alert("正解");
    }
    else {
        window.alert("不正解");
    }
})
document.getElementsByTagName("button")[2].addEventListener("click", () => {
    if(correct === document.getElementsByTagName("button")[2].textContent) {
        window.alert("正解");
    }
    else {
        window.alert("不正解");
    }
})
document.getElementsByTagName("button")[3].addEventListener("click", () => {
    if(correct === document.getElementsByTagName("button")[3].textContent) {
        window.alert("正解");
    }
    else {
        window.alert("不正解");
    }
})