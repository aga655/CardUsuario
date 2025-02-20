// Importa os estilos e componentes necessários para estilizar e complementar o site
import "./App.css";
import "./components/Botao/Seguir.jsx"; 

// Importa os componentes que compõe a interface
import Seguir from "./components/Botao/Seguir";
import Titulo from "./components/Header/Header";
import Meio from "./components/Meio/Meio";
import Lado from "./components/Lado/Lado";
import Footer from "./components/Footer/Footer";

// Imagens usadas no site
import Agatha from "./assets/Agatha.png";
import Ana from "./assets/Ana.png";
import Zayra from "./assets/Zayra.png";
import Anubis from "./assets/Anubis.png";
import Lucas from "./assets/Lucas.png";
import Juan from "./assets/Juan.png";
import Instagram from "./assets/insta.png";
import Gmail from "./assets/gmail.png";
import Logo from "./assets/logo.png";


function App() {
  return (
    <>
      {/* Cabeçalho com título e logo */}
      <div className="body">
        <Titulo desafio="DESAFIO 1 de PROPS - REACT" logo={Logo} />

        <div className="container">
          <div className="cards">

            {/* Cartões de informações com foto e hobby */}
            <div className="alinhar">
              <Meio nome="Agatha França" img={Agatha} hobby="Hobby: Ler e assistir live da Shopee" />
              <Seguir />
            </div>

            <div className="alinhar">
              <Meio nome="Ana Beatriz" img={Ana} hobby="Hobby: Fofocar as 3am" />
              <Seguir />
            </div>

            <div className="alinhar">
              <Meio nome="Anúbis" img={Anubis} hobby="Hobby: Programar" />
              <Seguir />
            </div>

            <div className="alinhar">
              <Meio nome="Juan Lopes" img={Juan} hobby="Hobby: Programar" />
              <Seguir />
            </div>

            <div className="alinhar">
              <Meio nome="Lucas Marin" img={Lucas} hobby="Hobby: Cozinhar" />
              <Seguir />
            </div>

            <div className="alinhar">
              <Meio nome="Zayra França" img={Zayra} hobby="Hobby: Dormir" />
              <Seguir />
            </div>
          </div>

          {/* Exibição dos valores do grupo */}
          <div className="valores">
            <Lado valor1="Companheirismo" valor2="Confiança" valor3="Resiliência" />
          </div>
        </div>

        {/* Rodapé com contatos */}
        <Footer
          texto1="@JuanMOLopes 🤳"
          insta={Instagram}
          texto2="juan.molopes@gmail.com 💻"
          gmail={Gmail}
          texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉"
        />
      </div>
    </>
  );
}

export default App;
