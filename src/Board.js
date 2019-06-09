import React, { Component } from "react";
import Square from "./Square";
class Board extends React.Component {
  renderSquare(i, j) {
    return (
      <Square
        isBlack={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i, j)}
      />
    );
  }

  createBoard = () => {
    const matrixSize = this.props.squares.length;
    let board = [];
    for (let i = 0; i < matrixSize; i++) {
      let boardRow = [];
      boardRow.push(<div className="board-row" />);
      for (let j = 0; j < matrixSize; j++) {
        boardRow.push(
          <Square
            key={i + " " + j}
            isBlack={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i, j)}
          />
        );
      }
      board.push(boardRow);
    }
    return board;
  };

  render() {
    return <div>{this.createBoard()}</div>;
  }
}

export default Board;
