import React, { Component } from "react";
import Board from "./Board";
import "./index.css";

import answerArray, { blankArray } from "./constants/answerArray";
import TopBanner from "./TopBanner";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: JSON.parse(JSON.stringify(blankArray)),
      bannerHidden: false
    };
  }

  handleClick(row, column) {
    let squares = this.state.squares;
    if (answerArray[row][column] === true) {
      squares[row][column] = true;
      const numberOfCorrectSurroundingSquares = this.findNumberOfCorrectSurroundingSquares(
        row,
        column
      );
      console.log(
        "correctSurroundingSquares",
        numberOfCorrectSurroundingSquares
      );
    } else {
      squares = JSON.parse(JSON.stringify(blankArray));
      console.log("blankarray:", blankArray);
    }
    console.log("sqaures", squares);

    this.setState({ squares });

    console.log(row, column);
  }

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

  render() {
    console.log("state", this.state);

    return (
      <div className="game">
        <div className="container grey lighten-2">
          <div className="container ">
            <div className="row center">
              <div className="col s12 center">
                <div className={this.state.bannerHidden ? "hide" : ""}>
                  <TopBanner hideBanner={this.hideBanner} />
                </div>

                <div className="card blue-grey darken-1">
                  <div className="card-content white-text ">
                    <div className="">
                      <Board
                        className=""
                        squares={this.state.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                      />
                    </div>
                  </div>
                </div>
                <div className="vertical-align">
                  <button
                    className=" btn teal darken-3"
                    onClick={this.showAnswer}
                  >
                    Show Answer
                  </button>
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
