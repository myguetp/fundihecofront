
import armada from '../asset/img/armada.png'
import ejercito from '../asset/img/ejercito.png'
import fac from '../asset/img/fac.png'
import policia from '../asset/img/policia.png'
import './Presentacion.css'
import Footer from '../components/Footer';



const Presentacion = () => {
 
    return (
    <div>
    <section className="grid-container">
    <div className="imgcontenedor">
      <img className="imag" src={armada} alt="armada-nacional"></img>
      <img className="imag" src={ejercito} alt="ejercito-nacional"></img>
      <img className="imag" src={fac} alt="fuerza-aerea"></img>      
      <img className="imag" src={policia} alt="policia-nacional"></img>
    </div>
    <div className="presentacion">
      <h1>FUNDIHECO-SAS</h1>
       <p>Trabajamos por la unión de los integrantes de la Reserva Activa de los Militares y Policías de Colombia, incluido el personal no uniformado y civiles del 
       Ministerio de Defensa Nacional  y sus beneficiarios, para luchar por el respeto de sus Derechos Constitucionales, sus garantías sociales y sus libertades
       públicas, para asegurar una mejor calidad de vida haciendo énfasis en la defensa, el reconocimiento, la promoción y protección de los derechos humanos 
       de las víctimas que individual o colectivamente hayan sufrido daños en el contexto del conflicto armado Colombiano.
       </p>
    </div>  

    </section>
   <Footer />   
    </div>  
      
    );
  }

export default Presentacion;