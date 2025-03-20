// src/components/Modal.jsx
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <h2>Box spécifique</h2>
        <p>Ceci est une info spéciale !</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    );
  }
  
  export default Modal;
  