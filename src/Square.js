import React, { Component } from "react";
import "./index.css";

class Square extends Component {
  handleClick = () => {
    this.buttonDOM.blur();
    this.props.onClick();
  };
  render() {
    return (
      <button
        className={
          (this.props.isBlack ? "square blackSquare " : "square whiteSquare ") +
          (this.props.hintNumbersHidden ? "blackText " : "whiteText ")
        }
        onClick={this.handleClick}
        ref={buttonDOM => {
          this.buttonDOM = buttonDOM;
        }}
      >
        {!!this.props.isBlack
          ? this.props.isBlack === true
            ? "."
            : this.props.isBlack
          : "\u2001"}
      </button>
    );
  }
}

export default Square;
