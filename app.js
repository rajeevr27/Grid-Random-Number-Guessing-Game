const randomNumber = Math.floor(Math.random() * 25);//Generates random integer between 0 and 24
const indicatorMessage = document.querySelector("h2");
const guessHistory = document.querySelector("#guess-history-container h3");
const alertMessageContainer = document.querySelector("#alert-message-container");
const alertMessage = document.querySelector("#alert-message-container h4");
const gridContainer = document.getElementById("grid-container");
const gridItem = document.getElementsByClassName("grid-item");
const previousGuesses = [];
let guessCount;
let div;

function guessListHistory() {
  guessHistory.innerHTML = `<ul>`;
    for (let i = 0; i < previousGuesses.length; i += 1) {//Start of for loop
      const currentGuess = previousGuesses[i];
      if (currentGuess == randomNumber) {
        guessHistory.innerHTML += `<li class='list-item' id='list-item-green'>${previousGuesses[i] + 1}</li>`;
      } else {
        guessHistory.innerHTML += `<li class='list-item' id='list-item-red'>${previousGuesses[i] + 1}</li>`;
      }
   guessHistory.innerHTML += `</ul>`;
  }//End of for loop
}

function disableGridItems() {
  for (let i = 0; i < gridItem.length; i += 1) {
    gridItem[i].style.pointerEvents = "none";
  }
}

function closeAlertMessage() {
  alertMessageContainer.style.backgroundColor = "#03a9f4";
  alertMessage.innerHTML = ``;
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
        alertMessageContainer.style.backgroundColor = "#03a9f4";
        alertMessage.textContent = "";
        previousGuesses.push(i);
        guessListHistory();
        disableGridItems();
        gridContainer.style.cursor = "not-allowed";
    } else if (previousGuesses.indexOf(i) > -1) {
        gridItem[i].style.pointerEvents = "auto"
        alertMessageContainer.style.backgroundColor = "#ff9800";
        alertMessage.innerHTML = `<h4>Alert! The number ${i+1} has already been guessed.<span class="close-button" onclick="closeAlertMessage()">&times;</span></h4>`;
        alertMessageContainer.style.transition = "all 0.3s";
    } else if (guessCount === 5) {
        div = this;
        indicatorMessage.textContent = `You have reached the maximum number of guesses allowed.`;
        indicatorMessage.style.color = "red";
        div.style.backgroundColor = "red";
        div.style.color = "white";
        alertMessageContainer.style.backgroundColor = "#03a9f4";
        alertMessage.textContent = "";
        previousGuesses.push(i);
        guessListHistory();
        disableGridItems();
        gridContainer.style.cursor = "not-allowed";
    } else if (i > randomNumber) {
        div = this;
        indicatorMessage.textContent = `Guess < Lower`;
        indicatorMessage.style.color = "black";
        div.style.backgroundColor = "red";
        div.style.color = "white";
        alertMessageContainer.style.backgroundColor = "#03a9f4";
        alertMessage.textContent = "";
        previousGuesses.push(i);
        guessCount = previousGuesses.length;
        guessListHistory();
    } else if (i < randomNumber) {
        div = this;
        indicatorMessage.textContent = `Guess > Higher`;
        indicatorMessage.style.color = "black";
        div.style.backgroundColor = "red";
        div.style.color = "white";
        alertMessageContainer.style.backgroundColor = "#03a9f4";
        alertMessage.textContent = "";
        previousGuesses.push(i);
        guessCount = previousGuesses.length;
        guessListHistory();
    }
 });//End of gridItem function
}//End of for loop
