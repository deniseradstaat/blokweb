// JavaScript Document

var marioThema;
var luigiThema;
var peachThema;
var body;

marioThema = document.querySelector("section:last-of-type button:first-of-type");
luigiThema = document.querySelector("section:last-of-type button:nth-of-type(2)");
peachThema = document.querySelector("section:last-of-type button:nth-of-type(3)");
body = document.querySelector("body");

marioThema.addEventListener("click", doeRodeThema);
luigiThema.addEventListener("click", doeGroeneThema);
peachThema.addEventListener("click", doeRozeThema);

function doeRodeThema() {
    body.classList.remove("luigi", "peach");
    body.classList.add("mario");
}

function doeGroeneThema() {
    body.classList.remove("mario", "peach");
    body.classList.add("luigi");
}

function doeRozeThema() {
    body.classList.remove("mario", "luigi");
    body.classList.add("peach");
}
