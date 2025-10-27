//Explicit érték adás.
var a;
a = 1;

//Implicit érték adás.
var b = 2;
alert(a + b);

//Adattípusok:
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
