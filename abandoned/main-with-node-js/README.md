# GitHub Actions-el rakjuk össze a komponenseket (Node.js + PostHTML)

Így nem fogja látni a felhasználó, hogy üres a header és a footer.

Fontos, hogy a html-ben div helyett include tag kell.

Szükség lesz egy kis node.js-re ez a motor.

Terminálba ezt írd be:
npm init -y
npm install posthtml-cli posthtml-include --save-dev

Javítsd ezt a fájlt: .github/workflows/static.yml

Hozz létre a projekt gyökérkönyvtárában egy .posthtmlrc-t, a tartalmát nézd meg a fájlban.

Csekkoláshoz írd be a terminálba hogy ls -R

Terminálba:
npx posthtml index.html -u posthtml-include -o dist/index.html

Ez létrehoz egy dist mappát. Ha a dist/index.html-t nyitod meg a böngészőben (vagy Live Serverrel), abban már benne lesz a header.


Hogy helyileg is betöltsön minden az oldal, ahhoz kell egy script rész a package.json fájl-ba, lsd a fájlt. Fontos, hogy ne duplikálj. 

## Futtatáshoz

Összeillesztjük a komponenseket.

A rendszer megkeresi a package.json fájlban a build kulcshoz tartozó parancsot.
Lefut a posthtml, ami beilleszti a header-t és footer-t az összes HTML fájlba.
Létrejön a dist mappa, benne a kész, "beilleszett" HTML fájlokkal.

Terminálba:
npm run build 

A dist mappába lévő index.html-t nyid meg a Live Serverrel.
Ha a dist mappában nincsen benne az asset, css, js mappa, akkor a package.json-ben rossz a build rész. 

A régi fájlok amiket töröltél azok benne maradnak a dist mappában, szóval időnként nyugodtan töröld a dist mappát. 