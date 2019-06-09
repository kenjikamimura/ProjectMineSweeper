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
        className={this.props.isBlack ? "blackSquare" : "whiteSquare"}
        onClick={this.handleClick}
        ref={buttonDOM => {
          this.buttonDOM = buttonDOM;
        }}
      />
    );
  }
}

export default Square;
