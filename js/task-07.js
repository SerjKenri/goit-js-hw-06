const controlFont = document.getElementById("font-size-control");

const text = document.getElementById("text");

controlFont.addEventListener('change', el => {
    text.style.fontSize = `${el.target.value}px`
});
