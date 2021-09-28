// JavaScript Document

var luigiThema;
var body;

luigiThema = document.querySelector("section:last-of-type article:nth-of-type(2)");
body = document.querySelector("body");

luigiThema.addEventListener("click", doeGroeneThema);

function doeGroeneThema() {
    body.classList.add("luigi");
}