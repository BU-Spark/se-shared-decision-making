import React, { useState } from "react";
import Layout from "./Layout";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCategory } from "../redux/slices/ratingSlice";
import { RootState } from "../redux/store";

const Question = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.rating);

  const handleSliderChange = (
    event: any,
    value: number | number[],
    questionIndex: number
  ) => {
    const categoryLabels: (keyof typeof categories)[] = [
      "leastImportant",
      "lessImportant",
      "important",
      "mostImportant",
    ];

    const category = categoryLabels[value as number - 1];
    dispatch(addToCategory({ category, questionText:"test" }));
  };

  // Render 6 sliders
  const sliders = Array.from({ length: 6 }, (_, i) => (
    <div key={i}>
      <Slider
        step={null}
        marks={[
          { value: 1, label: "Least Important" },
          { value: 2, label: "Less Important" },
          { value: 3, label: "Important" },
          { value: 4, label: "Most Important" },
        ]}
        min={1}
        max={4}
        onChange={(event, value) => handleSliderChange(event, value, i)}
        style={{ width: "400px", left: "460px", top: "306px" }}
      />
    </div>
  ));

  return (
    <>
      <Layout>
        {sliders}
        {/* Display the contents of the 4 arrays */}
        {Object.entries(categories).map(([category, questionIndexes]) => (
          <div key={category}>
            <h3>{category}:</h3>
            <p>{questionIndexes.join(", ")}</p>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Question;
