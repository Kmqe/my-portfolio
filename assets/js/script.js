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


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeata
});


sr.reveal(`.contact`)
sr.reveal(`.home_left, .about_right`, {delay: 700, distance: "100px", origin: "left"});
sr.reveal(`.home_right, .about_left`, {delay: 700, distance: "100px", origin: "right"});
// sr.reveal(`.skill-wrrap`, {delay: 1400, distance: "100px", origin: "bottom", rotate: {z: -90}});
sr.reveal(`.skill-wrrap, .card-project`, {delay: 1000, interval: 100});
// sr.reveal(`.about__data, .recipe__list, .contact__data`, {origin: "right"});
// sr.reveal(`.about__img, .recipe__img, .contact__image`, {origin: "left"});
// sr.reveal(`.products__card`, {interval: 100});