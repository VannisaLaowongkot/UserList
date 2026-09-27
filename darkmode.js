const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(
popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl)
);
const buttons = document.querySelectorAll("[data-bs-theme-value]");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.getAttribute("data-bs-theme-value");
    document.querySelector("html").setAttribute("data-bs-theme", theme);