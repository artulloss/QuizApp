const questions = [
  {
    text: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22" },
      { text: "7" },
      { text: "6" },
    ],
  },
  {
    text: "What color is the sky?",
    answers: [
      { text: "Blue", correct: true },
      { text: "Red" },
      { text: "Green" },
      { text: "Yellow" },
    ],
  },
  {
    text: "What is the best scripting language?",
    answers: [
      { text: "Python" },
      { text: "Lua" },
      { text: "JavaScript", correct: true },
      { text: "PHP" },
    ],
  },
  {
    text: "Why does C get all the girls, but Java doesn't?",
    answers: [
      { text: "C is a classier language" },
      { text: "Because C doesn't treat them like objects", correct: true },
      { text: "Java is just too plain" },
      { text: "Java is too verbose" },
    ],
  },
  {
    text: "What is the first letter of the alphabet?",
    answers: [
      { text: "B" },
      { text: "C" },
      { text: "D" },
      { text: "A", correct: true },
    ],
  },
].map((question, i) => {
  // Alpine needs unique keys for looping https://alpinejs.dev/directives/for#keys
  question.id = i + 1;
  //   console.log(question);
  question.answers = question.answers.map((answer, j) => {
    answer.id = j + 1;
    return answer;
  });
  return question;
});

document.addEventListener("alpine:init", () => {
  Alpine.data("quiz", function () {
    return {
      quizHeading: "Quiz",
      questions,
      currentQuestion: 0,
      correctAnswers: 0,
      calcCorrectAnswers() {
        // Calculate the number of correct answers
        return this.questions.filter((question, questionNumber) => {
          return document.querySelector(
            `input[name="${questionNumber}"][data-correct="true"]`
          )?.checked;
        }).length;
      },
      progress: 0,
      calcProgress() {
        // This is called from the watcher and checks when we submit the form
        console.log(this.questions, "questions");
        const p = this.questions.filter((question, questionNumber) => {
          return Array.from(
            document.querySelectorAll(`input[name="${questionNumber}"]`)
          ).some((answer) => answer.checked);
        }).length;
        console.log({ p });
        return p;
      },
      isSubmitted: false,
      getNextButtonClass: () => {
        console.log(this.currentQuestion, "currentQuestion");
        const noPrev = this.currentQuestion === 0;
        const filledOut = (progress = questions.length);
        // console.log({ noPrev, filledOut });
        return noPrev && filledOut ? "no-prev" : "";
      },
      highlightCorrectAnswers() {
        // Highlight the correct answers
        // Calculate the number of correct answers
        this.questions.forEach((question, questionNumber) => {
          document
            .querySelectorAll(`input[name="${questionNumber}"]`)
            .forEach((e) => {
              e.disabled = true;
              console.log(e.data);
              if (e.dataset?.correct) {
                e.classList.add("quiz-question-answers-option-input--highlight-correct");
              }
            });
        });
      },
      calcScorePercent(correct, total) {
        return Math.round((correct / total) * 100);
      },
    };
  });
});
