import { ModalType } from "../../types/MyTypes";
import styles from "./Modal.module.css";

const Modal = ({ children, openModal, setOpenModal }: ModalType): JSX.Element | undefined => {
  if (!openModal) {
    return;
  }

  return (
    <div id="modal" className="">
      <div className={styles.backgroundStyle} onClick={() => setOpenModal(false)}></div>
      <div className={styles.modalStyle}>
        {children}
        <button
          style={{ display: "block", margin: "1.5rem auto 0" }}
          onClick={() => setOpenModal(false)}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
