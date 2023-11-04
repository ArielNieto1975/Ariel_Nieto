import "./home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="header__banner">
          <article>
            <h1>Hola, mi nombre es Ariel Nieto y construyo páginas web</h1>
            <h3>
              Soy Egresado de la carrera de Contador Público, de la Facultad de
              Ciencias Económicas de la Universidad Nacional de Córdoba y
              Desarrollador Front End egresado del proyecto Oracle ONE en Alura
              Latam. Actualmente estoy cursando Desarrollo Fullstack con Python
              en la Agencia de Aprendizaje de Buenos Aires Ciudad.
            </h3>
          </article>
          <img src="./assets/perfil.jpg" alt="" />
        </div>
      </div>
      <div className="container home">
        <h2>Sobre mi</h2>
        <p>
          Soy un Profesional de la carrera de Contador Público. Tengo 48 años de
          edad y soy Argentino.
        </p>
        <p>
          Actualmente me desempeño como Sub-Director de Gestión Administrativa
          del Hospital Córdoba, perteneciente al Ministerio de Salud del
          Gobierno de la Provincia de Córdoba - Argentina.
        </p>
        <p>
          Mi orientación a la Auditoría dentro de mi profesión, junto con el uso
          de la herramienta informática Excel a un nivel avanzado, me
          permitieron desarrollar un amplio razonamiento lógico, el cual sumado
          a mi gran interés respecto de las tecnologías digitales, me motivaron
          a iniciar mi formación en Desarrollo y Programación.
        </p>
      </div>
    </>
  );
};

export default Home;
