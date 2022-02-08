import './Equipo.css'

const Afiliados = ({cliente, setCliente, clientes, setListUpdated}) =>{

    const handleDelete = id =>{
        const requestInit ={   
            method: 'DELETE',
        
        }
        fetch('http://localhost:9000/api/' +id, requestInit)
        .then((res)=> res.text())
        //.then((res)=> setCliente(res))

        setListUpdated(true)
    }

    const handleUpdate = id =>{
        const requestInit ={   
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(cliente)
        
        }
        fetch('http://localhost:9000/api/' +id, requestInit)
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

        setListUpdated(true)

    }

    return(
        <>
            <table className ="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cedula</th>
                        <th>Entidad</th>
                        <th>Correo</th>
                        <th>Celular</th>
                        <th>Direccion</th>
                        <th>Ciudad</th>
                        <th>Conyugue</th>
                        <th>Conyugue Cel</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.cedula}</td>
                            <td>{cliente.entidad}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.celular}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.ciudad}</td>
                            <td>{cliente.conyugue}</td>
                            <td>{cliente.conyugueCel}</td>
                            <td>
                                <div className="mb-3">
                                    <button onClick={() => handleDelete(cliente.id)} className="btn btn-danger">Eliminar</button>
                                </div>
                                <div className="mb-3">
                                    <button onClick={() => handleUpdate(cliente.id)} className="btn btn-dark">Eliminar</button>
                                </div>
                            </td>
                            
                        </tr>
                    ))}                   

                </tbody>
            </table>
        </>
    )
}

export default Afiliados;