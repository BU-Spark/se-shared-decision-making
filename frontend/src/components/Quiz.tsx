import React, { useState } from "react";
import Layout from "./Layout";

let leastImp: string[] = [];
let lessImp: string[] = []; // hard coded for now, i.e. for testing
let imp: string[] = [];
let moreImp: string[] = [];

const Quiz = () => {
  const questions = [
    {
      key: 0,
      questionText: "My labor starts on its own",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      key: 1,
      questionText: "Less pain",
      answerOptions: [
        { answerText: "Least Important", isOption: "0" },
        { answerText: "Less Important", isOption: "1" },
        { answerText: "Important", isOption: "2 " },
        { answerText: "Most Important", isOption: "3 " },
      ],
    },
    {
      key: 2,
      questionText: "My baby comes sooner than later",
      answerOptions: [
        { answerText: "Least Important", isOption: "0" },
        { answerText: "Less Important", isOption: "1 " },
        { answerText: "Important", isOption: "2" },
        { answerText: "Most Important", isOption: "3" },
      ],
    },
    {
      key: 3,
      questionText: "Less time in the hospital and fewer interventions",
      answerOptions: [
        { answerText: "Least Important", isOption: "0" },
        { answerText: "Less Important", isOption: "1 " },
        { answerText: "Important", isOption: "2 " },
        { answerText: "Most Important", isOption: "3 " },
      ],
    },
    {
      key: 4,
      questionText: "Lower risks to me and my baby after 41-42 weeks",
      answerOptions: [
        { answerText: "Least Important", isOption: 0 },
        { answerText: "Less Important", isOption: 1 },
        { answerText: "Important", isOption: 2 },
        { answerText: "Most Important", isOption: 3 },
      ],
    },
    {
      key: 5,
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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (
    answerText: string,
    currentQuestion: number
  ) => {
    if (answerText === "Least Important") {
      leastImp.push(questions[currentQuestion].questionText);
    } else if (answerText === "Less Important") {
      lessImp.push(questions[currentQuestion].questionText);
    } else if (answerText === "Important") {
      imp.push(questions[currentQuestion].questionText);
    } else {
      moreImp.push(questions[currentQuestion].questionText);
    }

    console.log(leastImp);
    console.log("Final" + showLeast);
    // console.log("Not equal");

    // leastImp.push(questions[currentQuestion].questionText);
    // } else if (answerText === "Less Important") {
    //   lessImp.push(questions[currentQuestion].questionText);
    // } else if (answerText === "Important") {
    //   imp.push(questions[currentQuestion].questionText);
    // } else if (answerText === "More Important") {
    //   moreImp.push(questions[currentQuestion].questionText);
    const nextQuestions = currentQuestion + 1;

    console.log(nextQuestions);
    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };

  // const sortAnswers = (answerText: string) => {
  //   if (answerText === "Least Important") {
  //     leastImp.push(questions[currentQuestion].questionText);
  //   }
  // };

  console.log();

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
                    handleAnswerButtonClick(
                      answerOptions.answerText,
                      currentQuestion
                    )
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
