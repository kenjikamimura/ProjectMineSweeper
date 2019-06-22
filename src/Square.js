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
          (this.props.isBlack === false
            ? "square whiteSquare "
            : "square blackSquare ") +
          (this.props.hintNumbersHidden ? "blackText " : "whiteText ")
        }
        onClick={this.handleClick}
        ref={buttonDOM => {
          this.buttonDOM = buttonDOM;
        }}
      >
        {this.props.isBlack === false ? "\u2001" : this.props.isBlack}
      </button>
    );
  }
}

export default Square;
