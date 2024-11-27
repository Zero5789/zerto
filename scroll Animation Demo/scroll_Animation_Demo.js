const targetElemnt = document.querySelectorAll(".animetionTarget");
document.addEventListener("scroll" , () => {
    for (let i = 0; i < targetElemnt.length; i++) {
        const getelementDistance = targetElemnt[i].
        getBoundingClientRect.top + targetElemnt[i].clientHeight*.6
        if(window.innerheight > getElementDistance) {
            targetElemnt[i].classList.add("show");
        }
    }
});