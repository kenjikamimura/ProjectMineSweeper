import React, { Component } from "react";
import Board from "./Board";
import "./index.css";

import answerArray, { blankArray } from "./constants/answerArray";
import StartModal from "./Modals/StartModal";
import FinishModal from "./Modals/FinishModal";

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

        this.toggleNumbers();
      }
      console.log("correctSurroundingSquares", squares[row][column]);
    } else {
      squares = JSON.parse(JSON.stringify(this.state.resetState));
      console.log("blankarray:", blankArray);
    }
    console.log("sqaures", squares);

    this.setState({ squares });

    console.log(row, column);
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
      // console.log("blockOfInterest", blockOfInterest);
      return blockOfInterest;
    } catch {
      console.log("caught ya");
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

  toggleNumbers = () => {
    this.setState({
      hintNumbersHidden: !this.state.hintNumbersHidden
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
    console.log("state", this.state);

    return (
      <div className="game">
        <div className=" cyan lighten-5 center">
          <div className=" ">
            <div className="row center">
              <div className="col s12 center">
                <StartModal />
                <FinishModal gameComplete={this.state.gameComplete} />

                <div className="card  light-blue lighten-5  boardCard ">
                  <div className="card-content white-text ">
                    <div className="">
                      <Board
                        className="boardCard"
                        squares={this.state.squares}
                        hintNumbersHidden={this.state.hintNumbersHidden}
                        onClick={(i, j) => this.handleClick(i, j)}
                      />
                    </div>
                  </div>
                  <div className="vertical-align">
                    <div className="row">
                      <div className="col s4">
                        <button className=" btn btn-small cyan darken-1  s3">
                          Saves Left: {this.state.numberOfSaves}
                        </button>
                      </div>

                      <div className="col s4">
                        <button
                          className=" btn btn-small cyan darken-1  s3"
                          onClick={this.saveCheckpoint}
                        >
                          Save Checkpoint
                        </button>
                      </div>
                      <div className="col s4">
                        <button
                          className=" btn btn-small cyan darken-1  s3"
                          onClick={this.reset}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
