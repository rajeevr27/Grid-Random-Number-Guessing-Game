const randomNumber = Math.floor(Math.random() * 25);//Generates random integer between 0 and 24
const indicatorMessage = document.querySelector('h2');
const gridItem = document.getElementsByClassName("grid-item");
const previousGuesses = [];
let guessCount;
let div;

function disableGridItems() {
  for (let i = 0; i < gridItem.length; i += 1) {
    gridItem[i].style.pointerEvents = "none"
  }
}

const restartGame = function() {
  location.reload();
}

for (let i = 0; i < gridItem.length; i += 1) {
  gridItem[i].addEventListener("click", function() {
      if (i === randomNumber) {
        div = this;
        indicatorMessage.textContent = `You Guessed Right! The Random Number is ${randomNumber+1}.`;
        indicatorMessage.style.color = "green";
        div.style.backgroundColor = "green";
        div.style.color = "white";
        disableGridItems();
    } else if (previousGuesses.indexOf(i) > -1) {
        gridItem[i].style.pointerEvents = "none"
    } else if (guessCount === 9) {
        div = this;
        indicatorMessage.textContent = `You have reached the maximum number of guesses allowed.`;
        indicatorMessage.style.color = "red";
        div.style.backgroundColor = "red";
        div.style.color = "white";
        disableGridItems();
    } else if (i > randomNumber) {
        div = this;
        indicatorMessage.textContent = `Guess < Lower`;
        indicatorMessage.style.color = "black";
        div.style.backgroundColor = "red";
        div.style.color = "white";
        previousGuesses.push(i);
        guessCount = previousGuesses.length;
    } else if (i < randomNumber) {
        div = this;
        indicatorMessage.textContent = `Guess > Higher`;
        indicatorMessage.style.color = "black";
        div.style.backgroundColor = "red";
        div.style.color = "white";
        previousGuesses.push(i);
        guessCount = previousGuesses.length;
    }
 });//End of gridItem function
}//End of for loop
