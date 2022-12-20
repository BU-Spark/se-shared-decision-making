import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopUpBtn from "./PopUpBtn";

const PopUp = ({ children }: any) => {
  return (
    <div>
      <Popup trigger={<PopUpBtn>Woop</PopUpBtn>} position="right center">
        <div>{children}</div>
      </Popup>
    </div>
  );
};
export default PopUp;
