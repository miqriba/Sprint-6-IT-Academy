import React from "react";
import ReactModal from "react-modal";
import { ButtonRound } from "./Components.style";

// ⚠️ Eliminar error consola 'app element is not definded'

// Usamos la herramienta react-modal como se especifica
class Modal extends React.Component {
  constructor(tipus) {
    super(tipus);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        <ButtonRound id="buttonInfo" onClick={this.handleOpenModal}>
          i
        </ButtonRound>
        <ReactModal
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={{
            overlay: {
              backgroundColor: "rgba(100, 100, 100, 0.75)",
            },
            content: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button
            style={{ backgroundColor: "#50b78b" }}
            className="align-self-end rounded border-0 text-light"
            onClick={this.handleCloseModal}
          >
            X
          </button>
          <h5 className="fw-bold m-3">{`Número de ${this.props.tipus}`}</h5>
          <p className="m-3">
            {`Afegeix el número de ${this.props.tipus} que tindrà el teu projecte. El cost
            de cada un és de 30€.`}
          </p>
        </ReactModal>
      </>
    );
  }
}

const props = {};

export default Modal;

// ReactDOM.render(<Modal {...props} />, document.getElementById("main"));
