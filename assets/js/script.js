let skillPers = document.querySelectorAll(".skill-per");
const spinner_overlay = document.getElementById("spinner_overlay");
const textArea = document.querySelector("textarea").value = "";
const toUp = document.getElementById("to_up");

window.addEventListener("scroll", () => {
    if(scrollY > 150){
        toUp.classList.add("show")
    }
    else {
        toUp.classList.remove("show")
    }
})

window.addEventListener("load" , () => {
    setTimeout(() => {
        spinner_overlay.classList.add("remove")
        spinner_overlay.style.opacity = 0;
    } , 300)
})

skillPers.forEach(skill => {
    skill.style.width = skill.dataset.skill + "%";
})

