import React from "react";
import Square from "./Square";

const createBoard = props => {
  const matrixSize = props.squares.length;
  let board = [];
  for (let i = 0; i < matrixSize; i++) {
    let boardRow = [];
    boardRow.push(<div className="board-row" />);
    for (let j = 0; j < matrixSize; j++) {
      boardRow.push(
        <Square
          key={i + " " + j}
          isBlack={props.squares[i][j]}
          onClick={() => props.onClick(i, j)}
        />
      );
    }
    board.push(boardRow);
  }
  return board;
};

export default function Board(props) {
  return <div>{createBoard(props)}</div>;
}
