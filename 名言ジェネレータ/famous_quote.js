const buttom =document.getElementById("buttom")
const form = document.getElementById("text");
const famous =["成功する秘訣は、成功するまで諦めないことだ。",
    "不可能を可能にする最初のステップは、それが可能だと信じることだ。」",
    "最も困難な時こそ、自分を信じる力が試される。",
    "大きな目標を設定することを恐れてはいけない。失敗から学び、再び挑戦すればいいだけだ。",
    "未来を予測する最良の方法は、それを創り出すことだ。"
];

buttom.addEventListener("click",function(e) {
    e.preventDefault();

    const random = Math.floor(Math.random()*famous.length);

    text.value = famous[random];
})