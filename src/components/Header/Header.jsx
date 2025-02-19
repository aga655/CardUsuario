import "./Header.css";

function Titulo(props) {
  return (
    <>
      <header>
        <img src={props.logo} className="Img" />
        <h1>{props.desafio}</h1>
      </header>
    </>
  );
}

export default Titulo;