/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


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
    source : 'John Johnson'
  },
  {
    quote : 'The happiest moment i\'ve ever felt was that moment when i discovered my ability to create.',
    source : ' Dr. Hazem Ali'
  },
  {
    quote : 'A grid is like underwear, you wear it but it\'s not to be exposed ',
    source : 'Massimo Vignelli',
    citation : 'Twitter.com/chrisdo'
  }
];




//This function returns a random quote from the quotes array
function getRandomQuote(){
  var randomNum = Math.floor(Math.random()* quotes.length);
  return quotes[randomNum];
}



// the random quote is called by calling the function and its value is stored in a variable
function printQuote(){
  var randomNumber = getRandomQuote();
  var colour = () => Math.floor(Math.random() * 256);
  
  
// the randomNumber variable is used to concatinated the p tag by pointing to key value pairs of the array object.
    var listHtml = '<p class = "quote">' + randomNumber.quote + '</p>';
    listHtml += '<p class = "source">' + randomNumber.source ; 
    if(randomNumber.year){
      listHtml += '<span class = "year">' + randomNumber.year + '</span>';
    } else if(randomNumber.citation){
      listHtml += '<span class = "citation">' + randomNumber.citation + '</span>'
    }
  listHtml += '</p>';
/*** listHtml is then sent to innerHTML of the quote-box div and is used to dynamically change the quotes randomly, 
 * or what we call as 'manipulating the DOM' .
***/

  document.getElementById("quote-box").innerHTML = listHtml;
  document.body.style.backgroundColor = 'rgb(' + colour() + ',' + colour() + ',' + colour() + ')'; 
//referred from w3schools, link : https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
}

var quoteDelay = window.setInterval( printQuote, 4000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke" 'printQuote' function
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



