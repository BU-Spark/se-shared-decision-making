import React, { useState } from "react";
import Layout from "./Layout";

const Quiz = () => {
  const questions = [
    {
      questionText: "My labor starts on its own",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      questionText: "Less pain",
      answerOptions: [
        { answerText: "Least Important", isOption: "0" },
        { answerText: "Less Important", isOption: "1" },
        { answerText: "Important", isOption: "2 " },
        { answerText: "Most Important", isOption: "3 " },
      ],
    },
    {
      questionText: "My baby comes sooner than later",
      answerOptions: [
        { answerText: "Least Important", isOption: "0" },
        { answerText: "Less Important", isOption: "1 " },
        { answerText: "Important", isOption: "2" },
        { answerText: "Most Important", isOption: "3" },
      ],
    },
    {
      questionText: "Less time in the hospital and fewer interventions",
      answerOptions: [
        { answerText: "Least Important", isOption: "0" },
        { answerText: "Less Important", isOption: "1 " },
        { answerText: "Important", isOption: "2 " },
        { answerText: "Most Important", isOption: "3 " },
      ],
    },
    {
      questionText: "Lower risks to me and my baby after 41-42 weeks",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      questionText: "Personal and/or cultural reasons",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    // Some actions (user moving slider) add event to update state and when event handler to read state of slider variable
  ];

  // let array = ["😜"];
  // array.push("😂");
  // console.log(array); // Array [ "😜", "😂" ]

  let leastImp = [""]; // hard coded for now, i.e. for testing
  let lessImp = ["1", "2"];
  let imp = ["1", "222"];
  let moreImp = ["1", "223"];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (answerText: string) => {
    if (answerText === "Least Important") {
      leastImp.push(questions[currentQuestion].questionText);
      console.log(leastImp);
      // console.log("✅ strings are equal");
    } else {
      // console.log("Not equal");
    }
    // leastImp.push(questions[currentQuestion].questionText);
    // } else if (answerText === "Less Important") {
    //   lessImp.push(questions[currentQuestion].questionText);
    // } else if (answerText === "Important") {
    //   imp.push(questions[currentQuestion].questionText);
    // } else if (answerText === "More Important") {
    //   moreImp.push(questions[currentQuestion].questionText);
    const nextQuestions = currentQuestion + 1;
    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };

  const showLeast = () => leastImp.map((item) => <li>{item}</li>);
  const showLess = () => lessImp.map((item) => <li>{item}</li>);
  const showImp = () => imp.map((item) => <li>{item}</li>);
  const showMore = () => moreImp.map((item) => <li>{item}</li>);

  return (
    <>
      <h1 className="header"> </h1>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <div>
              <h4>Most Important</h4>
              <ul>{showMore()}</ul>
            </div>
            <div>
              <h4>Important</h4>
              <ul>{showImp()}</ul>
            </div>
            <div>
              <h4>Less Important</h4>
              <ul>{showLess()}</ul>
            </div>
            <div>
              <h4>Least Important</h4>
              <ul>{showLeast()}</ul>
            </div>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <p>{currentQuestion + 1}</p>
                <p>HOW IMPORTANT IS...</p>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.answerText)
                  }
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
};
export default Quiz;
