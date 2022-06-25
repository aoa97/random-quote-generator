const randomBtn = document.querySelector(".random");
const quoteText = document.querySelector("#text");
const quoteAuthor = document.querySelector("#author");
const quoteGenre = document.querySelector("#genre");

fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
  .then((res) => res.json())
  .then((res) => {
    const quote = res.data[Math.floor(Math.random() * 10)];
    quoteText.textContent = `"${quote.quoteText}"`;
    quoteAuthor.textContent = quote.quoteAuthor;
    quoteGenre.textContent = quote.quoteGenre;

    randomBtn.addEventListener("click", () => {
      const quote = res.data[Math.floor(Math.random() * 10)];
      quoteText.textContent = `"${quote.quoteText}"`;
      quoteAuthor.textContent = quote.quoteAuthor;
      quoteGenre.textContent = quote.quoteGenre;
    });
  });
