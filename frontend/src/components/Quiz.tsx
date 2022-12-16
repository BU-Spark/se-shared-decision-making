import React, { useState } from "react";

let values = [];

function Quiz() {
  const questions = [
    {
      questionText: "My labor starts on its own",
      key: "1",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      questionText: "Less pain",
      key: "2",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      questionText: "My baby comes sooner than later",
      key: "3",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      questionText: "Less time in the hospital and fewer interventions",
      key: "4",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      questionText: "Lower risks to me and my baby after 41-42 weeks",
      key: "5",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      questionText: "Personal and/or cultural reasons",
      key: "6",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    // Some actions (user moving slider) add event to update state and when event handler to read state of slider variable
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const handleAnswerButtonClick = (isOption: any) => {
    const nextQuestions = currentQuestion + 1;

    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions);
    } else {
    }
  };

  return (
    <>
      <div className="question-count">
        <h1> {currentQuestion + 1}</h1>
      </div>
      <h3 className="header">How Important Is</h3>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() => handleAnswerButtonClick(answerOptions)}
                  // Use state variable to save value, remove scoring then keeping listing a set of questions
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Quiz;
