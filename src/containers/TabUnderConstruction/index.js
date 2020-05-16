import React from "react";
import "./style.css";

function TabUnderConstruction(props) {
  return (
    <div className="app-container">
      <h1 className="under-construction-text">
        {props.activeTab} Section Under Construction
      </h1>
    </div>
  );
}

export default TabUnderConstruction;
