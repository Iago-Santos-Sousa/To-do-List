import { ModalType } from "../../types/MyTypes";
import styles from "./Modal.module.css";

const Modal = ({ children, title, openModal, setOpenModal }: ModalType) => {
  // const closeModal = (): void => {
  //   const modal = document.getElementById("modal");
  //   modal!.classList.add("hide");
  // };

  if (!openModal) {
    return;
  }

  return (
    <div id="modal" className="">
      <div className={styles.backgroundStyle} onClick={() => setOpenModal(false)}></div>
      <div className={styles.modalStyle}>
        <div style={{ cursor: "pointer" }} onClick={() => setOpenModal(false)}>
          x
        </div>
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={() => setOpenModal(false)}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
