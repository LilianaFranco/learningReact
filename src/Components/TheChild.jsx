import React from "react";

export const TheChild = (props) => {
  return (
    <div
      style={{
        width: "50%",
        background: "#FA8072",
        height: "100px",
        padding: "10px",
        color: "white",
        fontSize: "30px",
      }}
    >
      {props.autor}
    </div>
  );
};
