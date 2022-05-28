var recieveMsgButton = document.querySelector(".msg-button");
var clearMsgButton = document.querySelector(".clear-button");
var meditateImage = document.querySelector(".meditate");
var messageOutput = document.querySelector(".message-output");
var affirmMsg = document.querySelector(".affirm");
var mantraMsg = document.querySelector(".mantra");

recieveMsgButton.addEventListener('click', recieveMsg);
clearMsgButton.addEventListener('click', clearMsg);
meditateImage.addEventListener('click', clearSelection);


function recieveMsg() {
    if (mantraMsg.checked) {
      mantraMessage();
  } if (affirmMsg.checked) {
      affirmMessage();
  } if (!mantraMsg.checked && !affirmMsg.checked) {
      alert("Please select a message option to continue!");
  }
}

function mantraMessage() {
  meditateImage.classList.add("hidden");
  messageOutput.classList.remove("hidden");
  clearMsgButton.classList.remove("hidden");
  messageOutput.innerText = `🕉️ ${mantraMsgs[getRandomIndex(mantraMsgs)]} 🕉️`;
  clearMsgButton.innerText = "Clear Mantra Message";
}

function affirmMessage() {
  meditateImage.classList.add("hidden");
  messageOutput.classList.remove("hidden");
  clearMsgButton.classList.remove("hidden");
  messageOutput.innerText = `❤️ ${affirmationMsgs[getRandomIndex(affirmationMsgs)]} ❤️`;
  clearMsgButton.innerText = "Clear Affirmation Message";
}

function clearMsg() {
  meditateImage.classList.remove("hidden");
  messageOutput.classList.add("hidden");
  clearMsgButton.classList.add("hidden");
}

function clearSelection() {
  mantraMsg.checked = false
  affirmMsg.checked = false
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



var affirmationMsgs = ["I will never give up on my dreams!", "How can I be alone, when I have me?", "I will find my strength, and make my transition", "Dont worry, be happy!", "Just can't live that negative way, make way for the positive day!", "I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];
var mantraMsgs = ["My mind is brilliant. My body is healthy. My spirit is tranquil.", "I create my own path and walk it with joy.", "My positive thoughts guide me to new heights.", "I am conquering my fears and becoming stronger each day.", "I will have a good day, because it’s my choice.", "I am not afraid to be wrong.", "My body is a temple. I keep my temple clean.", "Every cell in my body is alive and beautiful.", "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."];
