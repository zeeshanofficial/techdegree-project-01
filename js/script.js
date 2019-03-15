/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
    quote : 'Talk is cheap, show me the code',
    source : 'Linus Torvalds',
    year : 1940
  },
  {
    quote : 'Be yourself, everyone else is already taken',
    source : 'Oscar Wilde'
  },
  {
    quote : 'First, solve the problem. Then, write the code.',
    source : 'John Johnson',
    citation : 'https://dzone.com/articles/best-programming-jokes-amp-quotes'
  },
  {
    quote : 'The happiest moment i\'ve ever felt was that moment when i discovered my ability to create.',
    source : ' Dr. Hazem Ali'
  },
  {
    quote : 'If I do a job in 30 minutes it’s because I spent 10 years learning how to do that in 30 minutes. You owe me for the years, not the minutes.',
    source : '@davygreenberg'
  }
];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

var randomNum;

function getRandomQuote(){
  randomNum = Math.floor(Math.random()* quotes.length);
  return quotes[randomNum];
}
console.log(getRandomQuote());
/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
var randomNumber;
var html = '';
function printQuote(){
  randomNumber = getRandomQuote();
  html += '<p>';
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.