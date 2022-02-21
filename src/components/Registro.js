import React,{useState, useEffect} from 'react';
import Afiliados from './Afiliados';
import Form from './Form';


const Registro = () => {
  //agregar datos  
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
   
  //mostrar los datos  
  const [clientes, setClientes] =useState([])

  //que se modifico la tabla
  const [listUpdated, setListUpdated] =useState(false)
  
  //mostrar los datos
  useEffect(() =>{
    const getClientes = () =>{
       fetch('http://localhost:3001/')
      .then((res)=> res.json())
      .then((res)=>setClientes(res))
    }
    getClientes()
    setListUpdated(false)
  },[listUpdated]) 

  return (
    <div>
        <div className="container">
            <div className="row">
                <div>
                <h3>Lista de Afiliados</h3>
                <Afiliados cliente={cliente}  setCliente={setCliente} clientes={clientes} setListUpdated={setListUpdated}/>

                </div>
                <div>
                <h3>Formulario de Afiliados</h3>
                <Form cliente={cliente} setCliente={setCliente}/>
                </div>

            </div>
        </div>

    </div>
    )
};

export default Registro;
