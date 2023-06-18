import style from "./Note.module.scss";
import { Link } from "react-router-dom";
import Dialog from "../Dialog/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteConfirm } from "../../redux/slice";

const Note = ({ title, color, content, textColor, id }) => {
  const confirmId = useSelector(state => state.slice.confirmId)
  const dispatch = useDispatch()
  
  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(toggleDeleteConfirm(id))
  };

  return (
    <>
    <Link to={`${id}`} className={style.link} style={{ color: textColor }}>
      <li className={style.note} style={{ backgroundColor: color }}>
        <button className={style.deleteButton} onClick={(e) => handleDelete(e)}>
          X
        </button>
        <h4>{title}</h4>
        <p className={style.textClamp}>
          <em>{content}</em>
        </p>
      </li>
    </Link>
    {confirmId === id && <Dialog title={title} content={content}  id={id} type='delete'/>}
    </>
  );
};

export default Note;
