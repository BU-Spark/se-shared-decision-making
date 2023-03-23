import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import { RootState } from "../../redux/store";

const QuizResult = () => {
  const rating = useSelector((state: RootState) => state.rating);

  const renderArray = (arr: string[]) => {
    if (arr.length === 0) {
      return ;
    }
    return arr.map((item, index) => (
      <span key={index}>{item + (index === arr.length - 1 ? "" : ", ")}</span>
    ));
  };

  return (
    <Layout>
      <h2>Results</h2>
      <h3>Least Important:</h3>
      <p>{renderArray(rating.leastImportant)}</p>
      <h3>Less Important:</h3>
      <p>{renderArray(rating.lessImportant)}</p>
      <h3>Important:</h3>
      <p>{renderArray(rating.important)}</p>
      <h3>Most Important:</h3>
      <p>{renderArray(rating.mostImportant)}</p>
    </Layout>
  );
};

export default QuizResult;
