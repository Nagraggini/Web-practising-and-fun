fetch("./components/header-component.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
        console.log("Betöltött a header.");
    });
