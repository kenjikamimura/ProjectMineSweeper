import React, { Component } from "react";
import Board from "./Board";

import blankArray from "./constants/blankArray";
import answerArray from "./constants/answerArray";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: JSON.parse(JSON.stringify(blankArray))
    };
  }

  handleClick(i, j) {
    let squares = this.state.squares;
    if (answerArray[i][j] === true) {
      squares[i][j] = true;
    } else {
      squares = JSON.parse(JSON.stringify(blankArray));
      console.log("blankarray:", blankArray);
    }
    console.log("sqaures", squares);

    this.setState({ squares });

    console.log(i, j);
  }

  render() {
    console.log("state", this.state);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
