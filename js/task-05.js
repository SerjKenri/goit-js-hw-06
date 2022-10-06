const contentEl = {
    inputEl: document.getElementById("name-input"),
    outputEl: document.getElementById("name-output")
};
const {inputEl, outputEl} = contentEl;

inputEl.oninput = function () {
    return inputEl.value ? outputEl.innerHTML = inputEl.value : outputEl.textContent;
}
