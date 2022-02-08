import React,{useState, useEffect} from 'react';
//import Afiliados from '../components/Afiliados';
import Footer from '../components/Footer';
import Form from '../components/Form';



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
        cunyuguetel: ''
      })   
   
  //mostrar los datos  
  const [clientes, setClientes] =useState([])
  
  //mostrar los datos
  useEffect(() =>{
    const getClientes = () =>{
       fetch('http://localhost:9000/api')
      .then((res)=> res.json())
      .then((res)=>setClientes(res))
    }
    getClientes()
  },[]) 

  return (
    <div>
        <div className="container">
            <div className="row">
                <div>
                {/*<h3>Lista de Afiliados</h3>               
                <Afiliados clientes={clientes} />*/}
                <br></br>
                <br></br>
                <br></br>
                </div>
                <div>
                <h3>Formulario de Afiliados</h3>
                <Form cliente={cliente} setCliente={setCliente}/>
                </div>

            </div>
        </div>
        <Footer />

    </div>
    )
};

export default Registrarse;
