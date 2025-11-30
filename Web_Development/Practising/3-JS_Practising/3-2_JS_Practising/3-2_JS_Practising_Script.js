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
    address: { street: "Valami utca", city: "Milanó" },
};

//Más programnyelvben nem nagyon lehet utólag hozzáadni elemet egy objektumhoz.
ember.email = "zsolt@info.hu";

//console.log(ember);
//console.log(typeof ember);

//Az objektum egységbe foglalja az adatokat és a műveleteket.

/*
console.log(`Ember neve: ${ember.name}`);
console.log(`Van-e hobbija: ${ember.hobbies.length > 0}`);
console.log(`Az első hobbija: ${ember.hobbies[0]}`);

console.log(`A lakcíme utcája: ${ember.address.street}`);
*/

//Alakítsd át az ember objektumot JSON szöveggé, amit már bárhova kiírhatsz, tárolhatsz (Tárolás helyileg (LocalStorage)) vagy továbbíthatsz (pl.: Küldés szerverre (API-hoz)).
//A JavaScript nem tudja ezt natívan szépen kiírni egy stringben.
//JSONal viszont igen:
//console.log(`JSON formátumban való kiíratás: ${JSON.stringify(ember)}`);

//Egyből egy változóban eltárolja az ember objektumból szerzett adatot. ES6-ban jött be ez.
const {
    name,
    age,
    address: { street },
} = ember;
/*
console.log(`Neve: ${name}`);
console.log(`Utcája: ${street}`);
*/
const todos = [
    {
        id: 1,
        text: "Ne felejtsd el feltölteni a blogra.",
        completed: true,
    },
    {
        id: 1,
        text: "----",
        completed: false,
    },
    {
        id: 2,
        text: "Tanulni, tanulni.",
        completed: false,
    },
];

/*
console.log(`To-do: ${todos}`);
console.log(todos);

console.log(`0. objektum: ${todos[0].id}`);
*/

//Ciklusok

//for ciklus
for (let i = 0; i < 10; i++) {
    //console.log(`i értéke: ${i}`);
}

//while ciklus
let index = 0;
while (index < 10) {
    //console.log(`index értéke: ${index}`);
    index++;
}

//A tömböknél használjuk sokat a ciklusokat, mert nem tudjuk hány elem van benne.

for (let i = 0; i < todos.length; i++) {
    //console.log(todos[i]);
}

//console.log("ES6-os változat:");
for (let todo of todos) {
    //ES6-os modern. fof és tab
    //console.log(todo);
}

//Ugyanazt csinálja, mint a fenti for és while ciklus. Végig megy a tömbön.
todos.forEach(function (todo) {
    //console.log(todo);
});

//Tömb műveletek ciklusokkal.
//Létrehozunk egy string tömböt, amibe belerakjuk az id-kat.
const todoIDs = todos.map(function (todo) {
    return todo.text;
});
/*
console.log(todoIDs);
console.log(todoIDs[0]);
console.log("Filtered (only false): ");
*/

/*
Miért a map()?
Mindig új tömböt ad vissza.
Egyszerű, rövid, átlátható.
Kifejezetten értékek kinyerésére van.
*/

//Létrehoztunk egy új tömbböt azokra szelektálva, amiknél a completed értéke false.
const filtered = todos.filter(function (todo) {
    return !todo.completed; //false-ra szűrünk.
});

//console.log(filtered);

//Függvények (Funkcions)

function osszeadas(szamx, szamy) {
    //Visszatérési érték.
    return szamx + szamy;
}
//Ha nem adsz meg semmit, akkor: NaN =Not a number.
console.log(osszeadas(10, 25));

function osszeadas0(szamx = 1, szamy = 2) {
    //Visszatérési érték.
    return szamx + szamy;
}

console.log(osszeadas0(10));
//Mivel a JS nem típusos nyelv, ezért össze tudja fűzni a két stringet.
console.log(osszeadas0("Hello ", "Zsolt!"));
