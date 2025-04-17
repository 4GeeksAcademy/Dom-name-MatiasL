import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Listas de pronombres, adjetivos y sustantivos
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  // Generar un nombre de dominio aleatorio
  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  let randomDomain = `${randomPronoun}${randomAdj}${randomNoun}.com`;

  // Insertar el nombre de dominio en el elemento <p> del HTML
  let paragraph = document.querySelector(".alert.alert-warning.mt-4");
  if (paragraph) {
    paragraph.innerHTML = `<b>${randomDomain}</b>`;
  }
};