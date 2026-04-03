# Gamer/geek teendő lista

[Live demo](https://nagraggini.github.io/web-practising-and-fun/web-development/Practising/questlog/questlog.html)

# Házi feladat leírása

•  Készítsen weboldalt, melyen egy tennivalólistát tudunk kezelni.      
• Az oldal megnyitásakor bekérünk a felhasználótól egy nevet, majd 
lehetősége van felvinni tennivalókat egy táblázatba.            
• Egy tennivaló bejegyzésről 3 dolgot adhat meg: Megnevezés, Dátum, Fontosság {nem fontos, normál, fontos}        
• A táblázatban jelenjen meg a megnevezés és a dátum, és a
fontosságnak megfelelő színnel legyen kiírva:                 
• Különböző színűek legyenek: Nem fontos, normál , fontos           
• UX miatt más színet lettek beállítva.  

<!--TODO -->
-> Ezek még nem működnek: Done selected,Delete selected

# localStorage cheatsheet

```javascript
//Mentés
localStorage.setItem("nev", "Leroy");

//Lekérés
const nev = localStorage.getItem("nev");
console.log(nev); // Leroy

//Törlés
localStorage.removeItem("nev");

//Összestörlése
localStorage.clear();

//Mentés tömbbel
const tod = ["tanulás", "edzés", "projekt"];
localStorage.setItem("tod", JSON.stringify(tod));

//Visszaolvaás
const tod = JSON.parse(localStorage.getItem("tod")) || [];
console.log(tod);
```

# Kép kicsinyítése (Linux Mint-en)

Terminálban:
sudo apt install imagemagick

cd Dokumentumok/Icons

convert kep.png -resize 24x24 kiskep.png

