import React, { useState, useEffect } from "react";
import "./App.css";

import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

import { getNotes } from "./services/note";

function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getNotes()
      .then((notes) => setNotes(notes))
      .catch((err) => setError(err.message));
  }, []);

  const onAddNote = (note) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Note-Taking App</h1>
      {error !== "" ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <AddNote onAddNote={onAddNote} />
          <h3>Previous Notes</h3>
          <NoteList notes={notes} />
        </>
      )}
    </div>
  );
}

export default App;
