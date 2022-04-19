import React from 'react';
import Fotpage from '../components/Fotpage';
import { useContact } from '../hooks/useContact';
import './Contacto.css';


const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:"",
};

const validationsForm = (form) =>{
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    

    if(!form.name.trim()){
        errors.name = "Hola, por favor escriba su nombre este campo es requerido";
    }

    if(!form.email.trim()){
        errors.email = "Hi, por favor escriba su email es requerido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email  =  "Hola por favor escriba su correo correctamente"
    }

    if(!form.subject.trim()){
        errors.subject = "hola, por faver escriba su asunto es requerido";
    }

    if(!form.comments.trim()){
        errors.comments = "hola, por favor escriba algun comentario";
    }

    return errors;
}

const Contacto = () =>{
    const {form,errors,handleChange,handleBlur,handleSubmit
    } = useContact(initialForm, validationsForm);

 return(
     
       <div className="contact">
        <div className="contact-msg" >
            <p>Puedes enviarnos un mensaje, solo tienes que escribir tu nombre, el correo, el asunto a tratar y como podemos ayudarle 
            o también se puede comunicar con nosotros por cualquiera de nuestras redes sociales 
            </p>
        </div>
          <form className="contact-form" onSubmit={handleSubmit} action="https://formsubmit.co/atencion@fundiheco-sas.com" method="POST">
               <input className="contact-inp" type="text" name="name" placeholder="Escriba su nombre"
               onBlur={handleBlur}
               onChange={handleChange} value={form.name} required/>
               {errors.name && <strong className="infoe">{errors.name}</strong>}
               
               <input className="contact-inp" type="email" name="email" placeholder="Escriba su email"
               onBlur={handleBlur}
               onChange={handleChange} value={form.email} required />
               {errors.email && <strong className="infoe">{errors.email}</strong>}
               
               <input className="contact-inp" type="text" name="subject" placeholder="Escriba su asunto"
               onBlur={handleBlur}
               onChange={handleChange} value={form.subject} required />
               {errors.subject && <strong className="infoe">{errors.subject}</strong>}
               
               <textarea className="contact-tex"  name="comments" cols="50" rows="5" placeholder="Escriba su mensaje"
               onBlur={handleBlur}
               onChange={handleChange} value={form.comments} required></textarea>
               {errors.comments && <strong className="infoe">{errors.comments}</strong>}
               <input className="btn btn-primary " type="submit" value="Enviar"/>
                
           </form> 
            <Fotpage />    
       </div>
   );
       
};

export default Contacto;