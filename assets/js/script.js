// Variables
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
// start button function
function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}
// move to next question
function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// instert questions and answers
function showQuestion(question) {
  questionElement.innerHTML = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
// reset
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {}
// Questions
const questions = [
  {
    question: "What does CSS Stand for",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Centered Style Sharing", correct: false },
      { text: "Calculated Super Styler", correct: false },
      { text: "Cool style stuff", correct: false },
    ],
  },
  {
    question: "",
  },
];
