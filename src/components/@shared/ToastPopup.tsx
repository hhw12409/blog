import styles from "./ToastPopup.module.css";

interface IToastPopup {
  children: string;
  onClick?: () => void;
}

function ToastPopup({ children, onClick }: IToastPopup) {
  return (
    <div id={styles.toast_popup} onClick={onClick}>
      {children}
    </div>
  );
}

export default ToastPopup;
