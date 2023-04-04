import { useSelector } from "react-redux"
import Note from "./Note"
import { useState } from "react";

const Notes = () => {
  const [searchInput, setSearchInput] = useState('');
  const noteList = useSelector(state => state.slice.noteList)

  const allNotes = noteList.map(note => {
    return (
      <Note
      key={note.id}
      title={note.title}
      color={note.color}
      content={note.content}
    />
    )})

    const filterNotes = noteList.filter(note => {
      return note.title.includes(searchInput)
    })

    const filterednotes = noteList.map(note => {
      return note.title.includes(searchInput) && 
      <Note
        key={note.id}
        title={note.title}
        color={note.color}
        content={note.content}
      />
    })


  return (
    <>
      <div className="search">
        <input type='text' placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)}/>
      </div>
      {noteList.length > 0 ? <ul className="notes">
        {searchInput.length < 1 ? allNotes : filterNotes.length > 0 ? filterednotes : <p>No Notes Found</p>}
      </ul> :
      <ul className="notes"><p>No Notes Found</p></ul>
      }
    </>
    
  )
}

export default Notes