const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.className = "flex-ctr"

function changeHeader(text) {
    mainE1.append(document.createElement('h1'));
    mainE1.removeChild(mainE1.firstChild);
    mainE1.lastChild.textContent = text;
}

changeHeader("DOM Manipulation");
