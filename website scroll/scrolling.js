"use strict";
{
    const $boxfixed = document.getElementById("box-fixed");
    window.addEventListener("scroll" , () => {
        if (window.scrollY > 100) {
            $boxfixed.classList.add("on");
        } else {
            $boxfixed.classList.remove("on");
        };
    });
};