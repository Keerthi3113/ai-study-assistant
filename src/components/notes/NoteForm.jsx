import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    addNote({
      id: Date.now(),
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow mb-8"
    >
      <h2 className="text-xl font-bold mb-4">Add Note</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-3 rounded mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        className="w-full border p-3 rounded mb-4"
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded"
        type="submit"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;