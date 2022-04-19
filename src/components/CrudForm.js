
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Equipo.css'


const initialForm ={
    nombre:"",
    cedula:"",
    entidad:"",
    correo:"",
    celular:"",
    direccion:"",
    ciudad:"",
    conyugue:"",
    conyuguetel:"",
    id: null,
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() =>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    },[dataToEdit])

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value, 
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!form.nombre || !form.cedula || !form.entidad  
        || !form.correo || !form.celular  || !form.direccion 
        || !form.ciudad || !form.conyugue  || !form.conyuguetel){
            alert("DATOS INCOMPLETOS");
            return;
        }

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    };
    const handleReset = (e) =>{
        setForm(initialForm);
        setDataToEdit(null);
    };

  return (
    <div>
        
        <h3 className="tituloform"> de afiliación fundiheco SAS</h3>
        <p className="terminos">La información suministrada a continuación por usted será de uso exclusivo para la empresa Fundiheco-SAS al momento de llenar el formulario y dar enviar
        o el envió de estos datos por alguno de nuestros canales como contacto correo electrónico con terminación @fundiheco-SAS o el WhatsApp correspondiente
        al número +57 320 495 0075 da autorización para el proceso de libranza correspondiente, al correo suministrado le llegara un documento en PDF en los siguientes
        3 días posteriores al llenado de los datos para más información revise nuestros <Link to="/conditions">términos y condiciones</Link> </p>
        
        <hr/>
        <hr/>
        <form onSubmit={handleSubmit}>
        <div className='mb-10 formdiv'>
        <label className="form-label">Nombre</label>
        <input type="text" name="nombre" onChange={handleChange} value={form.nombre} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Cédula</label>
        <input type="number" name="cedula" onChange={handleChange} value={form.cedula} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Entidad</label>
        <input type="text" name="entidad" onChange={handleChange} value={form.entidad} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Correo</label>
        <input type="mail" name="correo" onChange={handleChange} value={form.correo} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Celular</label>
        <input type="number" name="celular" onChange={handleChange} value={form.celular} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Dirección</label>
        <input type="text" name="direccion" onChange={handleChange} value={form.direccion} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Ciudad</label>
        <input type="text" name="ciudad" onChange={handleChange} value={form.ciudad} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Cónyugue</label>
        <input type="text" name="conyugue" onChange={handleChange} value={form.conyugue} className="form-control"/>
        </div>
        <div className='mb-10 formdiv'>
        <label className="form-label">Cónyugue Celular</label>
        <input type="number" name="conyuguetel" onChange={handleChange} value={form.conyuguetel} className="form-control"/>
        </div> 
                <br />
                <br />
        <input type="submit" value="Enviar" className="btn btn-primary"/>
        <input type="reset" value="Limpiar" onClick={handleReset} className="btn btn-primary"/>
        </form>
    </div>
  );
};

export default CrudForm;