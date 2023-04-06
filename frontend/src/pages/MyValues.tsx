import Layout from "../components/Layout";
import "./pageStyle/MyValues.css"
//import "../ClashGrotesk_Complete/Fonts/WEB/css/clash-grotesk.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export default function MyValues() {
  return (
    <Layout>

      <div className="ContentContainer">
        <div className="QuizTitle">
          <h1>Your values, your choices!</h1>
        </div>

        <div>
          <p className="QuizIntro">
            Reflect on what is most important to you. Answer six short questions and use the
            to talk to your provider.
          </p>
        </div>
        <div>
          <Link to="/question/1">
            <button className="Begin">
              Begin
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
