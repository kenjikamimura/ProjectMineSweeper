import React, { Component } from "react";
import M from "materialize-css";

class FinishModal extends Component {
  render() {
    return (
      <div id="finishModal" className="modal ">
        <div className="modal-content red lighten-5">
          <h4>Yay! You completed it!</h4>
          <p>
            You have successfully completed the puzzle! Do you recognise the
            patter?? What is the next step??
          </p>
          <p>Hint: </p>
          <ul>
            <li>
              {"\u2022"} If the scanning doesnt work, try zooming out a little
            </li>
          </ul>
        </div>
        <div className="modal-footer red lighten-5">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            OK!
          </a>
        </div>
      </div>
    );
  }
}

export default FinishModal;
