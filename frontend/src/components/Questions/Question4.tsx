import Layout from "../Layout";
import { Slider } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { addToCategory } from "../../redux/slices/ratingSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from 'react-router-dom';
import "../../pages/pageStyle/MyValues.css"

const Question4 = () => {
  const dispatch = useDispatch();
  //const history = useHistory();
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.rating);

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
    dispatch(addToCategory({ category, questionText: "Birth without pain medication" }));
  };

  const handleNext = () => {
    navigate("/Question5");
  };

  const handlePrevious = () => {
    navigate("/Question3");
  };

  
  return (
    <Layout>
        <div>
            <h3 className="imp">HOW IMPORTANT IS ...</h3>
            <h2 className="QuestionText">Birth without pain medication</h2>
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
                style={{ width: "400px"}}
            />
            <p className="drag">
            Drag slider to indicate your preference
            </p>
            <div className="pre-next-container">
              <button onClick={handlePrevious} className="Previous">Back</button>
              <button onClick={handleNext} className="Next">Next</button>
            </div>
      </div>   
    </Layout>
  );
};

export default Question4;
