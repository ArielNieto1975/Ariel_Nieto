import "./header.css";

const Header = (props) => {
  const manejarEnvio1 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarHome();
  };
  const manejarEnvio2 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarSkills();
  };
  const manejarEnvio3 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarFormacion();
  };
  const manejarEnvio4 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarProyectos();
  };

  return (
    <div className="header">
      <nav className="header__nav">
        <ul>
          <li className="a1" onClick={manejarEnvio1}>
            Home
          </li>
          <li className="a2" onClick={manejarEnvio2}>
            Skills
          </li>
          <li className="a3" onClick={manejarEnvio3}>
            Formación
          </li>
          <li className="a4" onClick={manejarEnvio4}>
            Proyectos
          </li>
          <li>arielnieto1@hotmail.com</li>
        </ul>
      </nav>
      <nav className="responsive__nav">
        <label htmlFor="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </label>
        <input id="menu" type="checkbox" />
        <ul>
          <li onClick={manejarEnvio1}>Home</li>
          <li onClick={manejarEnvio2}>Skills</li>
          <li onClick={manejarEnvio3}>Formación</li>
          <li onClick={manejarEnvio4}>Proyectos</li>
        </ul>
      </nav>
      {/* <div className="header__banner">
        <article>
          <h1>Hola, mi nombre es Ariel Nieto y construyo páginas web</h1>
          <h3>
            Soy Egresado de la carrera de Contador Público, de la Facultad de
            Ciencias Económicas de la Universidad Nacional de Córdoba y
            Desarrollador Front End egresado del proyecto Oracle ONE en Alura
            Latam. Actualmente estoy cursando Desarrollo Fullstack con Python en
            la Agencia de Aprendizaje de Buenos Aires Ciudad.
          </h3>
        </article>
        <img src="./assets/perfil.jpg" alt="" />
      </div> */}
    </div>
  );
};

export default Header;
