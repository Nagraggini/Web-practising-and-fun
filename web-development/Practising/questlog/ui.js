// Az export kulcsszóval publikussá tesszük.
export class UI {
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

    displayQuestList() {
        //Adatok kinyerése a localStorage-ból.
        const ourStorage = window.localStorage; //Visszaolvasás, vagy üres tömböt kapunk.
        console.log(ourStorage);

        // Visszaalakítjuk tömbbé (ha létezik az adat).
        if (ourStorage) {
            //Kitötöljük a régi adatokat, hogy ne duplikálódjanak.
            const tbody = document.querySelector(".quest-list tbody");
            tbody.innerHTML = "";
            console.log("A tömb hossza:" + ourStorage.length);

            // 1. Kiszedjük az értékeket és végigmennyünk rajtuk
            Object.values(ourStorage).forEach((item) => {
                //Ebben a forEachben az AI segített bevallom a tbody sorig. :)
                // 2. Mivel a "length" és a név is benne van a Storage-ben, azt ki kell szűrni.
                if (typeof item === "string" || item.getItem !== "name") {
                    // 3. A szöveget (string) valódi tömbbé alakítjuk
                    const dataArray = JSON.parse(item);

                    // Most már hozzáférsz az adatokhoz index alapján:
                    const idOld = dataArray[0];
                    const checkboxOld = dataArray[1];
                    const descriptionOld = dataArray[2];
                    const dateOld = dataArray[3];
                    const priorityOld = dataArray[4];

                    // Osztálynév meghatározása a select értéke alapján
                    let pClass = "";
                    if (priorityOld === "Low") pClass = "low";
                    else if (priorityOld === "Normal") pClass = "normal";
                    else if (priorityOld === "High") pClass = "high";

                    //Új sor beszúrása a táblázatba.

                    const ujSor = document.createElement("tr");
                    ujSor.id = idOld; //Egyedi id.
                    // TODO amelyik checkbox checked az legyen áthúzva és bepipálva.

                    //A tr-nek van egyedi id-ja.
                    ujSor.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${descriptionOld}</td>
            <td>${dateOld}</td>            
            <td class="${pClass}">${priorityOld}</td>`; // Itt adjuk át a class-t, ami kell a színkódhoz.

                    //Hozzáadjuk a táblázathoz.
                    tbody.appendChild(ujSor);

                    //id-ra hivatkozunk.
                    document.getElementById("questForm").reset();
                }
            });
        } else {
            console.log("Nincs egy feladat sem a localStorage-ban.");
            createFirstQuest(); //Mintát generálunk.
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
