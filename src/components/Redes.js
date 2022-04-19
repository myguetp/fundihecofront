import React from 'react'
import './Footer.css'
const Redes = () =>{
    return(
        <div>
        <p className="textor">Síguenos en nuestras redes sociales, donde encontraras comunicados de interés para todos los integrantes de 
        las fuerzas militares y policías de Colombia</p> 
        <div className="redes">       
        <a href='https://api.whatsapp.com/send?phone=+573204950075'><i className="fab fa-whatsapp-square"></i></a>
        </div>
        <div className="redes">     
        <a href='https://www.facebook.com/fundiheco/'><i className="fab fa-facebook-square"></i></a>
        </div>
        <div className="redes">     
        <a href='https://www.instagram.com/fundiheco/'><i className="fab fa-instagram-square"></i></a>
        </div>
        <div className="redes">     
        <a href='https://twitter.com/Fundiheco'><i className="fab fa-twitter-square"></i></a>
        </div>
        <div className="redes">     
        <a href='https://www.youtube.com/c/LuisLenisFUNDIHECO/videos'><i className="fab fa-youtube-square"></i></a>
        </div>     

        </div>
    );
}

export default Redes;