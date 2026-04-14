/*Modern, moduláris szemlélet.
A kód függvénybe van zárva és modern async/await szintaxissal.*/

// Belső változó, nem látszik kívülről
const componentPath = "./components/header-component.html";

// Exportált függvény, amit más fájl (pl. common.js) meghívhat.
export async function initHeader() {
    try {
        const res = await fetch(componentPath);
        const data = await res.text();
        document.getElementById("main-header").innerHTML = data;
        console.log("Header kész!");
    } catch (err) {
        console.error("Hiba a header betöltésekor:", err);
    }
}

// Így az importálás pillanatában lefut.
//initHeader();

//TODO: töröld a js hívásokat a node.js megoldja.Kb ez az egész fájl mehet a kukába.
