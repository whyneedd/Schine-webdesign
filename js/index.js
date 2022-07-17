const humb = document.querySelector(".humbger");
const humbM = document.querySelector(".humbger__menu");

humb.onclick = function() {
    humb.classList.toggle("activeH");
    humbM.classList.toggle("activeH");
}