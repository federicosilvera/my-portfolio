import './App.css';

function App() {
  return (
    <div className="main-container">
        <div className="">
      {/*Presentacion */}
      <div id="start" className="">
        <h1 className="title-main">
          Hola, me presento soy Federico Silvera
        </h1>
        <div className="">
        <h2 className="center">
          Programador Web, acompañame en mi portafolio para conocerme y ver en
          que areas me desempeño:
        </h2>
        </div>
        <div className="">
          <a href="#experience" className="center">
            <img src="double-down-arrows.svg" alt='scroll' className=""/>
          </a>
        </div>
      </div>
            {/*Tecnologias */}
      <h2 className="center">
        Mis Tecnologias:
      </h2>
      <div className=""> {/*Contenedor de tecnologias */}

      <div className="center ">
          <div className="tech-container">
            <h2 className="title-tech">Front-end Dev React</h2>
            <p className="title-tech">HTML, CSS, JS, React</p>
            <div className="images-tech">
            <img className="images-tech" src="html-5 (1).png" alt="html" />
            <img className="images-tech" src="css-3.png" alt="css" />
            <img className="images-tech" src="js.png" alt="Javascript" />
            <img className="images-tech" src="react.png" alt="react" />
            </div>
            
          </div>
          <div className="tech-container">
            <h2 className="title-tech">Back-end Dev</h2>
            <p className="title-tech">Python, Django</p>
            <div className="images-tech">
              <img className="images-tech" src="piton.png" alt="python" />
              <img className="images-tech" src="django.png" alt="django" />
            </div>
            </div>
          <div className="tech-container">
            <h2 className="title-tech">Gestion</h2>
            <p className="title-tech">Git, GitHub</p>
            <div className="images-tech">
              <img className="images-tech" src="git.png" alt="Git" />
              <img className="images-tech" src="github.png" alt="GitHub" />
            </div>
            </div>
      </div>
      </div>      

         {/*Proyectos */}
      <h2 className="center">
        Proyectos propios :
      </h2>
      <div  className="contain-clima">
        <div className="clima-container">
        <a href="https://clima-theta-roan.vercel.app/" rel="noreferrer" target="_blank" className='center'><h3 className="center">Aplicacion del Clima</h3></a>
          <img src="appclima.png" alt='app clima' className="image-clima" /> 
          <p className="text-clima">
            Cree una aplicacion para precedir el clima de ciudades consumiendo
            dos APIs, es una aplicacion responsive, creada con React.js y CSS
          </p>
        </div>
      </div>
      
      {/*Experiencias */}
      <div id="experience" className="">
        <h2 className=" title-exp">
          Algunas de mis experiencias dirigidas por{" "}
          <a
            href="https://www.linkedin.com/in/ing-alvaro-scelza/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            Alvaro Rodriguez
          </a>
        </h2>
        <h3 className="title-exp">
          Programador React de proyecto de red social privada para SkollARS
        </h3>
        <div className="card-cont ">
          <p className="text-card">
          En esta oportunidad estuve desarrollando componentes de React para un
          proyecto privado estilo red social en una modalidad de entrega y
          confirmacion de producto, tambien trabajabamos con una modalidad de
          gitflow para entregar y actualizar versiones a nuestra aplicacion me
          encontre creando componentes para React por 3 meses antes de migrar la
          aplicacion a Django.
        </p>
        </div>
        <h3 className="title-exp">
          Programador Django de proyecto de red social privada para SkollARS
        </h3>
        <div className="card-cont">
        <p className="text-card">
          En esta oportunidad estuve trabajando en desarrollar modelos, vistas,
          acciones dinamicas con Javascript y tambien tomamos modalidades
          distintas de trabajo de equipo, comenzamos a usar Trello para
          organizar nuestros progresos y lograr un MVP en la aplicacion, tambien
          utilizamos Git branches junto con el manejo de GitHub para controlar
          los PullRequest antes de llevar las cosas a produccion y evitar
          conclictos a futuros y tampoco sobrescribir nuestro trabajo, aun me
          encuentro en posicion de este trabajo y cada dia voy aprendiendo mas
          de buenas practicas y metodoligias de Git y GitHub
        </p>
        </div>
      </div>
      {/*Acerca de mi*/}
      <h2 className="title-exp">Acerca de mi</h2>
      <div className="card-cont">
        <p className="text-card ">
          Soy un Programador Web que me encanta trabajar en equipo, ya
          con varias experiencias de trabajos en equipo y con habilidades
          blandas desarrolladas para el mismo, me gustan los desafios y
          problemas por esa satifaccion de cuando son solucionados, cada dia me
          gusta saber mas que el anterior y mi metodologia de aprender es ser
          autodidacta con disiplina, tambien me encantan los gatos, tocar la
          guitarra, jugar videojuegos y escuchar musica y tengo un nivel de
          ingles A2-B1. Si te intereso mi portfolio o quieres trabajar conmigo no dudes en contactarme.
        </p>
      </div>
      {/*Contacto */}
      <div className="center">
        <a href="https://www.linkedin.com/in/federico-silvera/"target="_blank" rel="noreferrer" className="icon">
          <img src="linkedin.png" alt='linkedin' className=""/>
        </a>
        <a href="https://github.com/federicosilvera"target="_blank"  rel="noreferrer" className="icon">
          <img src="github.png" alt='github' className=""/>
        </a>
        <a href="mailto:federiconicolas007@gmail.com" rel="noreferrer" className="icon">
          <img src="email.png" alt='email' className="icon"/>
          </a>
        <a href="tel:+59894106592" rel="noreferrer" className="icon">
          <img src="telphone-icon.png" alt="telphone" className="icon"/>
          </a>
      </div>
      <div className="">
        <a href="#start" className="center">
          <img className="center scroll" alt='up-scroll' src="double-down-arrows.svg" />
        </a>
      </div>
    </div>
    </div> 
  );
}

export default App;
