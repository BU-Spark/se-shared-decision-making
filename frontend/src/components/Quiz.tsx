import React, { useState } from "react";

let leastImp: string[] = [];
let lessImp: string[] = [];
let imp: string[] = [];
let moreImp: string[] = [];
//initialize variables outside of Quiz funciton to prevent scope error
//These arrays will be mapped and rendered to sort out chosen preferences in grid format from wireframe, must also be stored with Icons (see wireframes) as well

const Quiz = () => {
  //create a dynamic array questions, that stores, questionText and subsequent answers
  //function works, just must find a way to reset arrays when user restarts the Quiz (array now includes previous answers from past attempts as well)
  const questions = [
    {
      questionText: "My labor starts on its own",
      answerOptions: [
        { answerText: "Least Important" },
        { answerText: "Less Important" },
        { answerText: "Important" },
        { answerText: "Most Important" },
      ],
    },
    {
      questionText: "Less pain",
      answerOptions: [
        { answerText: "Least Important" },
        { answerText: "Less Important" },
        { answerText: "Important" },
        { answerText: "Most Important" },
      ],
    },
    {
      questionText: "My baby comes sooner than later",
      answerOptions: [
        { answerText: "Least Important" },
        { answerText: "Less Important" },
        { answerText: "Important" },
        { answerText: "Most Important" },
      ],
    },
    {
      questionText: "Less time in the hospital and fewer interventions",
      answerOptions: [
        { answerText: "Least Important" },
        { answerText: "Less Important" },
        { answerText: "Important" },
        { answerText: "Most Important" },
      ],
    },
    {
      questionText: "Lower risks to me and my baby after 41-42 weeks",
      answerOptions: [
        { answerText: "Least Important" },
        { answerText: "Less Important" },
        { answerText: "Important" },
        { answerText: "Most Important" },
      ],
    },
    {
      questionText: "Personal and/or cultural reasons",
      answerOptions: [
        { answerText: "Least Important" },
        { answerText: "Less Important" },
        { answerText: "Important" },
        { answerText: "Most Important" },
      ],
    },
  ];
  //showScore allows us to see the final summary at the very end, once the questions list is exhausted
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
    //checks to see slected answer and push to appropriate array

    // console.log(leastImp);
    // console.log("Final" + showLeast);
    // console.log("Not equal");

    //keep these consoles for potential testing

    const nextQuestions = currentQuestion + 1;

    console.log(nextQuestions);
    
    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };

  //Local storage hook for remembering answers. Seems to work but current bug relating to the displaying of answers results in duplicate answers 
  React.useEffect(() => {
    localStorage.setItem("leastImp", JSON.stringify(leastImp));
    localStorage.setItem("lessImp", JSON.stringify(lessImp));
    localStorage.setItem("imp", JSON.stringify(imp));
    localStorage.setItem("moreImp", JSON.stringify(moreImp));
  }, [leastImp, lessImp, imp, moreImp]);

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
