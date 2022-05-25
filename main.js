var recieveMsgButton = document.querySelector("button");
var meditateImage = document.querySelector(".meditate");
var messageOutput = document.querySelector(".message-output");
var affirmMsg = document.querySelector(".affirm")
var mantraMsg = document.querySelector(".mantra")

recieveMsgButton.addEventListener('click', recieveMsg);


function recieveMsg() {
    if (mantraMsg.checked === true) {
      meditateImage.classList.add("hidden")
      messageOutput.classList.remove("hidden")
      messageOutput.innerText = mantraMsgs[getRandomIndex(mantraMsgs)]
    } if (affirmMsg.checked === true) {
      meditateImage.classList.add("hidden")
      messageOutput.classList.remove("hidden")
      messageOutput.innerText = affirmationMsgs[getRandomIndex(affirmationMsgs)]
  }
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var affirmationMsgs = ["You can do it!", "I believe in you!", "You're the best!", "Never give up on your dreams!", "In the beginning it is you, in the middle it is you, and in the end it is you.", "How can you be alone, when you have you?", "Find your strength, and make your transition", "Dont worry, be happy!", "Just can't live that negative way, make way for the positive day!"]
var mantraMsgs = ["Breathe in, 1... 2... 3... Breathe out", "My mind is brilliant. My body is healthy. My spirit is tranquil.", "I create my own path and walk it with joy.", "My positive thoughts guide me to new heights.", "I am conquering my fears and becoming stronger each day.", "I will have a good day, because it’s my choice.", "I am not afraid to be wrong.", "My body is a temple. I keep my temple clean.", "Every cell in my body is alive and beautiful."]




"My positive thoughts guide me to new heights.", "I am conquering my fears and becoming stronger each day.", "I will have a good day, because it’s my choice.", "I am not afraid to be wrong."
