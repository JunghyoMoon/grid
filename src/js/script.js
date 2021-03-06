import { doc } from "./variables";

const closeWindow = (event) => {
    const btn = event.target;
    const window = btn.parentNode;
    const body = window.parentNode;
    doc.body.removeChild(window);
};

const handleClick = (event) => {
    const target = event.target;
    const src = target.getAttribute("src");
    const bg = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "❌";
    closeBtn.addEventListener("click", closeWindow);
    bg.appendChild(img);
    bg.appendChild(closeBtn);
    bg.classList.add("modal");
    doc.body.appendChild(bg);
};

const init = () => {
    doc.items.forEach((item) => item.addEventListener("click", handleClick));
};

if (doc.container) {
    init();
}
