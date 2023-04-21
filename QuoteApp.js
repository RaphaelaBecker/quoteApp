"use strict";

let quotes = [];
const quoteButton = document.querySelector("button");
const quoteli = document.querySelector("#quotelist");
const author = document.querySelector("#author");

function randomQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return "FAIL";
      }
    })
    .then((data) => {
      const newQuote = data.quote;
      const newAuthor = data.author;
      quotes = [newQuote, "–– " + newAuthor];
      renderQuoteApp();
    });
}

function renderQuoteApp() {
  quoteli.innerHTML = "";
  const newQuoteLi = document.createElement("li");
  const quoteText = document.createTextNode(quotes[0]);
  newQuoteLi.append(quoteText);
  quoteli.append(newQuoteLi);
  author.innerText = quotes[1];
}

quoteButton.addEventListener("click", function () {
  randomQuote();
});
