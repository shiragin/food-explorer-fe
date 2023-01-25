import React from "react";
import "./switch.css";

const Switch = ({falseName,trueName,state,setState}) => {

  return (
    <label className="react-switch">
      <input
        checked={state}
        onChange={() => setState(!state)}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>
          <b>{falseName}</b>{" "}
        </span>
        <span>
          <b> {trueName}</b>{" "}
        </span>
      </div>
    </label>
  );
};

export default Switch;
