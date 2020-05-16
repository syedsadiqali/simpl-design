import React from "react";
import "./style.css";

export default function Section(props) {
  return (
    <div className="row section">
      <div className="section-header">
        <p>{props.header}</p>
      </div>
      {props.children}
    </div>
  );
}
