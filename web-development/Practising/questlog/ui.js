// Az export kulcsszóval publikussá tesszük.
export class UI {
    //Számít a függvények sorrendje!
    setName() {
        let name = localStorage.getItem("name");
        console.log(name);

        if (name) {
            //Template Literal
            document.querySelector(".welcome").textContent = `Hello ${name}!`;
        } else {
            document.querySelector(".welcome").textContent = "Hello!";
        }
    }

    /*Ez a JavaScript kód dinamikusan frissíti egy HTML oldalon az aktuális évet egy elemben,
         jellemzően lábjegyzetekben vagy copyright szövegekben, így nem kell kézzel módosítani minden év elején.*/
    setYear() {
        const yearEl = document.getElementById("year");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    newNameDisplayClear() {
        document.querySelector(".name").value = "";
    }

    newQuestDisplayClear() {
        document.querySelector(".description").value = "";
        document.querySelector(".date").value = "";
        document.querySelector(".priority").value = "";
    }
    createFirstQuest() {
        // TODO ez sose fut le.
        console.log("createFirstQuest()");
        //Táblázat kiürítése.
        const tbody = document.querySelector(".quest-list tbody");
        tbody.innerHTML = "";

        //Új sor beszúrása a táblázatba.
        const ujSor = document.createElement("tr");
        ujSor.id = 1774976649108; //Egyedi id.
        // TODO mindig a mai nap legyen a dátum.
        //A tr-nek van egyedi id-ja.
        ujSor.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>Check my mail box.</td>
            <td>2026. 04. 06</td>            
            <td class="high}">High</td>`; // Itt adjuk át a class-t, ami kell a színkódhoz.

        //Hozzáadjuk a táblázathoz.
        tbody.appendChild(ujSor);

        document.getElementById("questForm").reset();
    }

    setColorfulQuestList(ujSor, priorityOld) {
        console.log("setColorfulQuestList");
        switch (priorityOld) {
            case "high":
                ujSor.style.backgroundColor = "tomato";
                break;
            case "normal":
                ujSor.style.backgroundColor = "DodgerBlue";
                break;
            case "low":
                ujSor.style.backgroundColor = "lightgrey";
                break;
            default: //Hekkelésre felkészülve.
                ujSor.style.backgroundColor = "pink";
                break;
        }
    }

    displayQuestList() {
        console.log("displayQuestList()");
        //Kitöröljük a régi adatokat, hogy ne duplikálódjanak.
        const tableBody = document.querySelector(".quest-list tbody");
        tableBody.innerHTML = "";

        //Adatok kinyerése a localStorage-ból. A metódus egy részében az AI segített.
        const ourStorage = { ...localStorage };
        if (ourStorage) {
            // use for...in to iterate over the keys of ourStorage
            for (let key in ourStorage) {
                //forEach
                // Kihagyjuk a nevet, csak a küldetéseket listázzuk.
                if (key === "name") continue;

                const dataArray = JSON.parse(localStorage.getItem(key));

                const idOld = dataArray[0];
                //Alapból szövegként adja vissza.
                const checkboxOld =
                    dataArray[1] === true || dataArray[1] === "true";
                const descriptionOld = dataArray[2];
                const dateOld = dataArray[3];
                const priorityOld = dataArray[4];

                const ujSor = document.createElement("tr");

                this.setColorfulQuestList(ujSor, priorityOld);

                ujSor.id = idOld; //Ezzel, majd le tudjuk kérdezni, hogy melyik sort jelölte ki.
                // TODO nem is kell mert a css-ben állítjuk be a színt.
                /* let pClass = "";
                if (priorityOld === "High") {
                    pClass = "red";
                } else if (priorityOld === "Medium") {
                    pClass = "yellow";
                } else {
                    pClass = "green";
                }*/
                //Tartalom feltöltése.
                ujSor.innerHTML = `
            <td><input type="checkbox" ${checkboxOld ? "checked" : ""}></td>
            <td>${descriptionOld}</td>
            <td>${dateOld}</td>            
            <td >${priorityOld}</td>`; //class="${pClass}"

                // Stípus. Ha a küldetés kész (true), áthúzzuk a szöveget
                if (checkboxOld === true) {
                    console.log("checkboxOld === true)");
                    //Fontos a sorrend!
                    ujSor.style.textDecoration = "line-through"; // 1. Alap beállítása
                    ujSor.style.textDecorationColor = "rgba(3, 5, 8, 0.7)"; // 2. Szín módosítása
                    ujSor.style.textDecorationThickness = "3px"; // 3. Vastagság módosítása
                }

                tableBody.appendChild(ujSor);
            }
        } else {
            createFirstQuest();
        }
    }

    // Tűzijáték animáció (AI csinálta.)
    displayFirework() {
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
}
