let allPossibleNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let playerName = document.getElementById('player-name').value
let mainPlayerGreetingIndex = document.getElementById("main-greeting-index");
let nextStepsIndex = document.getElementById("intro-index-next-steps")
function nameChange() {
    mainPlayerGreetingIndex.textContent = "Hey" + " " + playerName + "!";
    nextStepsIndex.textContent = "Sounds like you're excited!! Let's get started! Scroll down to view the type of problems you can practice."
}