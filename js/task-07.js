const controlFont = document.getElementById("font-size-control");

const text = document.getElementById("text");

text.style.fontSize = `${controlFont.value}px`;

controlFont.addEventListener('input', onInputChange);

function onInputChange() {
    const fontSize = Number(controlFont.value);
    text.style.fontSize = `${fontSize}px`
};
