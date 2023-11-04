import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__cont">
        <div className="redes">
          <a
            href="https://www.linkedin.com/in/nieto-ariel-861a37259/"
            target="blank"
          >
            <img src="./assets/icons/linkedin1.png" alt="Linkedin" />
          </a>
          <a href="https://github.com/ArielNieto1975" target="blank">
            <img src="./assets/icons/github1.png" alt="Github" />
          </a>
        </div>
        <p>
          Desarrollado por{" "}
          <img src="./assets/an.png" alt="Logo Ariel NIeto" width="25px" />{" "}
          Ariel Nieto © 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
