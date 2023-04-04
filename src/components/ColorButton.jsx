import { useSelector, useDispatch } from "react-redux"
import { pickColor } from "../redux/slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ColorButton = ( {value, colorClass} ) => {
    const dispatch = useDispatch();
    const selectedColor = useSelector(state => state.slice.selectedColor)

    const handleClick = (e) => {
        dispatch(pickColor(e.target.value))
    }

    return (
        <>
            <button
                value= {value}
                className= {colorClass}
                onClick={handleClick}
            >
                {selectedColor === value && <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff"}} />}
            </button>
        </>
  )
}

export default ColorButton