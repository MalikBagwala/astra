import { useEffect } from "react";
import styles from "./Modal.module.css";
type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen = true, onClose, children }: Props) => {
  function handleClose() {
    onClose?.();
  }

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.body}>
        <button className={styles.close} onClick={handleClose}>
          X
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
