import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddConfirm } from "../../redux/slice";
import style from "./CreateNote.module.scss";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Preview from "../Preview/Preview";
import Dialog from "../Dialog/Dialog";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [canAdd, setCanAdd] = useState(false);
  const [textPalette, setTextPalette] = useState(false);
  const [mainPalette, setMainPalette] = useState(false);

  const [color, setColor] = useColor("hex", "#fff");
  const [textColor, setTextColor] = useColor("hex", "#000");

  const { theme, confirmAdd } = useSelector((state) => state.slice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (title.length > 0 && content.length > 0) {
      setCanAdd(true);
    } else {
      setCanAdd(false);
    }
  }, [title, content, canAdd]);

  const handleAdd = () => {
    dispatch(toggleAddConfirm(true))
  }

  return (
    <div className={style.createNote}>
      <div className={style.flexColumnCenter}>
        <p className={theme === "dark" ? style.pDark : style.pLight}>
          <em>Title</em>
        </p>
        <textarea
          className={theme === "dark" ? style.titleDark : style.title}
          placeholder="Title here..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={style.flexColumnCenter}>
        <p className={theme === "dark" ? style.pDark : style.pLight}>
          <em>Note</em>
        </p>
        <textarea
          className={theme === "dark" ? style.descDark : style.desc}
          placeholder="Note here..."
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button
        className={theme === "dark" ? style.addButtonDark : style.addButton}
        onClick={handleAdd}
        disabled={!canAdd}
      >
        Add
      </button>
      
      <div className={style.colorsContainer}>
        <div className={`${style.colorDivision} ${style.flexColumnCenter}`} >
          <button
            className={style.colorButton}
            style={{ backgroundColor: textColor.hex }}
            onClick={() => setTextPalette(!textPalette)}
          >
            Set Text Color
          </button>
          {textPalette && (
            <ColorPicker
              width={300}
              height={200}
              color={textColor}
              onChange={setTextColor}
              hideHSV
              hideRGB
              dark
            />
          )
          }
        </div>

        <div className={`${style.colorDivision} ${style.flexColumnCenter}`}>
          <button
            className={style.colorButton}
            style={{ backgroundColor: color.hex }}
            onClick={() => setMainPalette(!mainPalette)}
          >
            Set Main Color
          </button>
          {mainPalette && (
              <ColorPicker
                width={300}
                height={200}
                color={color}
                onChange={setColor}
                hideHSV
                hideRGB
                dark
              />
          )}
        </div>
      </div>

      <Preview
        color={color}
        textColor={textColor}
        title={title}
        content={content}
      />

      {confirmAdd && <Dialog title={title} content={content} textColor={textColor.hex} color={color.hex} type='add'/>}
    </div>
  );
};

export default CreateNote;