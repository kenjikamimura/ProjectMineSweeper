import React from "react";
import Square from "./Square";

export default function Board(props) {
  const matrixSize = props.squares.length;
  let board = [];

  for (let row = 0; row < matrixSize; row++) {
    let boardRow = [];
    boardRow.push(<div className="board-row" />);

    for (let column = 0; column < matrixSize; column++) {
      boardRow.push(
        <Square
          key={row + " " + column}
          isBlack={props.squares[row][column]}
          hintNumbersHidden={props.hintNumbersHidden}
          onClick={() => props.onClick(row, column)}
        />
      );
    }

    board.push(boardRow);
  }
  return <div>{board}</div>;
}
