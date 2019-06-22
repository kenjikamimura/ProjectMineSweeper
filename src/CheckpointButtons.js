import React from "react";

export default function CheckpointButtons(props) {
  return (
    <div className="vertical-align row">
      <div className="col s6">
        <button className="btn-small cyan darken-1 s3">
          Saves Left: {props.numberOfSaves}
        </button>
      </div>

      <div className="col s6">
        <button
          className="btn-small cyan darken-1 s3"
          onClick={props.saveCheckpoint}
        >
          Save Checkpoint
        </button>
      </div>
    </div>
  );
}
