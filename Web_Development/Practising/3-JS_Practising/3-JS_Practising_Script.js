//Explicit érték adás.
var a;
a = 1;

//Implicit érték adás.
var b = 2;
alert(a + b);

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
  alert("Majdnem nagykorú.");
} else if (ageOfGyula < 18) {
  alert("Gyula még kiskorú.");
} else {
  alert("Gyula már nagykorú.");
}

//Switch szerkezet
var r = "Rudi4";
switch (r) {
  case "Rudi":
    alert("Rudi egy kutya.");
    break;
  case "Mici":
    alert("Mici egy macska.");
    break;
  default:
    alert("Nem kutya, sem macska.");
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

    alert("Majdnem nagykorú.");
    break;
  case ageOfGyula > 18:
    alert("Gyula már nagykorú.");
    break;
  default:
    alert("Gyula még kiskorú.");
}

//Tömbök
var fruits = ["grape", "apple", "banana"];
fruits.sort(); //rendezés

alert(fruits[0]); //első elem kiíratása

//Primitívek, referenciák, objektumok
var lista1 = ["alma", "körte", "makszem"];
var lista2 = ["alma", "körte", "makszem"];

//Objektumok=Összetett adattípusok, nem egyszerű számok, vagy szövegek.

alert(lista1 == lista2); //false, mert két különböző objektumra mutatnak, különböző helyen vannak tárolva a memóriában
alert(lista1 === lista2); //false, mert két különböző objektumra mutatnak, különböző helyen vannak tárolva a memóriában
