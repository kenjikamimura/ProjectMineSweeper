import React, { Component } from "react";

class FinishModal extends Component {
  render() {
    return (
      <div id="finishModal" className="modal ">
        <div className="modal-content light-blue lighten-5">
          <h4>Yay! You completed it!</h4>
          <p>
            You have successfully completed the puzzle! Do you recognise the
            pattern?? What is the next step??
          </p>
          <p>Hint: </p>
          <ul>
            <li>
              {"\u2022"} If the scanning doesnt work, try zooming out a little
            </li>
            <li>
              {"\u2022"} Make sure you <b>dont</b> refresh the page or else you
              will have to start again!
            </li>
          </ul>
        </div>
        <div className="modal-footer light-blue lighten-5">
          <a href="#!" className="modal-close waves-effect btn-flat">
            OK!
          </a>
        </div>
      </div>
    );
  }
}

export default FinishModal;
