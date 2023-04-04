const Note = ( {title, color, content} ) => {
  return (
    <button
      className="note-button"
      style={{backgroundColor:color}}
      onClick={() => alert(`Note Title: ${title} \n\nNote Content: ${content}`)}
    >
      {title}
    </button>
  )
}

export default Note