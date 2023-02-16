const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removerClaseActive();
        panel.classList.add("active");
    });
});

const removerClaseActive = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}