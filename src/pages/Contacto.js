import React from 'react';
import Footer from '../components/Footer';
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
        errors.name = "Hi, please type your [Name] this is required";
    }

    if(!form.email.trim()){
        errors.email = "Hi, please type your [Email] this is required";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email  =  "Hi, please type your Email correctly"
    }

    if(!form.subject.trim()){
        errors.subject = "Hi, please type the [Subject] this is required";
    }

    if(!form.comments.trim()){
        errors.comments = "Hi, please type youre message [Comments] this is required";
    }



    return errors;
}

const Contacto = () =>{
    const {form,errors,handleChange,handleBlur,handleSubmit
    } = useContact(initialForm, validationsForm);

 return(
     
       <div className="contact">
        <div className="contact-msg" >
            <p>Puedes enviarnos un mensaje solo tienes que escribir tu nombre el correo el asunto a tratar y como podemos ayudarle 
                o tambien se puede comunicar con nosotros por cualquiera de nuestras redes sociales 
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
           <Footer />     
       </div>
   );
       
};

export default Contacto;