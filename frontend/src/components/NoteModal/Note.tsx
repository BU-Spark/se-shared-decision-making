import React from "react";
import NewNote from "./NewNoteModal";
import { VscChromeClose } from "react-icons/vsc";
//Just returns the note component and calls the Modal properties
function Note(props: any, { children }: any) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="title">
      <h1> My Pins </h1>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setModalShow(true)}
      >
        <VscChromeClose />
      </button>
      <NewNote
        show={modalShow}
        addNote={props.addNote}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Note;
