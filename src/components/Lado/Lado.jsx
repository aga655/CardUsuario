import "./Lado.css";

function Lado(props) {
    return (
        <div className="alinhamento">
            <p>{props.texto1}</p>
            <p>{props.texto2}</p>
            <p>{props.texto3}</p>
        </div>
    );
}

export default Lado;
