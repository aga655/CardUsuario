import { useState } from "react"; /* Importa o uso de estados */
import "./Seguir.css"; /* Importa o css do componente */

function Seguir() {
  // Estado status (verdadeiro ou falso), iniciando como falso
  const [status, setStatus] = useState(false); 
  // Estado cor iniciado como "Seguir"
  const [cor, setCor] = useState("Seguir"); 

  /* Função "Seguir" que é chamada ao clicar no botão */
  function AlternarStatus() {
    // Inverte o valor do status (se estava verdadeiro, inverte para falso, e vice-versa)
    setStatus(!status); 
    // Se o status estiver como verdadeiro, define "cor" como "Seguir", se for falso, como "seguindo"
    setCor(status ? "Seguir" : "Seguindo"); 
  }

  return (
    // Define a classe da div pelo estado "cor"
    <div className={cor}>
      {/* Ao clicar no botão, chama a função "AlternarStatus", a classe é definida pela lógica "Se o status estiver como verdadeiro, define "cor" como "Seguir", se for falso, como "seguindo"", o texto de dentro do botão também é definido pela mesma lógica */}
      <button onClick={AlternarStatus} className={status ? "Seguindo" : "Seguir"}>
        {status ? "Seguindo" : "Seguir"}
      </button>
    </div>
  );
}

export default Seguir;
