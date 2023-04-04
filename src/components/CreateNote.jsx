import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from "../redux/slice";
import ColorButton from './ColorButton'

const CreateNote = () => {
  const [text, setText] = useState('')
  const selectedColor = useSelector(state => state.slice.selectedColor)
  const dispatch = useDispatch()
  
  const handleAdd = () => {
    let temporaryID = Math.floor(Math.random()*1000)
    if (text.length > 0) {
      let title = window.prompt("Type a note title", `Note ${temporaryID}`);
      if (title) {
        if (title.length > 0) {
          dispatch(addNote({
            id: temporaryID,
            title,
            content: text,
            color: selectedColor
          }))
        }
        else {
          alert('You must give a title to your note')
          return handleAdd();
        }
      }
      else {
        alert('The note could not be saved')
      }
    }
    else {
      alert('Please type your note')
    }
  }
  
  return (
    <div className="create-note">
        <textarea placeholder="Create a new note..." onChange={(e) => setText(e.target.value)}/>
        <div>
          <div className='color-palette'>
            <ColorButton value= 'red' colorClass="color red"/>
            <ColorButton value= 'purple' colorClass="color purple"/>
            <ColorButton value= 'yellow' colorClass="color yellow"/>
            <ColorButton value= 'blue' colorClass="color blue"/>
            <ColorButton value= 'green' colorClass="color green"/>
          </div>
          <button className="add-button" onClick={handleAdd}>Add</button>
        </div>
    </div>
  )
}
export default CreateNote