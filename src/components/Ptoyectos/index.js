import "./proyectos.css";

const Proyectos = (props) => {
  return (
    <div className="container">
      <h2>Proyectos</h2>
      <section className="container__form">
        {props.proye.map((proyecto) => (
          <div className="container__c" key={proyecto.id}>
            <div className="container__cont">
              <img src={proyecto.imagen} alt={proyecto.alt}></img>
            </div>
            <div className="proyecto__acc">
              <span className="proyecto__repo">
                <a href={proyecto.repo}>
                  <button className="proyecto__boton--repo">Repositório</button>
                </a>
              </span>
              <span className="proyecto__demo">
                <a href={proyecto.page}>
                  <button className="proyecto__boton--demo">Ir a la web</button>
                </a>
              </span>
            </div>

            <h3>{proyecto.tit}</h3>
            <p>{proyecto.sub}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Proyectos;
