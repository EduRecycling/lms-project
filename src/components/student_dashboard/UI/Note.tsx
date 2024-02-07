interface NoteType {
  id: string;
}

const Note = ({ note }: { note: NoteType }) => {
  return (
    <div className="note">
      <span>{note.id}</span>My Note
    </div>
  );
};

export default Note;
