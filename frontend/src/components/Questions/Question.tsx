// Question.tsx
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCategory } from "../../redux/slices/ratingSlice";
import { RootState } from "../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import "../../pages/pageStyle/MyValues.css";

const Question = () => {
    // redux usage
    const dispatch = useDispatch();
    // page change
    const navigate = useNavigate();
    // update data in redux
    const categories = useSelector((state: RootState) => state.rating);
    // current question from strapi
    const [question, setQuestion] = useState<any>(null);
    // current question id
    const { id } = useParams();

    // update question content when id changes
    useEffect(() => {
        const fetchQuestion = async () => {
            const response = await fetch(
                `https://se-shared-decision-making-dev.up.railway.app/api/my-values-questions/${id}?populate=deep&locale=en`
            );
            const data = await response.json();
            // console.log('Fetched data:', data.data.attributes);
            setQuestion(data.data);
        };

        fetchQuestion();
    }, [id]);


    // update results array when user click the slider
    // todo: error
    const handleSliderChange = (
        event: any,
        value: number | number[]
    ) => {
        const categoryLabels: (keyof typeof categories)[] = [
            "leastImportant",
            "lessImportant",
            "important",
            "mostImportant",
        ];

        const category = categoryLabels[value as number - 1];
        // const category = value as number - 1;
        dispatch(addToCategory({ category, questionText: "Labor starts on its own" }));
    };

    // next button
    const handleNext = () => {
        const nextId = parseInt(id!) + 1;
        if (nextId === 7) {
            navigate(`/QuizResult`);
        }
        else {
            navigate(`/question/${nextId}`);
        }

    };

    // previous button
    const handlePrevious = () => {
        const prevId = parseInt(id!) - 1;
        if (prevId === 0) {
            navigate("/MyValues");
        } else {
            navigate(`/question/${prevId}`);
        }
    };

    return (
        <Layout>
            {question && (
                <>
                    <div className="question-number-circle">{question.id}</div>
                    <div>
                        <h3 className="imp">
                            {question.attributes.question_detail[0].intro_sentance}
                        </h3>
                        <h2 className="QuestionText">
                            {question.attributes.question_detail[0].question_content}
                        </h2>
                    </div>
                    <div className="ContentContainer2 ">

                        <Slider
                            step={null}
                            marks={[
                                { value: 1, label: "Least Important" },
                                { value: 2 },
                                { value: 3 },
                                { value: 4, label: "Most Important" },
                            ]}
                            min={1}
                            max={4}
                            onChange={(event, value) => handleSliderChange(event, value)}
                            style={{ width: "400px" }}
                        />
                        <p className="drag">
                            Drag slider to indicate your preference
                        </p>
                        <div className="pre-next-container">
                            <button onClick={handlePrevious} className="Previous">Back</button>
                            <button onClick={handleNext} className="Next">Next</button>
                        </div>
                    </div>
                </>
            )}
        </Layout>
    );
};

export default Question;
