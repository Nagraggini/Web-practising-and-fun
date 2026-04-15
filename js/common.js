/*Ez az a fájl, amit minden HTML oldalad behív. Ez mondja meg, hogy az adott oldalon mi történjen.*/
console.log("common.js eleje");
// UI Komponensek logikája
import "./components/firework-ui.js";

import "./components/loader.js";
import "./components/model.js";

console.log("common.js vége");

//Mobilos navigációs bár mutatása és elrejtése.
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

//Footerben lévő évszám beállítása.
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
