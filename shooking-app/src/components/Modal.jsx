import "./Modal.css";

const Modal = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="Modal">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
