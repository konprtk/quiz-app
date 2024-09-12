const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let category = {
  computers: 18,
  gk: 9,
  animal: 27,
  gadget: 30,
  vehicles: 28,
  ScienceAndNature: 17,
  books: 10,
  maths: 19,
};

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  fetchQuestions();
}

const MAX_RETRIES = 3; // Maximum number of retry attempts

async function fetchQuestions(retries = MAX_RETRIES) {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&category=${category.animal}&type=multiple`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("No questions found");
    }

    questions = data.results.map((question) => {
      // Extract and shuffle answers
      const answers = [...question.incorrect_answers, question.correct_answer];
      const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

      return {
        question: question.question,
        answers: shuffledAnswers.map((answer) => ({
          text: answer,
          correct: answer === question.correct_answer,
        })),
      };
    });

    showQuestion();
  } catch (error) {
    console.error(`Error fetching questions: ${error.message}`);

    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries}`);
      setTimeout(() => fetchQuestions(retries - 1), 1000); // Retry after 1 second
    } else {
      questionElement.innerHTML =
        "Failed to load questions after several attempts.";
      nextButton.style.display = "none";
    }
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
