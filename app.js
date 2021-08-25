// api
// https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?type=single

"use strict";
const body = document.querySelector("body");
const jokeText = document.getElementById("jokeText");
const api = async () => {
  const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?type=single";
  const res = await fetch(url);
  const data = await res.json();
  jokeText.innerText = data.joke;
  // console.log(`here you joke ${data.joke}`);
};
const btn = document.getElementById("btn");
btn.addEventListener("click", api);
