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

let kor1=20;
kor1=21;

//console.log(kor1);

/*
const kor2=25;
kor2=26;
console.log(kor1); //Hibás, mert a const sohasem változik meg.
*/

// -- Adat típusok
//Primitívek:
const nev='Zsolt'; //String
const kor3=21; //Number
const suly=80.5; //Number
const felnott=true; //Boolean

//console.log(nev, kor3,suly,felnott);

//Objektumok:
const date=new Date(); //Mai dátum.
const date2=new Date('2025-11-24');

/*console.log(date);
console.log(date2);
*/

const x=null; // Szándékosan „nincs értéke” — üresre állított változó.
const y= undefined; // Definiálva van, de nincs hozzárendelve konkrét érték.

/*
null → te adod meg, hogy nincs értéke.
undefined → alapértelmezett, ha egy változó létrejön, de nem kap értéket (pl. let z;).
*/

console.log(x);
console.log(y);


