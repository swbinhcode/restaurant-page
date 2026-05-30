export default function loadhome() {
    const content = document.getElementById("content");

    const title = document.createElement("h2");
    title.textContent = "Welcome";

    const description = document.createElement("p");
    description.textContent = "Best restaurant in town!";

    content.append(title, description);
}