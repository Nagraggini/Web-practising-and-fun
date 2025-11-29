//alert('Hello!');

/*
console.log('Hello');
console.error('Hiba van');
console.warn('Lehet hiba');
*/

// -- Változók

//let (Egy bizonyos scope, vagy blokkban tudod használni.)
//const, var (Nem használd!)

/*var: Változók újradeklarációja – Amikor a var változót használjuk, ugyanazt a változónevet többször is beírhatjuk a hatókörön belül, mivel az új változó felülírja az előzőt. Az újradeklaráció problémája – Tudtán kívül deklarálhatunk egy másik változót ugyanazzal a névvel, ami nem kívánt eredményt adhat.*/

let kor1 = 20;
kor1 = 21;

//console.log(kor1);

/*
const kor2=25;
kor2=26;
console.log(kor1); //Hibás, mert a const sohasem változik meg.
*/

// -- Adat típusok
//Primitívek:
const nev = "Zsolt"; //String
const kor3 = 21; //Number
const suly = 80.5; //Number
const felnott = true; //Boolean

//console.log(nev, kor3,suly,felnott);

//Objektumok:
const date = new Date(); //Mai dátum.
const date2 = new Date("2025-11-24");

/*console.log(date);
console.log(date2);
*/

const x = null; // Szándékosan „nincs értéke” — üresre állított változó.
const y = undefined; // Definiálva van, de nincs hozzárendelve konkrét érték.

/*
null → te adod meg, hogy nincs értéke.
undefined → alapértelmezett, ha egy változó létrejön, de nem kap értéket (pl. let z;).
*/

/*
console.log(x);
console.log(y);

console.log(typeof x); //Megadja a változó típusát.
*/

//Műveletek

/*
let szam1=10;
console.log(szam1+=10); //+= módosítja a változót
console.log(typeof szam1);
let eredmeny=szam1+=10;
szam1+='1';
console.log(typeof szam1);
console.log('szam1: '+szam1+'; eredmeny: '+eredmeny);
szam1++;
console.log(szam1);
console.log(typeof szam1);
*/

/*
let szoveg='Hello vilag';
console.log(szoveg+'!'); //ES5 (ECMAScript) Konkatenáció (összefűzés)

console.log(`${szoveg}!`); //Modernebb ES6. Ez a string interpoláció azt jelenti, hogy egy változó értékét közvetlenül beilleszted a szövegbe. JavaScriptben ezt template literal-lel (backtick) csináljuk.

console.log('Hello'+' '+ nev+'!'); 
console.log(`${szoveg} ${nev}!!!!`);

console.log('Hasznos string függvény (metódus) JavaScriptben:');
console.log(`Megmondja hány betűből áll a szöveg: ${szoveg.length}`);

console.log(`Kis betűkre módosítja a stringet: ${szoveg.toLowerCase()}`); //Összehasonlításoknál jó ezt használni.

console.log(`Ha, csak egy bizonyos része kell a szövegnek: ${szoveg.substring(1,5)}`);

console.log(`Szétvágja: ${szoveg.split('')}`);
console.log(szoveg.split(''));

*/

/*
let lista   ='alma,korte,banan';
console.log(lista.split(','));

console.log(date.getDate()); //Hanyadika.

console.log(date.getDay()); //A hét hanyadik napja.
console.log(date.getMonth()); //0-tól kezdi a számolást.

date.setHours(4);
date.setFullYear(2026);
console.log(date);
console.log(date.toISOString()); // Ki írja ISO formátumban a dátumot.
*/

// -- Feltételek

const x1 = 14;
const x2 = 10;

/*
if (x1 <= x2) {
    console.log("Igaz.");
} else {
    console.log("Hamis.");
}

if (x1 === x2) { //Összehasonlítja a típust is.
    console.log("Igaz.");
} else {
    console.log("Hamis.");
}
    */

/*
if (x1 == 12) {
    //Összehasonlítja a számokat.
    console.log("Igaz.");
} else if (x1 == 13) {
    console.log("Hamis.");
} else {
    console.log("Más");
}

switch (x1) {
    case 10:
        console.log("10");
        break; //Ezzel megállítjuk a ciklus futását.
    case 11:
        console.log("11");
        break;
    default:
        console.log("Hamis.");
}
        */

/*
if (x1 != x2) {
    //Összehasonlítja a számokat.

    console.log("Igaz.");
} else {
    console.log("Hamis.");
}

if (!!true == false) {
    console.log("IGAZZ");
} else {
    console.log("HAMISS");
}
*/

/*
if (!0) {
    console.log("IGAZZZ");
} else {
    console.log("HAMISSS"); // 0 . !1
}

//Rövidítések:

//delkaráció = if ()    {}    else {}
const color = x1 > 10 ? "piros" : "kek";
console.log(color);
*/

//Tömbök (vagyis objektumok, array-ek)

//Mivel a js nem típusos nyelv, ezért lehet szám is a tömbben.

/*
const allatok = ["kutya", "macska", "ló", 10, true];
console.log(`A tömböm 0. eleme: ${allatok[0]}`);

//console.log(Array.isArray(allatok));
console.log(`Hány db elem van a tömbben: ${allatok.length}`);

allatok[6] = "kacsa";

*/

/*
allatok.push("kacsa1");
console.log(allatok);
allatok[allatok.length] = "kacsa2";
console.log(allatok);

//Beszúrja az adott értéket a tömb elejére.
console.log(
    `Unshift után (beszúrja az adott értéket a tömb elejére): ${allatok.unshift(
        "kacsa3"
    )}` + `\n A lista:`
);

//Végig menni a tömbön.
for (let allat of allatok) {
    console.log(allat);
}

//Elem törlés a végéről.
let utolso_elem = allatok.pop();

console.log(
    `A pop után (töröltük az elemet a végéről). Utolsó elem: ${utolso_elem}`
);

//Végig menni a tömbön.
for (let allat of allatok) {
    console.log(allat);
}
*/

/*
console.log(`Hanyadik eleme a kutya a tömbnek:${allatok.indexOf("kutya")}`);
*/

/*
const teszt = !null ? "igaz" : "hamis";
console.log(Math.ceil(4.4));

let gyumolcsok = ["alma", "banán", "szőlő"];

gyumolcsok[1] = "körte"; // banán -> körte
console.log(gyumolcsok);

gyumolcsok.push("narancs"); //+1 elemet hozzárak a végére.

console.log(gyumolcsok);
*/

//Objektumok
const ember = {
    name: "Zsolt",
    age: 20,
    hobbies: ["snowboard", "squash"], //Tömb.
};
console.log(ember);
console.log(typeof ember);

//Az objektum egységbe foglalja az adatokat és a műveleteket.
