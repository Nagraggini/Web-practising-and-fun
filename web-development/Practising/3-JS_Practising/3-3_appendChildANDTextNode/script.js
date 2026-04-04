//Minden kattintáskor felkerül a víz a bevásárlólistára.
document.querySelector(".appendButton").addEventListener("click", () => {
    //Létrehozunk egy üres li tag-et.
    const node = document.createElement("li");
    // Text note kreálás, vagyis létre jön maga a szöveg.
    const textnode = document.createTextNode("Víz");
    //A text note-ot hozzáadjuk az li-hez. A node örökbe fogadja a textnode-t.
    node.appendChild(textnode);
    // A kész elemet felrakjuk a "falra".
    document.getElementById("myList").appendChild(node);
});

function addPlus() {
    const collection = document.getElementsByTagName("li");
    document.getElementById("demo").innerHTML = collection[1].innerHTML;
}
document.querySelector(".plusButton").addEventListener("click", addPlus);

//===================================================
//Gyors teszthez:
//document.write(b);
