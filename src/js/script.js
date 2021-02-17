import doc from "./variables";

const handleClick = () => {};

const init = () => {
    doc.items.forEach((item) => item.addEventListener("click", handleClick));
};

if (container) {
    init();
}
