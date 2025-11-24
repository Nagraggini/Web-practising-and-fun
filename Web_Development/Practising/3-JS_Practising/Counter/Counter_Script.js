
/*A var nem csak a blokkban látszik, hanem kívűl is. A let csak a blokkban látszik.*/
let count = 0;
let scale = 0;

function Plus() {
console.log("Plus function.")

console.log(document.getElementById("input_scale")) 

/*If the number cannot be converted, NaN (Not a Number) is returned.*/
  if (parseInt(document.getElementById("input_scale").value) !== 1) {
    
    console.log("Igaz ág.")
    
    const myCount = document.getElementById("counter_label");
    console.log(myCount);
    if (count > 0) { myCount.style.color = "green"; }
    else if (count == 0) { myCount.style.color = "pink"; }

    console.log("myCount.innerText:"+myCount.innerText);
    myCount.innerText = count;
    console.log("count"+count);
    count = +document.getElementById("input_scale").value;
  }
  else {
      console.log("Hamis ág.")
    count++;
    /*
      A document.getElementById("counter_label") megkeresi a HTML-ben
    azt az elemet, amelynek az id-je "counter_label".
  
    FONTOS: mindig magát az elemet (DOM objektumot) mentsük el egy változóba,
    ne annak a szövegét (innerText-et). 
    Csak így tudunk rajta stílusokat (pl. color) beállítani.
  
    Ezért:
      const myCount = document.getElementById("counter_label");
    és nem:
      const myCount = document.getElementById("counter_label").innerText;
    */
    const myCount = document.getElementById("counter_label");
    if (count > 0) { myCount.style.color = "green"; }
    else if (count == 0) { myCount.style.color = "pink"; }
    myCount.innerText = count;
  }
}


function Minus() {
  count--;
  const myCount = document.getElementById("counter_label");

  if (count < 0) {
    myCount.style.color = "red";
  } else if (count == 0) { myCount.style.color = "pink"; }
  myCount.innerText = count;
}

function Reset_function() {
  count = 0;
  const myCount = document.getElementById("counter_label");
  myCount.style.color = "pink";
  //Visszaadja vagy beállítja egy HTML-elem szöveges tartalmát.
  myCount.innerText = count;
}

