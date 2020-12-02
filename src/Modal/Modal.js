import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isModalOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isModalOpen: true })}>
          Open modal
        </button>
        {this.state.isModalOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal Window</h1>
              <p>I am awesome modal!</p>
              <button onClick={() => this.setState({ isModalOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
