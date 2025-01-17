import imgUs from "../../../assets/About/CC42AH4J2RDO3JQ34RN6JDKOKA.jpg";
import imgMission from "../../../assets/About/NuestraMision.png";
import s from "./About.module.css";
import staticsimg from "../../../assets/About/StadisticContainer.png";
import team from "../About/AboutPractice";
import TeamCard from "../About/TeamCards/Card";

const About = () => {
  return (
    <div class="container-fluid">
      {/* Baner about */}
      <div class="row" className={s.bannerContainer}>
          <div className={s.banner}>
            <h1>
              Acerca de <span>nosotros</span>
            </h1>
          </div>
      </div>
      {/* mission*/}
      <div class="row" className={s.mainContainer0}>
        <div className={s.container1}>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 container-fluid d-flex justify-content-end align-items-end p-3">
              <img
                class="img-fluid"
                className={s.image}
                width="500px"
                height="400px"
                src={imgUs}
                alt="img_us"
              />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 container-fluid p-0">
              <div className={s.textContainer}>
                <div className={s.title}>
                  <div className={s.globo}>
                    <h3>Acerca de grooming</h3>
                  </div>
                  <h4>
                    Ayudar es nuestro <span>objetivo principal</span>
                  </h4>
                </div>
                <p text="end">
                  Es un gran placer para nosotros presentarles el Maatram
                  Educational and Charitable Trust. Somos un grupo de amigos
                  cuyo ideal en la vida es ayudar donde podamos, como podamos y
                  siempre que podamos. Esta ayuda está enfocada hacia los pobres
                  y necesitados que conviven entre nosotros dentro de nuestra
                  sociedad y pretende lograr un cambio en su vida - una
                  "ARGENTINA GROOMING"
                  <br />
                  <br />
                  Esta es una organización dirigida por voluntarios que son
                  profesionales sinceros y bien establecidos y que están
                  interesados en que cada donación llegue a los estudiantes
                  necesitados y brillantes, sin los cuales, habrían perecido en
                  la oscuridad del abismo social. <br />
                  <br />
                  Estamos extremadamente agradecidos por su amabilidad y la
                  generosidad de su donación. Con su amable cooperación y apoyo,
                  estamos localizando a estudiantes brillantes y necesitados de
                  las áreas rurales y haciendo arreglos para brindarles
                  asistencia financiera para estudios superiores. Provee comida,
                  abrigo, vestido y asistencia médica junto con amor y afecto a
                  las personas mayores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Global mission*/}
      <div class="container-fluid" className={s.mainContainer0}>
        <div class="container-fluid" className={s.container2}>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-6 container-fluid">
              <div className={s.textContainer2}>
                <h4>
                  Trabajamos en todo el mundo para salvar vidas, vencer la
                  pobreza y lograr la justicia social.
                </h4>
                <p>
                  Nuestra misión es ayudar a los niños y adultos jóvenes
                  desfavorecidos a escapar de un entorno de pobreza, vida en
                  barrios marginales, analfabetismo e ignorancia, creando así
                  oportunidades para su integración en la sociedad en general.
                  <br />
                  <br /> El objetivo final de Maatram es proporcionar a todos
                  sus participantes los conocimientos y habilidades para una
                  vida digna y sostenible. La visión final de Matram es hacer
                  una contribución significativa hacia la eliminación de los
                  barrios marginales urbanos y la pobreza rural.
                </p>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-6 container-fluid d-flex justify-content-start align-items-center p-3">
              <img class="img-fluid" className={s.image2} width="500px" height="300px" src={imgMission} alt="mission"/>
            </div>
          </div>
        </div>
      </div>
      {/*Video*/}
      <div class="container-fluid" className={s.videoContainer}>
        <iframe
          className={s.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GsY1kb5LgHU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/*Vision*/}
      <div class="container-fluid" className={s.videoContainer}>
        <div class="row" className={s.visionDiv}>
          
            <h4 className={s.visionTitle}>Nuestra <span>visión</span></h4> 
            <h3>
              Trabajar y ayudar a las personas en áreas y tiempos de calamidades
              nacionales.
            </h3>
            <p>
              India es la tierra donde las calamidades naturales visitan a
              menudo y sin previo aviso. Incluso con este historial, el país no
              cuenta con un equipo de respuesta rápida o suministros para hacer
              frente a las consecuencias. Maatram tiene la intención de cerrar
              esta brecha mediante la creación de un equipo de respuesta para
              áreas sensibles.
            </p>
            <h3>Planes de autoempleo y alivio de la pobreza.</h3>
            <p>
              La autosuficiencia es la verdadera independencia. Ayudamos a las
              personas a ser autosuficientes brindándoles habilidades y
              ayudándolas a encontrar empleo o un medio para trabajar por cuenta
              propia.
            </p>
            <h3>
              Mejora social y económica para los desfavorecidos y oprimidos a
              través de la educación, la vivienda, la vivienda, la organización
              y la facilitación de microayudas financieras a corto y largo
              plazo.
            </h3>
            <p>
              Tenemos la intención de cerrar la brecha de la inequidad
              proporcionando educación, vivienda, vivienda y ayudas
              microfinancieras a corto y largo plazo a los pobres. Solo
              ayudándolos a volverse autosuficientes podemos lograr
              verdaderamente un maatram revolucionario social y económicamente.
            </p>
            <h3>Empoderamiento de la Mujer y Derechos Humanos.</h3>
            <p>
              Estamos en el siglo XXI y todavía no se ha avanzado en el campo
              del empoderamiento de la mujer y los derechos humanos. Culpe a
              quien quiera, pero nosotros, que creemos en la reparación
              inmediata de los errores cometidos, ya estamos presionando por el
              empoderamiento de las mujeres y la práctica del respeto de los
              derechos humanos básicos de uno mismo y de los demás.
            </p>
            <h3>
              Rehabilitación de Minusválidos, Indigentes, Viudas, Huérfanos,
              Geriatría, Desfavorecidos y Pacientes Crónicos (VIH/ SIDA/ Cáncer/ T.B.etc.)
            </h3>
            <p>
              Promover y organizar grupos de autoayuda de Hombres y Mujeres.</p>
            <h3>
              Abolición del trabajo infantil y Establecimiento de los derechos
              del niño.
            </h3>
            <p>
              La pobreza ha engendrado una sociedad donde florece el trabajo
              infantil. Lo vemos en todas partes. Es un espectáculo tan común
              que pasa desapercibido, incluso cuando nos mira a la cara. Es una
              cosa peligrosa, este punto al que hemos sido llevados, tan
              insensible que esta visión cotidiana de niños pequeños cargando
              con la carga de un adulto, en un momento en que sus manos, pies y
              mentes deberían estar ocupados en diversión infantil, retozar. y
              el aprendizaje, evoca poca o ninguna respuesta. Estamos tratando
              de generar más conciencia sobre un mal social que no debería
              necesitar tal esfuerzo pero que lamentablemente lo necesita.
              Estamos tratando de dar oportunidades de vida a estos niños
              atrapados en el círculo social de la pobreza, el abuso del alcohol
              y el analfabetismo. Estamos trabajando en el campo de los derechos
              del niño que es un paraguas más amplio y busca poner la infancia
              al alcance de los niños desfavorecidos.
            </p>
          
        </div>
      </div>
      {/*Statistics*/}
      <div class="container-fluid" className={s.videoContainer}>
        <div class="row" className={s.statiticsDiv}>
          <div class="col">
            <div className={s.textContainer}>
              <div className={s.globo2}>
                <h3>Lo que hacemos</h3>
              </div>
              <h4>Nuestras <span>estadísticas</span></h4> 
            </div>
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src={staticsimg}
              alt="statitics"
            />
          </div>
        </div>
      </div>
      {/*The team*/}
      <div class="row" className={s.videoContainer}>
        <div class="container-fluid" className={s.teamContainer}>
          <div className={s.bodyContainer}>
            <div className={s.textContainer}>
              <div className={s.globo2}>
                <h3>Lo que hacemos</h3>
              </div>
              <h4>Conoce nuestro <span>equipo</span></h4> 
            </div>
            <div class="container">
              <div  class="row g-3">
                {team.map((member) => {
                  return (
                    <TeamCard
                      name={member.name}
                      avatar={member.avatar}
                      rol={member.rol}
                    />
                  );
                })}
              </div>
            </div>
            <div class="row" className={s.divButton}>
              <button className="button">
                <a className={s.link} style={{ textDecoration: 'none'}} href="/voluntariado">Ser voluntario</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
