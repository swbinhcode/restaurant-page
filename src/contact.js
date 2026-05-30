export default function loadcontact(){
      const content = document.getElementById("content");

    const heading = document.createElement("h2");
    heading.textContent = "Contact";

    const phone = document.createElement("p");
    phone.textContent = "0123456789";

    content.append(heading, phone);
}