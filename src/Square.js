import React, { Component } from "react";
import "./index.css";

class Square extends Component {
  render() {
    return (
      <button
        className={this.props.isBlack ? "blackSquare" : "whiteSquare"}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Square;
