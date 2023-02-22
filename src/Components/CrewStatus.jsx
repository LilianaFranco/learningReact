import React from "react";

export const CrewStatus = ({ name, isImpostor }) => {
  return (
    <div>
      <li>
        {name}
        {isImpostor ? " " : " no"} era el impostor;
      </li>
    </div>
  );
};
