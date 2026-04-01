// Az export kulcsszóval publikussá tesszük.
export class Test {
    //Teszt adatok generálása.
    newTestQuest() {
        //13 karakteres szám.
        let id = Math.floor(Math.random() * 9000000000000) + 1000000000000;

        //Random true vagy false.

        let check = {
            id: Date.now(),
            check: ["true", "false"][Math.floor(Math.random() * 2)],
        };

        let checkbox = check.check;
        //Random szöveg.
        let descriptionInput = crypto.randomUUID();

        //Random dátum.
        let d = new Date(
            +new Date(2024, 0, 1) +
                Math.random() *
                    (+new Date(2026, 11, 31) - +new Date(2024, 0, 1)),
        );
        let dateInput = `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}`;

        //Random priority.
        let task = {
            id: Date.now(),
            priority: ["Low", "Normal", "High"][Math.floor(Math.random() * 3)],
        };

        let priorityInput = task.priority;

        let list = [id, checkbox, descriptionInput, dateInput, priorityInput];

        localStorage.setItem(id, JSON.stringify(list));
        console.log("A lista hossza: " + list.length);
        console.log(list.toString()); //62120516,[object HTMLInputElement],,,
    }
}
