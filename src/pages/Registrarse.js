import React,{useState} from 'react';
//import Afiliados from '../components/Afiliados';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Reparacion from '../components/Reparacion';

const Registrarse = () => {
  
  const [cliente, setCliente] =useState({
    nombre: '',
    cedula: '',
    entidad: '',
    correo: '',
    celular: '',
    direccion: '',
    ciudad: '',
    conyugue: '',
    conyuguetel: ''
  })   
  

  return (
    <div>
        <div className="container">
            <div className="row">
                <div>
                <h3>Lista de Afiliados</h3>               
                {/*<Afiliados cliente={cliente}  setCliente={setCliente} clientes={clientes} setListUpdated={setListUpdated} />
                */}<br></br>
                <br></br>
                <br></br>
                </div>
                <div>
                <h3>Formulario de Afiliados</h3>
                <Form cliente={cliente} setCliente={setCliente}/>
                </div>
                <Reparacion />
            </div>
        </div>
        <Footer />

    </div>
    )
};

export default Registrarse;
