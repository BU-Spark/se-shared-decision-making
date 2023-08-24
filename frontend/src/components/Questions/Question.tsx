// Question.tsx
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addToCategory } from "../../redux/slices/ratingSlice";
import { RootState } from "../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import "../../pages/pageStyle/MyValues.css";

const CustomSlider = styled(Slider)({
    width: "390px",
    "& .MuiSlider-rail": {
        backgroundColor: "#0C3A25",
        width: "400px",
        height: "6px",
        opacity: 1,
    },
    "& .MuiSlider-track": {
        backgroundColor: "#0C3A25",
        opacity: 1,
    },
    "& .MuiSlider-thumb": {
        backgroundColor: "#0C3A25",
        width: "32px",
        height: "32px",
        opacity: 1,
    },
    "& .MuiSlider-mark": {
        backgroundColor: "#0C3A25",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        opacity: 1,
    },
    "& .MuiSlider-markLabel": {
        color: "#0C3A25", // Set the font color for the label
        fontFamily: "ClashGrotesk-Regular,sans-serif", // Set the font for the label
        fontWeight: "normal", // Set the font weight for the label
        fontSize: "14px", // Set the font size for the label
        top: "40px",
    },
    "& .MuiSlider-markActive": {
        backgroundColor: "#0C3A25",
    },
});


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
    // control slider value
    const [sliderValue, setSliderValue] = useState(1);
    // global language
    const [languageState, setLanguageState] = useState('en');

    useEffect(() => {
        // Sets the language at page load. If no language in local storage then uses english by default
        window.addEventListener('storage', () => {
            setLanguageState(localStorage.getItem('language') || 'en')
        });
    }, []);

    // reset slider value to 1 when a new question is loaded
    useEffect(() => {
        setSliderValue(1);
    }, [id]);

    // update question content when id changes
    useEffect(() => {
        const fetchQuestion = async () => {
            console.log(languageState)
            const response = await fetch(
                process.env.REACT_APP_api_base_url + `/api/my-values-questions/${id}?populate=deep&locale=` + languageState
            );
            console.log(process.env.REACT_APP_api_base_url + `/api/my-values-questions/${id}?populate=deep&locale=` + languageState)
            const data = await response.json();
            console.log('Fetched data:', data.data.attributes);
            setQuestion(data.data);

            // add this line to dispatch the default value
            const categoryLabels: (keyof typeof categories)[] = [
                "leastImportant",
                "lessImportant",
                "important",
                "mostImportant",
            ];
            const defaultCategory = categoryLabels[0]; // "leastImportant"
            dispatch(addToCategory({ category: defaultCategory, questionText: data.data.attributes.question_detail[0].question_content }));
            setSliderValue(1); // reset slider value to 1
        };

        fetchQuestion();
    }, [id]);


    // update results array when user click the slider
    // todo: error
    const handleSliderChange = (
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
        dispatch(addToCategory({ category, questionText: question.attributes.question_detail[0].question_content }));
        setSliderValue(value as number);
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

                        <CustomSlider
                            value={sliderValue}
                            step={null}
                            marks={[
                                { value: 1, label: "Least Important", },
                                { value: 2 },
                                { value: 3 },
                                { value: 4, label: "Most Important" },
                            ]}
                            min={1}
                            max={4}
                            onChange={(event, value) => handleSliderChange(value)}
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
