import loadhome from "./home";
import loadmenu from "./menu";
import loadcontact from "./contact";

loadhome();

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

const buttons = document.querySelectorAll("button");

buttons.forEach(b => {
    b.addEventListener("click", () => {
        clearContent();
        if (b.id === "home-btn") {
            loadhome();
        } else if (b.id === "menu-btn") {
            loadmenu();
        } else {
            loadcontact();
        }
    })
})