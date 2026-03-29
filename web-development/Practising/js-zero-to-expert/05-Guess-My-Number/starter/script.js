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
// Minimum: 0 (előfordulhat)
// Maximum: 0.999999... (de 1 sosem lesz)
// Math.random();

const secretNumber = Math.trunc(Math.random() * 20) + 1; // 1-20 közötti szám kreálása.
//A +1 azért kell, hogy lehessen 20 is az eredmény.
//Teszthez.
console.log(secretNumber);

//Eredmény módosításához.
let score = 20; //Nem lehet const, mert csökkenteni kell az értékét.

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

    displayFirework();

    if (Number(document.querySelector('.highscore').textContent) >= score) {
      document.querySelector('.highscore').textContent = score;
      // TODO nem működik.
    }
    // TODO Legyen zöld a hattertes a betűk fehérek
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--; //Hibás tippnél csökkentjük a pontot.
      document.querySelector('.score').textContent = score;
    } else {
      //A score=0.
      document.querySelector('.message').textContent = "Don't worry about it!";
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--; //Hibás tippnél csökkentjük a pontot.
      document.querySelector('.score').textContent = score;
    } else {
      //A score=0.
      document.querySelector('.message').textContent = "Don't worry about it!";
      document.querySelector('.score').textContent = 0;
    }
  }
});
// TODO Ezt!
//Udemy - The Complete JavaScript Course 2025 From Zero to Expert! (2025)
//07. JavaScript in the Browser DOM and Events PROJECT
// 8. videó egészen a 11. videóig.

// TODO localStroge-ba mentsd el a high score-t.

// Tűzijáték animáció
function displayFirework() {
  // Egyszerű tűzijáték animáció canvas-szal
  let firework = document.createElement('canvas');
  firework.id = 'firework-canvas';
  firework.width = window.innerWidth;
  firework.height = window.innerHeight;
  firework.style.position = 'fixed';
  firework.style.top = '0';
  firework.style.left = '0';
  firework.style.pointerEvents = 'none';
  firework.style.zIndex = '10000';
  document.body.appendChild(firework);

  const ctx = firework.getContext('2d');
  let particles = [];

  function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 60%)`;
  }

  function createFirework(x, y) {
    // Több tűzijáték-pont, különböző helyekre és színekre
    for (let j = 0; j < 5; j++) {
      const centerX = x + Math.cos((2 * Math.PI * j) / 5) * 200;
      const centerY = y + Math.sin((2 * Math.PI * j) / 5) * 120;
      for (let i = 0; i < 30; i++) {
        const angle = (Math.PI * 2 * i) / 30;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: randomColor(),
        });
      }
    }
  }

  createFirework(firework.width / 2, firework.height / 2);

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, firework.width, firework.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; // gravitáció
      p.alpha -= 0.012;
      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    particles = particles.filter(p => p.alpha > 0);
    frame++;
    if (particles.length > 0 && frame < 120) {
      requestAnimationFrame(animate);
    } else {
      firework.remove();
    }
  }
  animate();
}
