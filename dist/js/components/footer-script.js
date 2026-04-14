/*Modern, moduláris szemlélet.
A kód függvénybe van zárva és modern async/await szintaxissal.*/

// Belső változó, nem látszik kívülről
const componentPath = "./components/footer-component.html";

// Exportált függvény, amit más fájl (pl. common.js) meghívhat.
export async function initFooter() {
    try {
        const res = await fetch(componentPath);
        const data = await res.text();
        document.getElementById("main-footer").innerHTML = data;
        console.log("Footer kész!");
    } catch (err) {
        console.error("Hiba a footer betöltésekor:", err);
    }
}

// Így az importálás pillanatában lefut.
//initFooter();

/*Ez a JavaScript kód dinamikusan frissíti egy HTML oldalon az aktuális évet egy elemben,
         jellemzően lábjegyzetekben vagy copyright szövegekben, így nem kell kézzel módosítani minden év elején.*/
function setYear() {
    console.log("Beállítjuk az évszámot.");
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

//window.addEventListener("load", setYear);
//TODO: töröld a js hívásokat a node.js megoldja.Kb ez az egész fájl mehet a kukába.
