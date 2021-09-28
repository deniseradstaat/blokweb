// JavaScript Document

var marioThema;
var luigiThema;
var peachThema;
var body;

marioThema = document.querySelector("section:last-of-type article:first-of-type");
luigiThema = document.querySelector("section:last-of-type article:nth-of-type(2)");
peachThema = document.querySelector("section:last-of-type article:nth-of-type(3)");
body = document.querySelector("body");

marioThema.addEventListener("click", doeRodeThema);
luigiThema.addEventListener("click", doeGroeneThema);
peachThema.addEventListener("click", doeRozeThema);

function doeRodeThema() {
    body.classList.toggle("mario");
}

function doeGroeneThema() {
    body.classList.toggle("luigi");
}

function doeRozeThema() {
    body.classList.toggle("peach");
}