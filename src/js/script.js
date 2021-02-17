import { doc } from "./variables";

const closeWindow = (event) => {};

const handleClick = (event) => {
    const target = event.target;
    const src = target.getAttribute("src");
    const bg = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "❌";
};

const init = () => {
    doc.items.forEach((item) => item.addEventListener("click", handleClick));
};

if (doc.container) {
    init();
}
