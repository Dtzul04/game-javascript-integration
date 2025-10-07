var questionCounter = 0;

var questions = [
    ["What is the capital of France?", 0, "Paris", "Rome", "Berlin"],
    ["Which planet is known as the Red Planet?", 2, "Venus", "Saturn", "Mars"],
    ["Who wrote 'Romeo and Juliet'?", 1, "Charles Dickens", "William Shakespeare", "Mark Twain"]
]

function playGame() {
    document.getElementById("prompt").innerHTML = 
    <button onlcick="playGame()">Play Game</button>
}

windown.onload = loadPlayButton();