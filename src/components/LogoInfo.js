import logo from '../asset/img/logo.jpg';
import "./Footer.css";

const LogoInfo = () =>{
    return(

        <section>
        <img className="img-log" src={logo} alt="fundiheco"></img> 
        <p className="sello">Copyright &copy;2022 FundihecoSAS<small>| hecho por |<span> JMTP</span></small></p>
        </section> 
    )
}

export default LogoInfo;