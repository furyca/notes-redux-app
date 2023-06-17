import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../redux/slice";
import style from "./CreateNote.module.scss";
import { nanoid } from "@reduxjs/toolkit";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Preview from "../Preview/Preview";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [canAdd, setCanAdd] = useState(false);
  const [textPalette, setTextPalette] = useState(false);
  const [mainPalette, setMainPalette] = useState(false);

  const [color, setColor] = useColor("hex", "#fff");
  const [textColor, setTextColor] = useColor("hex", "#000");

  const { theme } = useSelector((state) => state.slice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (title.length > 0 && content.length > 0) {
      setCanAdd(true);
    } else {
      setCanAdd(false);
    }
  }, [title, content, canAdd]);

  const handleAdd = () => {
    let text = `Add Note: ${title}?`;

    if (window.confirm(text)) {
      dispatch(
        addNote({
          id: nanoid(),
          title,
          content,
          textColor: textColor.hex,
          color: color.hex,
        })
      );
    }
    return;
  };

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

      <div className={style.colorsContainer}>
        <div className={`${style.colorDivision} ${style.flexColumnCenter}`}>
          <button
            className={style.colorButton}
            style={{ backgroundColor: textColor.hex }}
            onClick={() => setTextPalette(!textPalette)}
          >
            Set Text Color
          </button>
          {textPalette && (
            <div>
              <ColorPicker
                width={320}
                height={200}
                color={textColor}
                onChange={setTextColor}
                hideHSV
                hideRGB
                dark
              />
            </div>
          )}
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
            <div>
              <ColorPicker
                width={320}
                height={200}
                color={color}
                onChange={setColor}
                hideHSV
                hideRGB
                dark
              />
            </div>
          )}
        </div>
      </div>

      <button
        className={theme === "dark" ? style.addButtonDark : style.addButton}
        onClick={handleAdd}
        disabled={!canAdd}
      >
        Add
      </button>

      <Preview
        color={color}
        textColor={textColor}
        title={title}
        content={content}
      />
    </div>
  );
};
export default CreateNote;
