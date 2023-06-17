import { useSelector } from "react-redux";
import Note from "../Note/Note";
import style from "./Notes.module.scss";

const Notes = () => {
  const noteList = useSelector((state) => state.slice.noteList);
  const searchInput = useSelector((state) => state.slice.searchInput);

  const allNotes = noteList.map((note) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        color={note.color}
        content={note.content}
        textColor={note.textColor}
      />
    );
  });

  const filterednotes = noteList.filter(note => note.title.includes(searchInput)).map(note => {
    return (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        color={note.color}
        content={note.content}
        textColor={note.textColor}
      />
    )
  })

  return (
    <>
      {noteList.length > 0 ? (
        <ul className={style.notes}>
          {searchInput.length < 1 ? allNotes : filterednotes.length > 0 ? filterednotes :
            <p>No Matching Notes Found</p>
          }
        </ul>
      ) : (
        <div className={style.notes}>
          <p>No Notes Found</p>
        </div>
      )}
    </>
  );
};

export default Notes;

