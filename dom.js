
let h1Tag = document.getElementById("ved");
console.log(h1Tag);
function oneclick() {
    h1Tag.textContent = "Dom is used change the doucment Behaviour dynamically"
    h1Tag.style.color = "black";
    h1Tag.style.backgroundColor = "orange";
    h1Tag.style.padding = "10px 20px";
    h1Tag.style.borderRadius = "20px";
    h1Tag.style.boxShadow = "5px 5px 5px 2px";
    h1Tag.style.cursor = "pointer"
    h1Tag.style.textAlign = "center"
}

let h2Tag = document.getElementById("ved1");
function doubleclick() {
    h2Tag.textContent = "Dom is used change the doucment Behaviour dynamically"
    h2Tag.style.color = "black"
    h2Tag.style.backgroundColor = "LightGray"
    h2Tag.style.fontSize = "20px"
    h2Tag.style.padding = "10px 20px";
    h2Tag.style.borderRadius = "15px";
    h2Tag.style.boxShadow = "5px 5px 5px 2px";
    h2Tag.style.cursor = "pointer"
    h2Tag.style.textAlign = "center"
}

let h3Tag = document.getElementById("ved2");
function onHover() {
    h3Tag.textContent = "Dom is used change the doucment Behaviour dynamically"
    h3Tag.style.color = "white"
    h3Tag.style.backgroundColor = "SlateBlue"
    h3Tag.style.fontSize = "20px"
    h3Tag.style.padding = "10px 20px";
    h3Tag.style.borderRadius = "15px";
    h3Tag.style.boxShadow = "5px 5px 5px 2px";
    h3Tag.style.cursor = "pointer"
    h3Tag.style.textAlign = "center"
}
