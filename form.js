let show = document.querySelector("#show");
let form = document.querySelector("form")

show.addEventListener("click", () => {
    form.style.display = "flex";
    show.style.display = "none";
})