import { useNavigate } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
import "./pageStyle/Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/Home");
  };

  return (
    <div>
      <div>
        <div className="allWelcome">
          <p>Pick one to continue</p>

          <button className="Welcome" onClick={navigateHome}>
            <h1>
              Welcome <VscArrowRight />
              {/* arrow icon imported using react icons, for additional standard site icons see https://react-icons.github.io/react-icons */}
            </h1>
          </button>
          {/* English */}
          <p>View the site in English</p>

          <button className="Welcome" onClick={navigateHome}>
            <h1>
              Bienvenidos <VscArrowRight />
            </h1>
          </button>
          <p>Ver el sitio en español </p>
          {/* Spanish */}

          <button className="Welcome" onClick={navigateHome}>
            <h1>
              Akeyi <VscArrowRight />
            </h1>
          </button>
          <p>Gade sit la nan kreyòl ayisyen</p>
          {/* //Haitian Creole */}

          <div className="skip">
            <button className="skip" onClick={navigateHome}>
              Skip
            </button>
            {/* All navigate home for now, Strapi to connect to different language pages */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
