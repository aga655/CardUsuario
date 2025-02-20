import "./Lado.css";

function Lado(props) {
    return (
        <div className="alinhamento">
            <p>{props.valor1}</p>
            <p>{props.valor2}</p>
            <p>{props.valor3}</p>
        </div>
    );
}

export default Lado;
