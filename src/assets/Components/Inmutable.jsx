import React from "react";
import { useState } from "react";

export const Inmutable = () => {
  const [iteration, setIeteration] = useState(5);

  const add = () => {
    setIeteration(iteration + 1);
  };

  const substract = () => {
    setIeteration(iteration - 1);
  };

  // let iteration = 5; Components are inmutable, therefore i can't change this variable inside the component.

  return (
    <div>
      <h1>Soy un componente inmutable.</h1>
      <h2>{iteration}</h2>
      <button onClick={add}>Sumar</button>
      <button onClick={substract}>Restar</button>
    </div>
  );
};
