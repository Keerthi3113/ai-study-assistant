import ReactMarkdown from "react-markdown";

function NoteCard({ note, deleteNote }) {

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-bold mb-2">{note.title}</h2>

      <div className="mb-4 whitespace-pre-wrap leading-7 text-gray-700">
  {note.content}
</div>

      <button
        onClick={() => deleteNote(note.id)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default NoteCard;