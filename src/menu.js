export default function loadmenu() {
    const content = document.getElementById("content");

    const heading = document.createElement("h2");
    heading.textContent = "Menu";

    const item = document.createElement("p");
    item.textContent= "Pizza";

    content.append(heading, item);
}