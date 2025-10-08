let counter = 0;

const questions = [
  ["What is the capital of France?", 1, "Berlin", "Paris", "Madrid"],
  ["Which planet is known as the Red Planet?", 2, "Earth", "Venus", "Mars"],
  ["What is 5 + 3?", 3, "6", "7", "8"]
];

document.getElementById("prompt").innerHTML = '<button onclick="playGame()">Play Game</button>';

function playGame() {
  if (counter < questions.length) {
    const q = questions[counter];
    document.getElementById("question").textContent = q[0];
    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";
    for (let i = 2; i <= 4; i++) {
      const li = document.createElement("li");
      li.innerHTML = `<button onclick="checkAnswer(${i - 1})">${q[i]}</button>`;
      answersList.appendChild(li);
    }
  } else {
    document.getElementById("question").textContent = "Game Over! Thanks for playing!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("prompt").innerHTML = '<button onclick="restartGame()">Play Again</button>';
  }
}

function checkAnswer(choice) {
  const correct = questions[counter][1];
  const promptDiv = document.getElementById("prompt");
  if (choice === correct) {
    promptDiv.textContent = "Correct!";
  } else {
    promptDiv.textContent = "Incorrect!";
  }
  counter++;
  setTimeout(playGame, 1000);
}

function restartGame() {
  counter = 0;
  playGame();
}
