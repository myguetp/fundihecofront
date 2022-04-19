import React from 'react';
import Fotpage from '../components/Fotpage';
import { Link } from 'react-router-dom';
import { useContact } from '../hooks/useContact';
import './Registro.css';


const initialForm = {
    nombre:"",
    cedula:"",
    entidad:"",
    correo: "",
    celular: "",
    direccion: "",
    ciudad: "",
    conyugue: "",
    conyuguecel: "",


};

const validationsForm = (form) =>{
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    

    if(!form.nombre.trim()){
        errors.nombre = "Hola, por favor escriba su nombre este campo es requerido";
    }

    
    if(!form.cedula.trim()){
        errors.cedula = "hola, por faver escriba su asunto es requerido";
    }

    if(!form.entidad.trim()){
        errors.entidad = "hola, por favor escriba su numero de celular";
    }


    if(!form.correo.trim()){
        errors.correo = "Hi, por favor escriba su email es requerido";
    }else if(!regexEmail.test(form.correo.trim())){
        errors.correo  =  "Hola por favor escriba su correo correctamente"
    }

    
    if(!form.celular.trim()){
        errors.celular = "hola, por favor escriba su entidad";
    }

    if(!form.direccion.trim()){
        errors.direccion = "hola, por favor escriba su entidad";
    }

    if(!form.ciudad.trim()){
        errors.ciudad = "hola, por favor escriba su entidad";
    }

    if(!form.conyugue.trim()){
        errors.conyugue = "hola, por favor escriba su entidad";
    }

    if(!form.conyuguecel.trim()){
        errors.conyuguecel = "hola, por favor escriba su entidad";
    }

    return errors;
}

const Registro = () =>{
    const {form,errors,handleChange,handleBlur,handleSubmit
    } = useContact(initialForm, validationsForm);

 return(
     
       <div className="contacto">
        
        <h3 className="tituloregs">Formulario de afiliación fundiheco SAS</h3>
        <p className="termino">La información suministrada a continuación por usted será de uso exclusivo para la empresa Fundiheco-SAS al momento de llenar el formulario y dar enviar
        o el envió de estos datos por alguno de nuestros canales como contacto correo electrónico con terminación @fundiheco-SAS o el WhatsApp correspondiente
        al número +57 320 495 0075 da autorización para el proceso de libranza correspondiente, al correo suministrado le llegara un documento en PDF en los siguientes
        3 días posteriores al llenado de los datos para más información revise nuestros <Link to="/conditions">terminos y condiciones</Link> </p>
    
          <form className="contact-form" onSubmit={handleSubmit} action="https://formsubmit.co/atencion@fundiheco-sas.com" method="POST">
               
               <input className="contacti" type="text" name="nombre" placeholder="Escriba su nombre"
               onBlur={handleBlur}
               onChange={handleChange} value={form.nombre} required/>
               {errors.name && <strong className="infoe">{errors.nombre}</strong>}

               <input className="contacti" type="number" name="cedula" placeholder="Escriba su número de cédula"
               onBlur={handleBlur}
               onChange={handleChange} value={form.cedula} required/>
               {errors.name && <strong className="infoe">{errors.cedula}</strong>}

               <input className="contacti" type="text" name="entidad" placeholder="Escriba su entidad: casur / cremil "
               onBlur={handleBlur}
               onChange={handleChange} value={form.entidad} required/>
               {errors.name && <strong className="infoe">{errors.entidad}</strong>}
                           
               <input className="contacti" type="email" name="correo" placeholder="Escriba su correo"
               onBlur={handleBlur}
               onChange={handleChange} value={form.correo} required />
               {errors.email && <strong className="infoe">{errors.correo}</strong>}
               
               <input className="contacti" type="number" name="celular" placeholder="Escriba su número de celular "
               onBlur={handleBlur}
               onChange={handleChange} value={form.celular} required/>
               {errors.name && <strong className="infoe">{errors.celular}</strong>}
               
               <input className="contacti" type="text" name="direccion" placeholder="Escriba su dirección "
               onBlur={handleBlur}
               onChange={handleChange} value={form.direccion} required/>
               {errors.name && <strong className="infoe">{errors.direccion}</strong>}
                              
               <input className="contacti" type="text" name="ciudad" placeholder="Escriba su ciudad de residencia "
               onBlur={handleBlur}
               onChange={handleChange} value={form.ciudad} required/>
               {errors.name && <strong className="infoe">{errors.ciudad}</strong>}

               <input className="contacti" type="text" name="conyugue" placeholder="Escriba el nombre de su cónyugue o familiar "
               onBlur={handleBlur}
               onChange={handleChange} value={form.conyugue} required/>
               {errors.name && <strong className="infoe">{errors.conyugue}</strong>}
               
               <input className="contacti" type="number" name="conyuguecel" placeholder="Escriba su número de celular de su familiar "
               onBlur={handleBlur}
               onChange={handleChange} value={form.conyuguecel} required/>
               {errors.name && <strong className="infoe">{errors.conyuguecel}</strong>}
               
               <input className="btn btn-primary " type="submit" value="Enviar"/>
                
           </form> 
            <Fotpage />    
       </div>
   );
       
};

export default Registro;