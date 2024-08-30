# Simple Quiz App

## Overview

The Simple Quiz App is a basic web-based quiz application that fetches questions from an API and presents them to the user. It includes features such as answering questions, keeping track of scores, and retrying to fetch questions in case of failure.

## Live Project Link: [Quiz App](https://konprtk.me/quiz-app)

## Features

- Fetches quiz questions from the Open Trivia Database API.
- Shuffles answer choices for each question.
- Tracks user score and provides feedback on correct and incorrect answers.
- Allows users to play again after completing the quiz.

## Technologies Used

- **HTML**: Structure and layout of the quiz application.
- **CSS**: Styling and design of the app.
- **JavaScript**: Fetching questions, handling user interactions, and managing quiz logic.

## Getting Started

### Prerequisites

To run this application, you need:

- A web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/konprtk/quiz-app.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd quiz-app
   ```

3. **Open `index.html` in your preferred web browser.**

## Usage

1. **Start the quiz** by opening `index.html` in your browser.
2. **Answer the questions** by clicking on the answer buttons.
3. **Click "Next"** to move to the next question.
4. **View your score** at the end of the quiz.
5. **Play again** by clicking "Play Again" after completing the quiz.

## Code Overview

- **index.html**: The main HTML file containing the structure of the app.
- **style.css**: The CSS file responsible for the app's styling.
- **script.js**: The JavaScript file handling the quiz logic, including fetching questions, displaying them, and managing user interaction.

## API Details

The quiz questions are fetched from the [Open Trivia Database API](https://opentdb.com/). The app currently uses the `computers` category, but you can modify the `category` object in `script.js` to fetch questions from different categories.

## Troubleshooting

- **Questions not loading**: If questions fail to load after several attempts, ensure you have an active internet connection and check the console for error messages.
- **Buttons not responding**: If buttons are not responding, try refreshing the page or checking the browser's developer console for errors.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing the trivia questions API.
- [Google Fonts](https://fonts.google.com/) for providing web fonts.

---

Enjoy the quiz and have fun testing your knowledge!
