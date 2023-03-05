/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".uy"];

const final = () => {
  let resultado = pronouns[Math.floor(Math.random() * pronouns.length)];
  resultado += adjectives[Math.floor(Math.random() * adjectives.length)];
  resultado += nouns[Math.floor(Math.random() * nouns.length)];
  resultado += domain[Math.floor(Math.random() * domain.length)];
  return resultado;
};

window.onload = function() {
  //write your code here
  let finalDomain = document.querySelector("#finalDomain");
  finalDomain.innerHTML = final();
};
