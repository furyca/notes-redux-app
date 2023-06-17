import Header from "../Header/Header";
import CreateNote from "../CreateNote/CreateNote";
import Notes from "../Notes/Notes";
import style from "./App.module.scss";
import Search from "../Search/Search";
import SideMenu from "../SideMenu/SideMenu";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import NotePage from "../NotePage/NotePage";

function App() {
  const theme = useSelector(state => state.slice.theme)
  
  return (
    <div className={theme === 'dark' ? style.darkBody : ''}>
      <Header />
      <div className={theme === 'dark' ? style.outerContainerDark : style.outerContainer}>
        <aside>
          <SideMenu />
        </aside>
        <div className={style.container}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search />
                  <Notes />
                </>
              }
            />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/:id" element={<NotePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
