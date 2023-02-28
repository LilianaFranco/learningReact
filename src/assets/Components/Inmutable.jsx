import React from "react";

export const Inmutable = () => {
  let iteration = 0;
  const sum = () => {
    console.log("Hi");
  };
  return (
    <div>
      <h1>Soy un componente inmutable.</h1>
      <button onClick={sum}>Sumar</button>
    </div>
  );
};
