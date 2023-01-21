function ModalScreen({ show, children }) {
    return <div className={show ? "modal" : "hiden"}>{children}</div>;
  }

  export default ModalScreen;
  