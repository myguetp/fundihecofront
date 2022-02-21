import React from 'react';
import Footer from '../components/Footer';
import './Conocenos.css';



//const personas = require.context('../asset/img', true);
//src={`../asset/img/${personas}.men.pngpng`} alt="integrante" 


const Conocenos = () =>{
    return(
        <div className="presentaxion">
            <div className="presentazion">
                <div>
                <h3 >Misión</h3>
                    <p>Liderar procesos de tipo cultural, económico, político y social dirigidos a las reservas de las fuerzas militares, policía nacional y sus familias
                    con énfasis en miembros de la fuerza pública víctimas del conflicto, con el fin de mejorar su calidad de vida.
                    </p>
                </div> 
                <div>   
                <h3>Visión</h3>
                    <p>
                    Agrupar para el año 2024 a las reservas activas de las fuerzas militares y policía nacional sin distinción de grados, en un proceso de apoyo mutuo que permita una 
                    atención directa y personalizada para solucionar los problemas de tipo social, económico, político, cultural y jurídico que las aquejan.
                    </p>
                </div>   
                <div>   
                <h3>Nuestro equipo</h3>
                    <p>
                    Contamos con personal altamente capacitado el cual esta dispuesto a ayudarle en cualquiera de nuestros servicios al igual tambien contamos con un 
                    excelente grupo de empresas aliadas las cuales son un apoyo para nosotros y para nuestros afiliados siempre buscamos al excelencia en el servicio
                    </p>
                </div> 
                 
            </div>
         
            <Footer />
                            
        </div>
    )
}

export default Conocenos;