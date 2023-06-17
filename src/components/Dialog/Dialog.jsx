import style from './Dialog.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, toggleConfirm } from "../../redux/slice";

const Dialog = ( {title, content, id}) => {
  const theme = useSelector(state => state.slice.theme)

  const dispatch = useDispatch();

  return (
    <div className={theme === 'dark' ? style.dialogDark : style.dialog}>
      <div className={theme === 'dark' ? style.innerDialogDark : style.innerDialog}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={style.buttons}>
          <button className={style.option} onClick={() => dispatch(toggleConfirm(0))}>No</button>
          <button className={style.option} onClick={() => dispatch(deleteNote(id))}>Yes</button>
        </div>
        
      </div>
    </div>
  )
}

export default Dialog