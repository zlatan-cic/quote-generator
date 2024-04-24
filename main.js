import "./style.scss";


const quoteText = document.getElementById("qoute");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-qoute");
const tag = document.getElementById("tag");

let apiQuote = [];
// New quote
function newQuote() {
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  // console.log(quote);
  if(!quote.author) {
    authorText.textContent = "Unknown"
  } else {
    authorText.textContent = quote.author
  }
  // Check quote text length
  if(quote.text.length > 120) {
    quoteText.classList.add("long-quote")
  } else {
    quoteText.classList.remove("long-quote")
  }

  quoteText.textContent = quote.text
  tag.textContent = `"${quote.tag.charAt(0).toUpperCase() + quote.tag.slice(1)}"`;
}



// Get Quotes form API
async function getQuotes(){
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

  try {
    const responce = await fetch(apiUrl);
    apiQuote = await responce.json()
    console.log(apiQuote[1]);
    newQuote()
  } catch (error) {
    quoteText.textContent = error
  }
}

newQuoteBtn.addEventListener('click', getQuotes)

getQuotes()