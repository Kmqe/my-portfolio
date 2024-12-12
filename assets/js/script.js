let skillPers = document.querySelectorAll(".skill-per");
console.log(skillPers)

skillPers.forEach(skill => {
    skill.style.width = skill.dataset.skill + "%";
})

const textArea = document.querySelector("textarea").value = "";
textArea()
