import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import NoteForm from "../components/notes/NoteForm";
import NoteCard from "../components/notes/NoteCard";

function Notes() {
  // Load notes from localStorage when component starts
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Save notes whenever they change
  useEffect(() => {
    console.log("Saving to localStorage:", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  console.log("Current Notes:", notes);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">📝 My Notes</h1>

      <NoteForm addNote={addNote} />

      <div className="grid md:grid-cols-2 gap-6">
        {notes.length === 0 ? (
          <p>No notes yet.</p>
        ) : (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          ))
        )}
      </div>
    </MainLayout>
  );
}

export default Notes;