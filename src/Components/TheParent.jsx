export const TheParent = (props) => {
  return (
    <div
      style={{
        width: "75%",
        background: "#FFEFD5",
        height: "200px",
        padding: "20px",
      }}
    >
      <h5>I'm the Parent</h5>
      {props.children}
    </div>
  );
};

//Como puede verse, dentro del componente <Padre/>, tenemos una etiqueta <h5/> seguida de props.children. Esto nos indica que cualquiera sea el componente que anidemos dentro de <Padre/>, dicho componente aparecerá a continuación del texto “Soy un padre”.
