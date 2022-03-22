const randomNumber = Math.floor(Math.random() * 25);//Generates random integer between 0 and 24
const indicatorMessage = document.querySelector('h2');
const gridItem = document.getElementsByClassName("grid-item");
let guessCounter = 0;
let div = this;

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
      if (i == randomNumber) {
      div = this;
      indicatorMessage.textContent = `You Guessed Right! The Random Number is ${randomNumber+1}.`;
      indicatorMessage.style.color = "green";
      div.style.backgroundColor = "green";
      div.style.color = "white";
      disableGridItems();
    } else if (guessCounter === 9) {
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
      guessCounter += 1;
    } else if (i < randomNumber) {
      div = this;
      indicatorMessage.textContent = `Guess > Higher`;
      indicatorMessage.style.color = "black";
      div.style.backgroundColor = "red";
      div.style.color = "white";
      guessCounter += 1;
    }
 });//End of gridItem function
}//End of for loop
