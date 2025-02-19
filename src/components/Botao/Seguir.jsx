import { useState } from "react";
import "./Seguir.css";

function Seguir() {
  const [status, setStatus] = useState(false); 
  const [cor, setCor] = useState("Seguir"); 

  function AlternarStatus() {
    setStatus(!status); 
    setCor(status ? "Seguir" : "Seguindo"); 
  }

  return (
    <div className={cor}>
      <button onClick={AlternarStatus} className={status ? "Seguindo" : "Seguir"}>
        {status ? "Seguindo" : "Seguir"}
      </button>
    </div>
  );
}

export default Seguir;
