import React, { Component } from "react";
import Board from "./Board";
import "./index.css";

import answerArray, { blankArray } from "./constants/answerArray";
import StartModal from "./Modals/StartModal";
import FinishModal from "./Modals/FinishModal";
import CheckpointButtons from "./CheckpointButtons";

import M from "materialize-css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: JSON.parse(JSON.stringify(blankArray)),
      hintNumbersHidden: false,
      numberOfSaves: 50,
      resetState: JSON.parse(JSON.stringify(blankArray)),
      gameComplete: false
    };
  }

  handleClick(row, column) {
    let squares = this.state.squares;
    if (answerArray[row][column] === true) {
      squares[row][column] = this.findNumberOfCorrectSurroundingSquares(
        row,
        column
      );
      if (this.checkIfWon()) {
        let elems = document.getElementById("finishModal");
        M.Modal.getInstance(elems).open();

        this.hideNumbers();
        this.saveCheckpoint();
      }
    } else {
      squares = JSON.parse(JSON.stringify(this.state.resetState));
    }

    this.setState({ squares });
  }

  checkIfWon = () => {
    for (let i = 0; i < this.state.squares.length; i++) {
      for (let j = 0; j < this.state.squares.length; j++) {
        if (answerArray[i][j]) {
          if (this.state.squares[i][j] === false) {
            return false;
          }
        }
      }
    }
    return true;
  };

  getValueFromBlockOfInterest = (row, col) => {
    try {
      const blockOfInterest = !!answerArray[row][col];
      return blockOfInterest;
    } catch {
      return false;
    }
  };

  findNumberOfCorrectSurroundingSquares = (row, col) => {
    let numberOfCorrectSurroundingSquares = 0;
    if (this.getValueFromBlockOfInterest(row - 1, col - 1))
      numberOfCorrectSurroundingSquares++;
    if (this.getValueFromBlockOfInterest(row - 1, col))
      numberOfCorrectSurroundingSquares++;
    if (this.getValueFromBlockOfInterest(row - 1, col + 1))
      numberOfCorrectSurroundingSquares++;
    if (this.getValueFromBlockOfInterest(row, col - 1))
      numberOfCorrectSurroundingSquares++;
    if (this.getValueFromBlockOfInterest(row, col + 1))
      numberOfCorrectSurroundingSquares++;
    if (this.getValueFromBlockOfInterest(row + 1, col - 1))
      numberOfCorrectSurroundingSquares++;
    if (this.getValueFromBlockOfInterest(row + 1, col))
      numberOfCorrectSurroundingSquares++;
    if (this.getValueFromBlockOfInterest(row + 1, col + 1))
      numberOfCorrectSurroundingSquares++;
    return numberOfCorrectSurroundingSquares;
  };

  hideBanner = () => {
    this.setState({
      bannerHidden: true
    });
  };

  showAnswer = () => {
    this.setState({
      squares: answerArray
    });
  };

  hideNumbers = () => {
    this.setState({
      hintNumbersHidden: true
    });
  };

  saveCheckpoint = () => {
    if (this.state.numberOfSaves > 0) {
      this.setState({
        numberOfSaves: this.state.numberOfSaves - 1,
        resetState: JSON.parse(JSON.stringify(this.state.squares))
      });
    }
  };

  reset = () => {
    this.setState({
      squares: JSON.parse(JSON.stringify(blankArray)),
      hintNumbersHidden: false,
      numberOfSaves: 5,
      resetState: JSON.parse(JSON.stringify(blankArray))
    });
  };

  render() {
    return (
      <div className="cyan lighten-5">
        <div className="row center">
          <div className="col s12">
            <StartModal />
            <FinishModal gameComplete={this.state.gameComplete} />

            <div className="card light-blue lighten-5 boardCard ">
              <div className="card-content">
                <Board
                  className="boardCard"
                  squares={this.state.squares}
                  hintNumbersHidden={this.state.hintNumbersHidden}
                  onClick={(row, col) => this.handleClick(row, col)}
                />
              </div>
              <CheckpointButtons
                numberOfSaves={this.state.numberOfSaves}
                saveCheckpoint={this.saveCheckpoint}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
