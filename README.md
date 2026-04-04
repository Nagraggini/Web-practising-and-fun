## Web Practising & Fun

This repository is a collection of small web development projects, experiments, and practice work.

I use it to improve my skills in HTML, CSS, and JavaScript while building fun and simple applications.

## Live Demo

👉 https://nagraggini.github.io/web-practising-and-fun/

## IT Blog

If you're interested in how to get started with web development, check out my blog.

Currently available only in Hungarian:
👉 https://nagraggini-blog.onrender.com/

---

## 🇭🇺 Magyar verzió - Hungarian version

## Web gyakorlás és fun projektek

Ez a repository kisebb webes projektekből és gyakorló feladatokból áll.

Célja, hogy fejlesszem a HTML, CSS és JavaScript tudásomat, miközben egyszerű és szórakoztató dolgokat készítek.

## Élő verzió

👉 https://nagraggini.github.io/web-practising-and-fun/

## IT Blog

Ha érdekel, hogyan kezdj el webfejlesztést tanulni, nézd meg a blogomat:

👉 https://nagraggini-blog.onrender.com/

# Teszt (Playwright)

Terminálba: npm init playwright@latest
JavaScript -> tests -> GitHub Actions yes -> Install Playwright browsers? yes

Egy test mappád legyen, akár kicsi akár nagy betűs. 
Ezután a playwright.config.js-ben csekold le ezt: testDir: './tests',


**Így indítsd el a "Kattintgatós" módot**

Live Server-en indítsd el az oldalt.

Kattints a bal oldali sávban a Testing (lombik) ikonra.

Az alsó részen keresd meg a "Record new" gombot.

Ekkor a Playwright megnyit egy üres böngészőt és egy "Playwright Inspector" ablakot.

Írd be a címsorba a helyi weboldalad címét (pl. http://127.0.0.1:5500).

Kezdj el kattintgatni: vegyél fel egy új questet, pipáld ki, töröld le stb.

Látni fogod, hogy az Inspector ablakban automatikusan generálódik a kód.

Ha végeztél, csak zárd be a böngészőt, és a VS Code-ban ott lesz az új tesztfájl a kész kóddal!
Bal oldalt frissítsd a test explorert és nyisd le a test részt ott láthatod az imént felvitt tesztedet. 

**Tesztek futtatása**

Live Server-en indítsd el az oldalt.

Kattints a bal oldali sávban a Testing (lombik) ikonra.
A test melletti play ikonra kattints.

**GitHub Actions**

Ennek meg kell lennie:
.github/workflows/playwright.yml

Ez az útmutató, hogy mi alapján futtassa a GitHub a teszteket. 

Amikor a terminálban telepítetted a playwright-ot (npm init playwright@latest), akkor yes-t kellett nyomni a GitHub Action-s kérdésre.

A GitHub Actions egy üres szerveren fut, ahol nincs elindítva a Live Server, ezért a playwright.config.js fájlba a lentit írd bele, amivel megmondjuk a Playwright-nak, hogy indítsa el a webszervert a tesztek előtt.

```javascript
export default defineConfig({
//... korábbi sorok
    /* Run your local dev server before starting the tests */
    webServer: {
        command: "npm run start",
        url: "http://127.0.0.1:5500",
        reuseExistingServer: !process.env.CI,
    },
// ... többi sor
});
```

Ezután jöhet a commitolás a master/main-be. "Add GitHub Actions workflow" címmel.



