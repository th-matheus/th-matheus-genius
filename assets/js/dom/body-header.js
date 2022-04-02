const body = document.body;
const header = document.createElement("header");
const h1 = document.createElement("h1");

header.id = "cabecalho";
h1.innerText = "GENIUS";

body.appendChild(header);
header.appendChild(h1);