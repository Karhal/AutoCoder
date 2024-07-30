const Modal = ({ isOpen, onClose, children }) => (
  <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
    <div className='modal-content'>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Modal;
