// Write a new Node.js application that prints one of three quotations to the console when run using Math.random() function
let quotes = ["Stay close to anything that makes you glad you are alive. — Hafez","It is never too late to be what you might have been.", "Be the change you want to be."]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
console.log(randomQuote)
