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

  //typing is important in typescript, contrary to regular React, pls make sure to include types (like :any to your code)

  const addNote = function (value: string) {
    return setNote((notes) => [...notes, value]);
  };

  const deleteNote = (index: any) => {
    notes.splice(index, 1);
    setNote((notes) => [...notes]);
  };

  //note is deleted using splice feature, splice returns orifinal notes index, prior to addition

  const editNote = (value: string) => {
    notes.splice(noteIndex, 1);
    setNote((notes) => [...notes, value]);
  };
  //using feature, edits previousy created notes, and pushes new notes (from index where edits happened) to notes array

  const editNoteIndex = (index: any) => {
    setIndex(index);
  };

  //returns index of where edit occurs

  return (
    <Layout>
      <div>
        <Checklist />
        <Note addNote={addNote} />
        <div className="parent">
          {/* map function, iterates over notes array to return as unordered list items */}
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
