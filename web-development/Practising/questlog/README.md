Gamer/geek teendő lista

https://nagraggini.github.io/web-practising-and-fun/web-development/Practising/questlog/questlog.html

Az elején felugró ablakban bekéri a nevet és kiírja, hogy üd xy.

<!-- TODO -->
<!-- start-projects -> static-websites-ba rakd. -->

# localStorage

```javascript
//Mentés
localStorage.setItem("nev", "Andrea");

//Lekérés
const nev = localStorage.getItem("nev");
console.log(nev); // Andrea

//Törlés
localStorage.removeItem("nev");

//Összestörlése
localStorage.clear();

//Mentés tömbbel
const todos = ["tanulás", "edzés", "projekt"];
localStorage.setItem("todos", JSON.stringify(todos));

//Visszaolvaás
const todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);

