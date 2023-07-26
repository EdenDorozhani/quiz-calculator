const quizQuestions = [
  {
    category: "history",
    total: 4,
    questions: [
      {
        id: 1,
        title: "Kur lindi Skenderbeu?",
        correct_answers: [0],
        answers: ["May 6, 1405", "May 6, 1407", "May 6, 1410", "May 6, 1420"],
        points: 10,
        dificulty: "easy",
        type: "single",
      },

      {
        id: 2,
        title: "Cfar ngjyre kishte kali i Skenderbeut?",
        correct_answers: [0, 1],
        answers: ["I bardh", "I zi", "Kaf", "Gri"],
        points: [8, 10],
        dificulty: "medium",
        type: "multiple",
      },
      {
        id: 3,
        title: "Kur vdiq Skenderbeu?",
        correct_answers: [0],
        answers: [
          "January 17, 1463",
          "January 17, 1466",
          "January 17, 1461",
          "January 17, 1469",
        ],
        points: 9,

        dificulty: "easy",
        type: "single",
      },
      {
        id: 4,
        title: "Ku Lindi Skenderbeu?",
        correct_answers: [0],
        answers: [" DIBER", "DURRES", "LEZHE", "KUKES"],
        points: 7,
        dificulty: "easy",
        type: "single",
      },
    ],
  },
  {
    category: "sport",
    total: 4,
    questions: [
      {
        id: 5,
        title: "Which has won Europa League at least once?",
        correct_answers: [0, 1],

        answers: ["	Manchester City", "	Bayern München", "	Real Madrid "],
        points: [5, 9],

        dificulty: "medium",
        type: "multiple",
      },

      {
        id: 6,
        title: "Golf?",
        correct_answers: [1],

        answers: ["	B. Harman	", "	J. Day", "	T. Kim "],
        points: 9,

        dificulty: "easy",
        type: "single",
      },
      {
        id: 7,
        title: "PingPong?",
        correct_answers: [2],

        answers: ["Shashin Shodhan ", "Tawny Banh", "Rajul Sheth "],
        points: 8,

        dificulty: "easy",
        type: "single",
      },
      {
        id: 8,
        title: "Which has won Europa League at least twice?",
        correct_answers: [0, 1],

        answers: ["Sevilla", " Tottenham ", " Lazio "],
        points: [9, 10],

        dificulty: "medium",
        type: "multiple",
      },
    ],
  },
];

const getQuestionFilters = () => {
  const category = quizQuestions.map((question) => question.category);
  const dificulties = {};
  quizQuestions.map((questions) => {
    return questions.questions.map((question) => {
      dificulties[question.dificulty] = question.dificulty;
    });
  });

  return {
    category: category,
    dificulty: Object.values(dificulties),
    numberOfQuestions: [1, 2, 3, 4, 5],
  };
};

const getFilteredQuestions = (options) => {
  if (!options.category || !options.dificulty || !options.numberOfQuestions) {
    return;
  }

  const filterCategoryData = quizQuestions.find(
    (quizQuestion) => quizQuestion.category === options.category
  );

  if (filterCategoryData.length === 0) {
    return;
  }

  const filterDifficultyData = filterCategoryData.questions
    .filter((question) => question.dificulty === options.dificulty)
    .slice(0, options.numberOfQuestions);

  if (filterDifficultyData.length === 0) {
    return;
  }

  if (filterDifficultyData.length < options.numberOfQuestions) {
    return;
  }

  return filterDifficultyData;
};

// const calculateUserPoints = (
//   selectedAnswers,
//   userPoints,
//   actualQuestion,
//   page
// ) => {
//   console.log(userPoints);
//   let pointsArray = [...userPoints];
//   let totalPoints = 0;

//   selectedAnswers.map((answer) => {
//     if (
//       actualQuestion.correct_answers.includes(answer) &&
//       actualQuestion.type === "multiple"
//     ) {
//       return (totalPoints += actualQuestion.points[answer]);
//     } else if (
//       actualQuestion.correct_answers.includes(answer) &&
//       actualQuestion.type === "single"
//     ) {
//       return (totalPoints += actualQuestion.points);
//     }
//   });

//   pointsArray[page - 1] = totalPoints;

//   return pointsArray[page - 1];
// };

export { quizQuestions, getQuestionFilters, getFilteredQuestions };
