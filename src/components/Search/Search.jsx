import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.scss";
import { updateSearchInput } from "../../redux/slice";

const Search = () => {
  const theme = useSelector((state) => state.slice.theme);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(updateSearchInput(e.target.value));
  };
  return (
    <div className={style.search}>
      <input
        className={theme === 'dark' ? style.darkInput : style.lightInput}
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
