import { memo } from 'react'
import style from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../redux/slice'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  const theme = useSelector(state => state.slice.theme)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header>
      <h1 className={theme === 'dark' ? style.headerTextDark : style.headerText}><em>Notes App</em></h1>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} className={theme === 'dark' ? style.nightIcon : style.dayIcon} />
      </button>
    </header>
  )
}

export default memo(Header)