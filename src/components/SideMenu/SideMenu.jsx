import { useSelector } from "react-redux";
import style from "./SideMenu.module.scss";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const theme = useSelector(state => state.slice.theme)

  return (
    <div className={style.sideMenu}>
      <Link to="/create">
        <button className={theme === 'dark' ? style.buttonDark : style.buttonLight}>Create Note</button>
      </Link>
      <Link to="/">
        <button className={theme === 'dark' ? style.buttonDark : style.buttonLight}>Show Notes</button>
      </Link>
    </div>
  )
}

export default SideMenu;
