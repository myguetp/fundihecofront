import React from 'react';
import './Equipo.css';

const Form = ({cliente, setCliente}) =>{  
    
    const handleChange = e =>{
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        const requestInit ={   
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(cliente)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then((res)=> res.text())
        //.then((res)=> setCliente(res))

        setCliente({
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
        
    }      
    return(
        <div>        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={cliente.nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control" required/>   
            </div>
            <div className="mb-3">
                <label htmlFor="cedula" className="form-label">Cedula</label>
                <input value={cliente.cedula}  name="cedula" onChange={handleChange} type="number" id="cedula" className="form-control"/>   
            </div>
            <div className="mb-3">
                <label htmlFor="entidad" className="form-label">Entidad</label>
                <input value={cliente.entidad} name="entidad"onChange={handleChange} type="text" id="entidad" className="form-control"  placeholder= "casur-cremil-prestaciones sociales" required/>   
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input value={cliente.correo} name="correo" onChange={handleChange} type="mail" id="correo" className="form-control" required/>   
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Celular</label>
                <input value={cliente.celular} name="celular" onChange={handleChange} type="number" id="celular" className="form-control" required/>   
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input value={cliente.direccion} name="direccion" onChange={handleChange} type="text" id="direccion" className="form-control"/>   
            </div>
            <div className="mb-3">
                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                <input value={cliente.ciudad}  name="ciudad" onChange={handleChange} type="text" id="ciudad" className="form-control"/>   
            </div>
            <div className="mb-3">
                <label htmlFor="conyugue" className="form-label">Conyugue</label>
                <input value={cliente.conyugue} name="conyugue" onChange={handleChange} type="text" id="conyugue" className="form-control"/>   
            </div>
            <div className="mb-3">
                <label htmlFor="conyuguetel" className="form-label">Conyugue telefono</label>
                <input value={cliente.conyuguetel}  name="conyuguetel" onChange={handleChange} type="text" id="conyuguetel" className="form-control"/>   
            </div>
            <button type="submit" className="btn btn-primary">enviar</button>
        </form>
        
        </div>
        
    )
}

export default Form