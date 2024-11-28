const PasswordInput = document.getElementById("Password");
const form = document.getElementById("myForm");

form.addEventListener("click" , function(event){
    const password = PasswordInput.value;
    
    if (password.length < 8){
        PasswordInput.setCustomValidity("8文字以上でお願いします")
    }
    else if (!/[A-Z]/.test(password)){
        PasswordInput.setCustomValidity("パスわーdには大文字が必要です")
    }
    else if (!/[0-9]/.test(password)){
        PasswordInput.setCustomValidity("パスワードには数字が必要です")
    }
    else {
        PasswordInput.setCustomValidity("")
    }

    if(!form.checkVisibility()){
        event.preventDefault();
        alert("フォームにエラーがあります");
    }
}
);

const tabs = document.querySelectorAll(".tabs li a");
const contens = document.querySelectorAll(".contens li");


for(i =0; i < tabs.length; i++){
tabs[i].addEventListener("click" ,function(e){
    e.preventDefault();
    for(let j = 0; j < contens.length; j++) {
        contens[j].classList.remove("active");
        tabs[j].classList.remove("active");
    }
    contens[i].classList.add("active");
    tabs[i].classList.add("active");
})
};