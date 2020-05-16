import React from "react";

export function IconElements(props) {
  return (
    <div className={getBlockClasses(props)}>
      {props.iconsArray.map((value, index) => {
        return (
          <div
            className={getIconGroupClasses(props.active, value.name)}
            key={index}
            onClick={() =>
              props.bottomNavigation ? props.setTabActive(value.name) : null
            }
          >
            <div className="icon">
              <img src={value.icon} alt="" />
            </div>
            <p>{value.name}</p>
          </div>
        );
      })}
    </div>
  );
}

function getBlockClasses(props) {
  let classes = "icons ";
  if (props.horizontalScroll) {
    classes += "horizontal-scroll ";
  }
  if (props.bottomNavigation) {
    classes += "bottom-navigation";
  }
  return classes;
}

function getIconGroupClasses(active, current) {
  let classes = "icon-group ";
  if (current === active) {
    classes += "active";
  }
  return classes;
}
