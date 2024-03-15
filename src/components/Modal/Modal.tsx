import styles from "./Modal.module.css";
type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Modal = ({}: Props) => {
  return <div className={styles.base}>Modal</div>;
};

export default Modal;
