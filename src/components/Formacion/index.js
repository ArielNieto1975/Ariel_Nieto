import "./formacion.css";

const Formacion = (props) => {
  return (
    <div className="container">
      <h2>Formación</h2>
      <section className="container__form">
        {props.forma.map((formacion) => (
          <div className="container__c" key={formacion.id}>
            <div className="container__cont">
              <a href={formacion.cert} target="blank">
                <img src={formacion.imagen} alt={formacion.alt}></img>
              </a>
            </div>

            <h3>{formacion.tit}</h3>
            <p>{formacion.sub}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Formacion;
