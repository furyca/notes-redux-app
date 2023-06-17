import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import style from "./NotePage.module.scss";
import { toggleConfirm } from "../../redux/slice";
import Dialog from "../Dialog/Dialog";

const NotePage = () => {
  const params = useParams();
  const { theme, noteList, confirmId } = useSelector((state) => state.slice);

  const dispatch = useDispatch();

  const note = noteList.find((note) => note.id === params.id);

  const handleDelete = () => {
    dispatch(toggleConfirm(note.id))
  };

  return (
    <>
    {note ? <div
      className={`${theme === "dark" ? style.darkPage : ""}  ${
        style.noteLayout
      }`}
      style={{ backgroundColor: note.color }}
    >
      <button className={style.deleteButton} onClick={handleDelete}>X</button>
      <h3 style={{ color: note.textColor }}>{note.title}</h3>
      <p style={{ color: note.textColor }}>
        <em>{note.content}</em>
      </p>
    </div> 
    : 
    <Navigate to="/" />}
    {note && confirmId === note.id && <Dialog title={note.title} content={note.content} id={note.id}/>}

    </>
  );
};

export default NotePage;
