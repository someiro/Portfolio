import styles from "./modal.module.css";

type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  let open, children;

  if (props.open) {
    open = props.open;
  } else {
    open = false;
  }
  if (props.children) {
    children = props.children;
  } else {
    children = null;
  }

  if (!open) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
