// Belső változó, nem látszik kívülről
const componentPath = "/components/header-component.html";

// Exportált függvény, amit más fájl (pl. common.js) meghívhat
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

// Ha azt akarod, hogy az importálás pillanatában lefusson:
initHeader();
