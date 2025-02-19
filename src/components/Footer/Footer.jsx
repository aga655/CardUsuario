import "./Footer.css";

function Footer(props) {
  return (
    <>
      <footer>
        <p>{props.texto1} </p>
        <img src={props.insta} className="Img" />
        <p>{props.texto2} </p>
        <img src={props.gmail} className="Img" />
        <p>{props.texto3} </p>
      </footer>
    </>
  );
}

export default Footer;
