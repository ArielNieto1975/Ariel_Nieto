import Footer from "./components/Footer";
import Formacion from "./components/Formacion";
import Proyectos from "./components/Ptoyectos";
import Skills from "./components/Skills";
import Header from "./components/header";
import Home from "./components/home";
import { useState } from "react";
import './App.css';

function App() {
  const [home, setHome] = useState(true);
  const [skill, setSkill] = useState(true);
  const [formation, setFormation] = useState(true);
  const [proyects, setProyects] = useState(true);

  const mostrarHome = () => {
    console.log(home);
    setHome(true);
    setSkill(true);
    setFormation(true);
    setProyects(true);
  };
  const mostrarSkills = () => {
    console.log(skill);
    setHome(false);
    setSkill(true);
    setFormation(false);
    setProyects(false);
  };
  const mostrarFormacion = () => {
    console.log(skill);
    setHome(false);
    setSkill(false);
    setFormation(true);
    setProyects(false);
  };
  const mostrarProyectos = () => {
    console.log(skill);
    setHome(false);
    setSkill(false);
    setFormation(false);
    setProyects(true);
  };

  const [skills, actualizarSkills] = useState([
    {
      imagen: "./assets/icons/html-5.png",
      id: "1",
      alt: "html5"
    },
    {
      imagen: "./assets/icons/css-3.png",
      id: "2",
      alt: "CSS3"
    },
    {
      imagen: "./assets/icons/js.png",
      id: "3",
      alt: "Javascript"
    },
    {
      imagen: "./assets/icons/React.png",
      id: "4",
      alt: "React"
    },
    {
      imagen: "./assets/icons/git.png",
      id: "5",
      alt: "GIT"
    },
    {
      imagen: "./assets/icons/github.png",
      id: "6",
      alt: "GITHUB"
    },
    {
      imagen: "./assets/icons/sass.png",
      id: "7",
      alt: "SASS"
    },
    {
      imagen: "./assets/icons/mysql.png",
      id: "8",
      alt: "MySQL"
    },
    {
      imagen: "./assets/icons/Excel.png",
      id: "9",
      alt: "Excel"
    }
  ]);

  const [forma, actualizarForma] = useState([
    {
      imagen: "./assets/unc.png",
      id: "101",
      alt: "UNC",
      tit: "contador Público",
      sub: "2001 - UNC"
    },
    {
      imagen: "./assets/coderhouse.jpg",
      id: "102",
      alt: "Coderhouse",
      tit: "Desarrollador Web",
      sub: "2022 - Coderhouse",
      cert: "https://www.coderhouse.com/certificados/62eb1db8e249a400192fb5a9"
    },
    {
      imagen: "./assets/one.png",
      id: "103",
      alt: "ONE",
      tit: "Desarrollador Front-End",
      sub: "2023 - ONE/ALURA LATAM",
      cert: "https://app.aluracursos.com/user/arielnieto1/program/certificate"
    },
    {
      imagen: "./assets/ba.png",
      id: "104",
      alt: "Buenos Aires Ciudad",
      tit: "Desarrolador Full Stack - cursando",
      sub: "2023 - Buenos Aires Ciudad"
    },
    {
      imagen: "./assets/unc.png",
      id: "105",
      alt: "UNC",
      tit: "Ingles - Nivel 4 intensivo",
      sub: "2003 - UNC"
    }
  ]);

  const [proye, actualizarProye] = useState([
    {
      imagen: "./assets/proyects/laFelipa.png",
      id: "10001",
      alt: "Cabañas - La Felipa",
      tit: "Cabañas - La Felipa",
      sub: "Alquiler de Cabañas",
      repo: "https://github.com/ArielNieto1975/Cabanas_La_Felipa",
      page: "https://la-felipa.vercel.app/"
    },
    {
      imagen: "./assets/proyects/fitflix.jpg",
      id: "10002",
      alt: "Fitflix",
      tit: "Fitflix",
      sub: "Proyecto curso ONE - Alura Latam",
      repo: "https://github.com/ArielNieto1975/fitflix",
      page: "https://fitflix-five.vercel.app/"
    },
    {
      imagen: "./assets/proyects/ajayu.jpg",
      id: "10003",
      alt: "Ajayu",
      tit: "Ajayu - Círculos de vida",
      sub: "Atrapasueños",
      repo: "https://github.com/ArielNieto1975/Ajayu-CirculosDeVida",
      page: "https://ajayu-circulosdevida.vercel.app/"
    },
    {
      imagen: "./assets/proyects/Incluir_Salud.png",
      id: "10004",
      alt: "Incluir Salud",
      tit: "Incluir Salud",
      sub: "Proyecto en Desarrollo",
      repo: "https://github.com/ArielNieto1975/Incluir-Salud-Cordoba",
      page: "https://arielnieto1975.github.io/Incluir-Salud-Cordoba/"
    },
    {
      imagen: "./assets/proyects/proy_validacion_formulario.png",
      id: "10005",
      alt: "pet shop formulario",
      tit: "Formulario creado con HTML y JavaScript",
      sub: "Proyecto curso ALURA",
      repo:
        "hhttps://github.com/ArielNieto1975/Validacion_Formulario-curso_JavaScript-Alura",
      page:
        "https://arielnieto1975.github.io/Validacion_Formulario-curso_JavaScript-Alura/"
    },
    {
      imagen: "./assets/proyects/Barberia_Alura.png",
      id: "10006",
      alt: "Barberia Alura",
      tit: "Barberia Alura",
      sub: "Proyecto curso ALURA",
      repo: "https://github.com/ArielNieto1975/barberiaAlura",
      page: "https://arielnieto1975.github.io/barberiaAlura/"
    },
    {
      imagen: "./assets/proyects/peluqueria_canina.png",
      id: "10007",
      alt: "Proyecto Peluquería Canina",
      tit: "Proyecto Peluquería Canina",
      sub: "En desarrollo",
      repo: "https://github.com/ArielNieto1975/Peluqueria-Canina",
      page: "https://peluqueria-canina.vercel.app/"
    }
  ]);

  return (
    <div className="App">
      <Header
        mostrarHome={mostrarHome}
        mostrarSkills={mostrarSkills}
        mostrarFormacion={mostrarFormacion}
        mostrarProyectos={mostrarProyectos}
      />
      {home ? <Home /> : <></>}
      {/* <Home /> */}
      {skill ? <Skills skills={skills} /> : <></>}
      {/* <Skills skills={skills} /> */}
      {formation ? <Formacion forma={forma} /> : <></>}
      {proyects ? <Proyectos proye={proye} /> : <></>}
      <Footer />
    </div>
  );

}

export default App;
