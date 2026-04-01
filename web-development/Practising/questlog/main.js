"use strict";

//Név lekérésése.
ui.setName();

// Lista lekérése
ui.displayQuestList();

let nameInput = document.querySelector(".name");

/*Név beállítása-*/
document.querySelector(".nameSubmit").addEventListener("click", (event) => {
    // Ez a titkos fegyver: megakadályozza az oldal frissítését.
    event.preventDefault();

    // Kiolvassuk az értéket az input mezőből.
    let name = nameInput.value;
    console.log(name);
    ui.newNameDisplayClear();
    if (name) {
        //Template Literal
        document.querySelector(".welcome").textContent = `Hello ${name}!`;

        //Mentés
        localStorage.setItem("name", name);
    }
});

//Beállítjuk, hogy csak jövőbeli dátumot lehessen megadni.
// 1. Lekérjük a mai dátumot ISO formátumban (YYYY-MM-DD)
const today = new Date().toISOString().split("T")[0];

// 2. Beállítjuk a 'min' attribútumot a HTML elemünkön.
document.getElementById("quest-date").setAttribute("min", today);

document.querySelector(".questSubmit").addEventListener("click", (e) => {
    //localStorage mentéshez kellenek.
    let checkbox;
    let id;
    // Ez a titkos fegyver: megakadályozza az oldal frissítését.
    e.preventDefault();
    checkbox = document.createElement("input").checked; //false
    let descriptionInput = document.querySelector(".description").value;
    let dateInput = new Intl.DateTimeFormat("hu-HU").format(
        new Date(document.querySelector(".date").value),
    );
    let priorityInput = document.querySelector(".priority").value;

    //Leellenőrizzük, hogy tuti nem üresek.
    if (descriptionInput && dateInput && priorityInput) {
        // Osztálynév meghatározása a select értéke alapján
        let pClass = "";
        if (priorityInput === "Low") pClass = "low";
        else if (priorityInput === "Normal") pClass = "normal";
        else if (priorityInput === "High") pClass = "high";

        //Új sor beszúrása a táblázatba.
        const tbody = document.querySelector("table tbody");
        const ujSor = document.createElement("tr");
        ujSor.id = Date.now(); //Egyedi id-t adunk a sornak.

        //A tr-nek van id-ja ami az adott task sorszáma.
        ujSor.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${descriptionInput}</td>
            <td>${dateInput}</td>            
            <td class="${pClass}">${priorityInput}</td>`; // Itt adjuk át a class-t, ami kell a színkódhoz.

        //Hozzáadjuk a táblázathoz.
        tbody.appendChild(ujSor);
        //id-ra hivatkozunk.
        document.getElementById("questForm").reset();

        //Mentés tömbben.
        let lista = [
            ujSor.id,
            checkbox,
            descriptionInput,
            dateInput,
            priorityInput,
        ];
        localStorage.setItem(ujSor.id, JSON.stringify(lista));
        console.log("A lista hossza: " + lista.length);
        console.log(lista.toString());
    }

    ui.newQuestDisplayClear();
});

//Egy soros utasításnál nem kell a függvény mögő tenni a zárójeleket, ha kiteszed, akkor az oldalbetültésekor egyből lefut.
document.querySelector(".deleteAllButton").addEventListener("click", () => {
    localStorage.clear();
    document.querySelector(".welcome").textContent = "Hello!";
    ui.newNameDisplayClear();
    ui.newQuestDisplayClear();
    ui.displayQuestList();
    nameInput.value = "";
    ui.displayFirework();
    console.log("History cleared!");
});

//Oda rakod a függvény mögé a ()-et akkor mindig lefut, ha elindítod az oldalt. De nem fut, amikor rányomsz a gombra.
document
    .querySelector(".randomQuestButton")
    .addEventListener("click", test.newTestQuest);

// TODO deleteButton gomb eseménykezelője.
// TODO doneButton eseménykezelője. -> design áthúzott legyen.
