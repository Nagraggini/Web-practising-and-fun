"use strict";

//Név lekérésése.
let name = localStorage.getItem("name");
console.log(name);

if (name) {
    //Template Literal
    document.querySelector(".welcome").textContent = `Hello ${name}!`;
} else {
    document.querySelector(".welcome").textContent = "Hello!";
}

/*Ez a JavaScript kód dinamikusan frissíti egy HTML oldalon az aktuális évet egy elemben,
         jellemzően lábjegyzetekben vagy copyright szövegekben, így nem kell kézzel módosítani minden év elején.*/

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

function newNameDisplayClear() {
    document.querySelector(".name").value = "";
}

function newQuestDisplayClear() {
    document.querySelector(".description").value = "";
    document.querySelector(".date").value = "";
    document.querySelector(".priority").value = "";
}

let nameInput = document.querySelector(".name");

/*Név beállítása-*/
document.querySelector(".nameSubmit").addEventListener("click", (event) => {
    // Ez a titkos fegyver: megakadályozza az oldal frissítését.
    event.preventDefault();

    // Kiolvassuk az értéket az input mezőből.
    let name = nameInput.value;
    console.log(name);
    newNameDisplayClear();
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
    // Ez a titkos fegyver: megakadályozza az oldal frissítését.
    e.preventDefault();
    let descriptionInput = document.querySelector(".description").value;
    let dateInput = new Intl.DateTimeFormat("hu-HU").format(
        new Date(document.querySelector(".date").value),
    );
    let priorityInput = document.querySelector(".priority").value;

    console.log(descriptionInput + " ; " + dateInput + " ; " + priorityInput);
    // TODO le kéne menteni négy mezőt. A checkbox értékét is.

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
        ujSor.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${descriptionInput}</td>
            <td>${dateInput}</td>
            <td class="${pClass}">${priorityInput}</td>`; // Itt adjuk át a class-t, ami kell a színkódhoz.

        //Hozzáadjuk a táblázathoz.
        tbody.appendChild(ujSor);
        //id-ra hivatkozunk.
        document.getElementById("questForm").reset();
    }

    newQuestDisplayClear();
});

//Egy soros utasításnál nem kell a függvény mögő tenni a zárójeleket, ha kiteszed, akkor az oldalbetültésekor egyből lefut.
document.querySelector(".deleteAllButton").addEventListener("click", () => {
    localStorage.clear();
    document.querySelector(".welcome").textContent = "Hello!";
    newNameDisplayClear();
    newQuestDisplayClear();
    nameInput.value = "";
    displayFirework();
    console.log("History cleared!");
});

// Tűzijáték animáció
function displayFirework() {
    // Egyszerű tűzijáték animáció canvas-szal
    let firework = document.createElement("canvas");
    firework.id = "firework-canvas";
    firework.width = window.innerWidth;
    firework.height = window.innerHeight;
    firework.style.position = "fixed";
    firework.style.top = "0";
    firework.style.left = "0";
    firework.style.pointerEvents = "none";
    firework.style.zIndex = "10000";
    document.body.appendChild(firework);

    const ctx = firework.getContext("2d");
    let particles = [];

    function randomColor() {
        return `hsl(${Math.random() * 360}, 100%, 60%)`;
    }

    function createFirework(x, y) {
        // Több tűzijáték-pont, különböző helyekre és színekre
        for (let j = 0; j < 5; j++) {
            const centerX = x + Math.cos((2 * Math.PI * j) / 5) * 200;
            const centerY = y + Math.sin((2 * Math.PI * j) / 5) * 120;
            for (let i = 0; i < 30; i++) {
                const angle = (Math.PI * 2 * i) / 30;
                const speed = Math.random() * 4 + 2;
                particles.push({
                    x: centerX,
                    y: centerY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    alpha: 1,
                    color: randomColor(),
                });
            }
        }
    }

    createFirework(firework.width / 2, firework.height / 2);

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, firework.width, firework.height);
        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.04; // gravitáció
            p.alpha -= 0.012;
            ctx.globalAlpha = Math.max(p.alpha, 0);
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        particles = particles.filter((p) => p.alpha > 0);
        frame++;
        if (particles.length > 0 && frame < 120) {
            requestAnimationFrame(animate);
        } else {
            firework.remove();
        }
    }
    animate();
}
