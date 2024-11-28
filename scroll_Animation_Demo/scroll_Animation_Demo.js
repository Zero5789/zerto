const targetElement = document.querySelectorAll(".animetionTarget");
document.addEventListener("scroll", () => {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
});