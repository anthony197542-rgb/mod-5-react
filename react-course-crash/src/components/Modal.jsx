import './Modal.css'

function Modal ({title, cancelModal, confirmModal}) {
    return (
        <>
        <div className="Modal">
            <p className="modal__title">{title}</p>
            <div className="modal__buttons">
                <button onClick={cancelModal}
                  >
                    Cancel
                    </button> 
                <button onclick={confirmModal}
                  Confirm
                  </button>
                </div>
                </div>
                <div className="backdrop" />
                </>
              );
            }

export default Modal;