import React, { Component } from "react";
import Board from "./Board";

import answerArray, { blankArray } from "./constants/answerArray";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: JSON.parse(JSON.stringify(blankArray)),
      bannerHidden: false
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
        <div className="container">
          <div className="grey lighten-2">
            <div className="container ">
              <div className="row center">
                <div className="col s12 center">
                  <div className={this.state.bannerHidden ? "hide" : ""}>
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">
                          HAPPY BIRTHDAY KIMBERLEY!!!
                        </span>
                        <p>
                          I know how much you love playing Mine Sweeper so here
                          is a little game for you to play to get to your
                          present!
                        </p>
                      </div>
                      <div className="card-action">
                        <a
                          className="white-text"
                          href="#"
                          onClick={this.hideBanner}
                        >
                          Got it!
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card blue-grey darken-1 ">
                    <div className="card-content white-text ">
                      <div className="">
                        <Board
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
      </div>
    );
  }
}

export default Game;
