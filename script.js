// DARK MODE
document.getElementById("themeToggle").onclick = () =>
    document.body.classList.toggle("dark");


// TYPING EFFECT
const text = "Aspiring ML Engineer | Web Developer";

let i = 0;

function typing(){
    if(i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}
typing();


// SCROLL ANIMATION
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    fades.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});