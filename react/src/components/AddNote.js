import { useState } from "react";
import Toaster from "./Toaster";
import useToaster from "../hooks/useToaster";

import { addNote } from "../services/note";

const AddNote = ({ onAddNote }) => {
  const [newNote, setNewNote] = useState("");
  const [priority, setPriority] = useState("");

  const { toast, showToast } = useToaster();

  const addNoteHandle = async (e) => {
    e.preventDefault()
    try {
        const note = { 
            title: newNote,
            priority
        }

        const res = await addNote(note)

        console.log(res)
    
        onAddNote(note)
        showToast("A note was added!", "success")
        
        setNewNote("");
        setPriority("");
    } catch (err) {
        showToast("Failed to add note!", "error")
    }
  };

  return (
    <div className="input-area">
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add a new note"
        className="input-field"
      />
      <input
        type="text"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        placeholder="Set the priority {Low, Medium, High}"
        className="input-field"
      />
      <button onClick={addNoteHandle} className="add-btn">
        Add Note
      </button>
      <Toaster message={toast.message} type={toast.type} />
    </div>
  );
};

export default AddNote;
