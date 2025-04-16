import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Listas de pronombres, adjetivos y sustantivos
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  // Generar y mostrar todas las combinaciones posibles
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        console.log(`${p}${a}${n}.com`);
      }
    }
  }
};