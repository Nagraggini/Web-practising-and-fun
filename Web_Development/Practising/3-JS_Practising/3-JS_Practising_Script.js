alert("Itt írtam a kódot: https://jsfiddle.net/");

//Explicit érték adás.
var a;
a = 1;

//Implicit érték adás.
var b = 2;
//alert(a + b);

//Adattípusok(primitívek)
var c = 3; //number
var d = 3.5; //float

var a = "Hello"; // dupla idézőjel
var b = "Hello"; // szimpla idézőjel
//A backtick (`) speciális, mert enged változóbeillesztést és többsoros szöveget
let name = "Andrea";
var c = `Hello`; // backtick (templateliterál)

let message = `Hello, ${name}!`; // → "Hello, Andrea!"
var g = true; //boolean
var i = null; //null
var j; //undefined

//Ciklusok

//If szerkezet
var ageOfGyula = 17;

//== összehasonlító operátor
// felkiáltójel= nem egyenlő operátor
if (ageOfGyula == 17) {
  //alert("Majdnem nagykorú.");
} else if (ageOfGyula < 18) {
  //alert("Gyula még kiskorú.");
} else {
  //alert("Gyula már nagykorú.");
}

//Switch szerkezet
var r = "Rudi4";
switch (r) {
  case "Rudi":
    //alert("Rudi egy kutya.");
    break;
  case "Mici":
    // alert("Mici egy macska.");
    break;
  default:
  //alert("Nem kutya, sem macska.");
}

switch (ageOfGyula) {
  case ageOfGyula === 17:
    /*== (egyenlőség, laza összehasonlítás)
        Automatikus típusátalakítást végez.
        Ha a két érték nem ugyanaz a típus, JavaScript megpróbálja átkonvertálni őket, hogy össze tudja hasonlítani.
        Ezért néha váratlan eredményt ad.
        */

    /*=== (szigorú egyenlőség)
        Nem végez típusátalakítást.
        Csak akkor ad true-t, ha érték és adattípus is megegyezik.*/

    // alert("Majdnem nagykorú.");
    break;
  case ageOfGyula > 18:
    //alert("Gyula már nagykorú.");
    break;
  default:
  //alert("Gyula még kiskorú.");
}

//Tömbök
var fruits = ["grape", "apple", "banana"];
fruits.sort(); //rendezés

//alert(fruits[0]); //első elem kiíratásahttps://chatgpt.com/c/6905e808-76e8-832c-a6ef-512381bb5c41

//Primitívek, referenciák, objektumok
var lista1 = ["alma", "körte", "makszem"];
var lista2 = ["alma", "körte", "makszem"];

//Objektumok=Összetett adattípusok, nem egyszerű számok, vagy szövegek.

//alert(lista1 == lista2); //false, mert két különböző objektumra mutatnak, különböző helyen vannak tárolva a memóriában
//alert(lista1 === lista2); //false, mert két különböző objektumra mutatnak, különböző helyen vannak tárolva a memóriában

//Ciklusok
var a = 0;

while (a < 6) {
  alert("A értéke kisebb, mint 6, mert a=  " + a);
  a = a + 1;
}
alert("Kiléptünk a ciklusból, mert A értéke: " + a);

/*
1. feladat – Életkor ellenőrzés
*/
//A prompt stringet ad vissza, ezért Number()-ral számmá kell alakítani.
var age = Number(prompt("Kérlek, add meg az életkorodat:"));

if (age < 14) {
  alert("Gyerek");
} else if (age >= 14 && age <= 17) {
  alert("Tizenéves");
} else {
  alert("Felnőtt");
}

/*🍎 2. feladat – Gyümölcs kereső
Van egy tömb:
var fruits = ["alma", "körte", "banán", "narancs"];

A program:
Kérjen be egy gyümölcsnevet (prompt-tal).
Ha a megadott gyümölcs benne van a tömbben → alert("Van ilyen gyümölcs!")
Ha nincs benne → alert("Nincs ilyen gyümölcs!")

Használhatsz:
fruits.includes(keresettGyumolcs)*/

var fruits = ["alma", "körte", "banán", "narancs"];

var valasztottertek = prompt("Válasz egy gyümölcsöt:").toLowerCase();

if (fruits.includes(valasztottertek)) {
  alert("Van ilyen gyümölcs.");
} else {
  alert("Nincs ilyen gyümölcs.");
}

/*🔁 3. feladat – Számláló ciklus
Írj egy while ciklust, ami:
0-tól indul,
minden lépésben kiírja a számot (alert vagy console.log),
és 5-ig számol.
De ha a szám 3, akkor írja ki: "Ez a kedvenc számom!"
*/
var number = 0;

while (number <= 5) {
  alert(`A szám: ${number}`);

  /*=== (szigorú egyenlőség)
        Nem végez típusátalakítást.
        Csak akkor ad true-t, ha érték és adattípus is megegyezik.*/

  if (number === 3) {
    alert("Ez a kedvenc számom.");
  }
  number++;
}

