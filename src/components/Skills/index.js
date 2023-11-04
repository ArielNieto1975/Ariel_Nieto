import "./skills.css";

const Skills = (props) => {
  return (
    <div className="container">
      <h2>Skills</h2>
      <section className="container__card">
        {props.skills.map((card) => (
          <div className="container__img" key={card.id}>
            <img src={card.imagen} alt={card.alt}></img>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
