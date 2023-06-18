import style from './Dialog.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, addNote, toggleDeleteConfirm, toggleAddConfirm } from "../../redux/slice";
import { nanoid } from '@reduxjs/toolkit';

const Dialog = ( {title, content, id, type, textColor, color}) => {
  const theme = useSelector(state => state.slice.theme)
  const dispatch = useDispatch();

  const handleYes = () => {
    dispatch(toggleAddConfirm(false))
    type === 'delete' ? dispatch(deleteNote(id))
    :
    dispatch(
      addNote({
        id: nanoid(),
        title,
        content,
        textColor,
        color,
      })
    )
  }

  const handleNo = () => {
    dispatch(toggleAddConfirm(false))

    type === 'delete' && dispatch(toggleDeleteConfirm(0))
  }

  return (
    <div className={theme === 'dark' ? style.dialogDark : style.dialog}>
      <div className={theme === 'dark' ? style.innerDialogDark : style.innerDialog}>
        {type === 'delete' ? <h3>Delete {title}?</h3> : <h3>Add {title}?</h3>}
        <p>{content}</p>
        <div className={style.buttons}>
          <button className={style.option} onClick={handleNo}>No</button>
          <button className={style.option} onClick={handleYes}>Yes</button>
        </div>
        
      </div>
    </div>
  )
}

export default Dialog