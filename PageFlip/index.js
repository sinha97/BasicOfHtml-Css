const section1 = document.querySelector("section");
let clicked = false;
section1.addEventListener("click", (e) => {
    section1.classList.toggle("flip");
    if (!clicked) {
        clicked = true;
        document.getElementById("title").style.opacity = 0;
    }
});