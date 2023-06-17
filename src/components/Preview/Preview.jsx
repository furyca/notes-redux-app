import { useSelector } from 'react-redux';
import style from './Preview.module.scss'

const Preview = ( { color, textColor, title, content } ) => {
    const { theme } = useSelector((state) => state.slice);

  return (
    <div className={style.workspace}>
        <div>
        <p className={theme === "dark" ? style.pDark : style.pLight}>
          <em>Preview</em>
        </p>
          <div className={style.preview} style={{ backgroundColor: color.hex }}>
            <h3 className={style.prevTitle} style={{ color: textColor.hex }}>
              {title.length < 1 ? 'Title' : title}
            </h3>
            <p className={style.prevClamp} style={{ color: textColor.hex }}>
              <em>{content.length < 1 ? 'Content' : content}</em>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Preview