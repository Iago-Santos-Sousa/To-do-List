const Modal = ({ children, title }) => {
  const closeModal = (): void => {
    const modal = document.getElementById("modal");
    modal!.classList.add("hide");
  };
  return (
    <div id="modal" className="hide">
      <div className="" onClick={closeModal}></div>
      <div className="">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
