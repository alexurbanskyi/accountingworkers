import './ModalScreen.css'
function ModalScreen({ show, children }) {
    return <div className={show ? "modal-screen" : "hiden-screen"}>{children}</div>;
  }

  export default ModalScreen;
  