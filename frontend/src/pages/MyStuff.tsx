import Layout from "../components/Layout";
import "../components/NoteModal/Note.css";
import Note from "../components/NoteModal/Note";
import NewNote from "../components/NoteModal/NewNoteModal";
import React, { useState } from "react";
import Checklist from "../components/checklists/Checklist";

export default function MyStuff() {
  const [notes, setNote] = useState([""]);
  const [modalShow, setModalShow] = useState(false);
  const [noteIndex, setIndex] = useState(0);

  const addNote = function (value: string) {
    return setNote((notes) => [...notes, value]);
  };

  const deleteNote = (index: any) => {
    notes.splice(index, 1);
    setNote((notes) => [...notes]);
  };

  const editNote = (value: string) => {
    notes.splice(noteIndex, 1);
    setNote((notes) => [...notes, value]);
  };

  const editNoteIndex = (index: any) => {
    setIndex(index);
  };

  return (
    <Layout>
      <div>
        <Checklist />
        <Note addNote={addNote} />
        <div className="parent">
          {notes.map((note, index) => {
            return (
              <div className="child" key={index}>
                {" "}
                <div>
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => deleteNote(index)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  onClick={() => {
                    setModalShow(true);
                    editNoteIndex(index);
                  }}
                >
                  {" "}
                  {note}{" "}
                </div>
                <NewNote
                  show={modalShow}
                  editNote={editNote}
                  notes={notes}
                  index={noteIndex}
                  onHide={() => setModalShow(false)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

// const MyStuff = () => {
//   return (

//   );
// };

// export default MyStuff;
