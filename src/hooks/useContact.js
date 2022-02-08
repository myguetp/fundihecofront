import { useState} from "react"
import { helpHttp } from "../helper/helphttp";


export const useContact = (initialForm, validateForm) =>{
    const[form,setForm] = useState(initialForm);
    const[errors,setErrors] =useState({});
    const[loading, setLoading] = useState(false);
    const[response, setResponse] = useState(null);

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            alert("Sending request")
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/atencion@fundiheco-sas.com",{
                body:form,
                headers:{
                    "Content-Type":"aplication/json",
                    Accept:"application/json",
                },
            })
            .then((res)=>{
                setLoading(false);
                setResponse(true);
            })
        }else{
            return;
        }
    };

    return{
        form,errors,loading,response,handleChange,handleBlur,handleSubmit
    }
};
    
   