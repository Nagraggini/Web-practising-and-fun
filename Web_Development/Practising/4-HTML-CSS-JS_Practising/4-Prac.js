document.addEventListener("DOMContentLoaded", () => {
    // 1. Gomb lekérése
    const gomb = document.querySelector("#gomb");
    console.log("A gomb szövege: " + gomb.innerText);

    // 2. Gomb színének változtatása click eseményre
    gomb.addEventListener("click", (event) => {
        console.log(event.target.innerText);
        event.target.style.backgroundColor = "blue";
    });

    // 3. Színválasztó input
    const kivalasztottSzinInput = document.getElementById("kivalasztottSzin");
    const szinMutatasa = document.getElementById("szinMutatasaLabel");

    // 4. Színváltozás figyelése
    kivalasztottSzinInput.addEventListener("input", (e) => {
        const hexColor = e.target.value;
        console.log("Most kiválasztott szín:", hexColor);
        szinMutatasa.textContent = `Kiválasztott szín hex kódja: ${hexColor}`;
    });

    // 5. Kézi alapértelmezett érték beállítása
    kivalasztottSzinInput.value = "#448e88"; // lila
    //szinMutatasa.textContent = `Kiválasztott szín hex kódja: ${kivalasztottSzinInput.value}`;
});
