import React, { Component } from "react";
import M from "materialize-css";

class StartModal extends Component {
  componentDidMount() {
    let modal = document.querySelectorAll(".modal");
    M.Modal.init(modal, { inDuration: 1000 });

    let elems = document.getElementById("startModal");
    M.Modal.getInstance(elems).open();
  }

  render() {
    return (
      <div id="startModal" className="modal ">
        <div className="modal-content light-blue lighten-5">
          <h4>HAPPY BIRTHDAY KIMBERLEY!!!</h4>
          <p>
            I know how much you looove playing Mine Sweeper... so here is a
            little game for you to play to get to your present!
          </p>
          <p>A couple of points: </p>
          <ul>
            <li>{"\u2022"} I Recommend completing this on a computer</li>
            <li>{"\u2022"} You will know when you have completed the game</li>
            <li>
              {"\u2022"} You can save your progress using the save checkpoint
              button, but you only have a limited amount
            </li>
            <li>
              {"\u2022"} If you run out of checkpoints and want to start again,
              click the reset button
            </li>
            <li>
              {"\u2022"} If you refresh the page, the game will reset completey!
            </li>
          </ul>
        </div>
        <div className="modal-footer light-blue lighten-5">
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

export default StartModal;
