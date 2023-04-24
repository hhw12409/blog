import { Dispatch, SetStateAction, useEffect } from 'react';
import ToastPopup from './ToastPopup';


interface ISnackBar {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  onClick?: () => void;
}

function SnackBar({ text, setText, onClick }: ISnackBar) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (text) {
        setText('');
      }
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [text, setText]);
  return text ? <ToastPopup onClick={onClick}>{text}</ToastPopup> : <></>;
}

export default SnackBar;
