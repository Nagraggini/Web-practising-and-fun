/*Ez a JavaScript kód dinamikusan frissíti egy HTML oldalon az aktuális évet egy elemben,
         jellemzően lábjegyzetekben vagy copyright szövegekben, így nem kell kézzel módosítani minden év elején.*/
function setYear() {
    console.log("Beállítjuk az évszámot.");
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

window.addEventListener("load", setYear);

fetch("./components/footer-component.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
        console.log("Betöltött a footer");
    });
