import React from "react";

export default function TopBanner(props) {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">HAPPY BIRTHDAY KIMBERLEY!!!</span>
        <p>
          I know how much you love playing Mine Sweeper so here is a little game
          for you to play to get to your present!
        </p>
      </div>
      <div className="card-action">
        <a className="white-text" href="#" onClick={props.hideBanner}>
          Got it!
        </a>
      </div>
    </div>
  );
}
