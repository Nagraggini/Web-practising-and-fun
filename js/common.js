/*Ez az a fájl, amit minden HTML oldalad behív. Ez mondja meg, hogy az adott oldalon mi történjen.*/
console.log("common.js eleje");
// UI Komponensek logikája
import "./components/firework-ui.js";
import "./components/footer-script.js";
import { initHeader } from "./components/header-script.js";
import "./components/loader.js";
import "./components/model.js";

// Meg kell hívni a függvényeket, hogy elinduljon a fetch!
initHeader();
// TODO footer javítás.
// initFooter();

console.log("Minden js modul sikeresen betöltve!");
