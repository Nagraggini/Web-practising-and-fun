'use strict';
/*
Strict mode segít:

hibákat korábban észrevenni
tisztább, biztonságosabb kódot írni
elkerülni rejtett bugokat
*/

/*
//A querySelector-al tudunk hozzáférni a DOM fához, amit a html-ben hoztunk létre. A tag-ek a node-ok.

//p class=message
console.log(document.querySelector(".message")); //<p class="message">Start guessing...</p>

//Balról jobbra dolgozza fel a sort az IDE, emiatt lefut az első rész a pont utána, aztán kicseréli a második részra a pont utánira.
console.log(document.querySelector(".message").textContent); //message">Start guessing...

document.querySelector(".message").textContent = "Correct Number!";

//Elem szövegét módosítjuk. pl.: div,p , span
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//Szám beállítása az input mezőben. ez lehet input, vagy textarea
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

/*
const x = function () {
  console.log(23);
};
*/

// Random szám generálás
//Minimum: 0 (előfordulhat)
//Maximum: 0.999999... (de 1 sosem lesz)
Math.random();

const secretNumber = Math.trunc(Math.random() * 20) + 1; // 1-20 közötti szám kreálása.
//A +1 azért kell, hogy lehessen 20 is az eredmény.
//Teszthez.
console.log((document.querySelector('.number').textContent = secretNumber));

//Eredmény módosításához.
const score = 20;

// <button class="btn check">Check!</button>
//A btn class-on belül a check gombot kérjük le.
document.querySelector('.check').addEventListener('click', function () {
  //lokális visszatérési érték nélküli függvény
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess && guess !== 0) {
    //Értéket és típust is ellenőrzünk ezzel: !==
    document.querySelector('.message').textContent = '🚫 No number!';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1-20!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎆 You are a winner!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else {
    document.querySelector('.message').textContent = 'Too low!';
  }
});
// TODO
//Udemy - The Complete JavaScript Course 2025 From Zero to Expert! (2025)/07. JavaScript in the Browser DOM and Events PROJECT
// 7. videó 11. perc

// TODO localStroge-ba mentsd el a high score-t.
