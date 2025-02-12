import { useContext } from "react";
import style from "./EmailDisplay.module.css";
import { EmailThemeContext } from '@/app/component/sidebar';

export default function EmailDisplay() {
  const displayStyle: any = useContext(EmailThemeContext);
  
  if (!displayStyle) {
    throw new Error("EmailDisplay must be used within an EmailThemeProvider");
  }

  return (
    <div className={style.modalContainer} style={{ display: displayStyle.display }}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <h3>Email</h3>
          <button className={style.closeBtn} onClick={() => { displayStyle.setDisplay('none') }}>✕</button>
        </div>
        <div className={style.modalContent}>
          xushx@hhu.edu.cn
        </div>
      </div>
    </div>
  );
}