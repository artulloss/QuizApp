const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22" },
      { text: "7" },
      { text: "6" },
    ],
  },
  {
    question: "What color is the sky?",
    answers: [
      { text: "Blue", correct: true },
      { text: "Red" },
      { text: "Green" },
      { text: "Yellow" },
    ],
  },
  {
    question: "What is the best scripting language?",
    answers: [
      { text: "Python" },
      { text: "Lua" },
      { text: "JavaScript", correct: true },
      { text: "PHP" },
    ],
  },
  {
    question: "Why does C get all the girls, but Java doesn't?",
    answers: [
      { text: "C is a classier language" },
      { text: "Because C doesn't treat them like objects", correct: true },
      { text: "Java is just too plain" },
      { text: "Java is too verbose" },
    ],
  },
  {
    question: "What is the first letter of the alphabet?",
    answers: [
      { text: "B" },
      { text: "C" },
      { text: "D" },
      { text: "A", correct: true },
    ],
  },
].map((question, index) => {
  // Alpine needs unique keys for looping https://alpinejs.dev/directives/for#keys
  question.id = index + 1;
  return question;
});

// const data = Alpine.reactive({
//   correctAnswers: 0,
//   currentQuestion: 0,
//   questions,
// });

