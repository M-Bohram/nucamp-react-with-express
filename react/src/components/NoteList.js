
function NoteList({ notes }) {

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note._id} className="note">
          <p>Title: {note.title}</p>
          <p>Priority: {note.priority}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
