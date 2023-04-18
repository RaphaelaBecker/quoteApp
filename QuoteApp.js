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
      randomList = [newQuote, newAuthor];
      quotes = randomList;
      renderQuoteApp();
    });
}

function renderQuoteApp() {
  quoteli.innerHTML = "";
  const newQuoteLi = document.createElement("li");
  const quoteText = document.createTextNode(quoteli);
  newQuoteLi.append(quoteText);
  const newAuthorInDiv = document.createElement("div");
  author.innerText = quotes;
  quotes.appendChild(newAuthorInDiv);
}

quoteButton.addEventListener("click", function () {
  randomQuote();
});
