import React, { useState } from "react";

const quizQuestions = [
  {
    question: "What percentage of your income should ideally go to savings in the 50/30/20 rule?",
    options: ["10%", "20%", "30%", "50%"],
    correct: "20%"
  },
  {
    question: "Which of these is considered a financial 'need'?",
    options: ["Streaming subscription", "Groceries", "Vacation", "New shoes"],
    correct: "Groceries"
  },
  {
    question: "How many months of expenses should you ideally keep in an emergency fund?",
    options: ["1–2 months", "2–4 months", "3–6 months", "6–12 months"],
    correct: "3–6 months"
  }
];

export default function BudgetQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = quizQuestions[current];

  const handleNext = () => {
    const isCorrect = selected === currentQuestion.correct;
    if (isCorrect) setScore(score + 1);

    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        selected,
        correct: currentQuestion.correct,
        isCorrect
      }
    ]);

    setSelected(null);
    if (current + 1 < quizQuestions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="space-y-4">
      {!showResult ? (
        <>
          <h2 className="text-lg font-semibold text-green-700">{currentQuestion.question}</h2>
          <div className="space-y-2">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(option)}
                className={`w-full text-left px-4 py-2 rounded-md border ${
                  selected === option
                    ? "bg-green-100 border-green-500"
                    : "bg-white border-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={!selected}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            {current + 1 < quizQuestions.length ? "Next" : "See Results"}
          </button>
        </>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-green-700 mb-2">Quiz Complete 🎉</h2>
          <p className="text-gray-700 mb-4">You scored {score} out of {quizQuestions.length}.</p>
          <ul className="space-y-4">
            {answers.map((answer, idx) => (
              <li key={idx} className="bg-[#f0f7eb] p-4 rounded-md">
                <p className="font-medium text-green-900">{answer.question}</p>
                <p>
                  <strong>Your Answer:</strong> {answer.selected}
                  {answer.isCorrect ? (
                    <span className="text-green-600 ml-2 font-semibold">✔ Correct</span>
                  ) : (
                    <span className="text-red-600 ml-2 font-semibold">✘ Incorrect</span>
                  )}
                </p>
                {!answer.isCorrect && (
                  <p className="text-sm text-gray-600">
                    Correct Answer: <strong>{answer.correct}</strong>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
