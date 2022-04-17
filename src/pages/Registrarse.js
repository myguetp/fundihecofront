import React, {useState} from "react";
//import AfiliaList from "../components/AfiliaList";
import CrudForm from "../components/CrudForm";
//import CrudTable from "../components/CrudTable";
import Fotpage from "../components/Fotpage";
import { helpHttp } from "../helper/helphttp";


const Registrarse = () => {

  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = "u397070750_fundihecoapp/app";
   
  const createData = (data) =>{
      data.id = Date.now();
      //console.log(data);   

      let options ={
        body:data,
        headers:{"content-type":"application/json"},       
      };
      
      api.post(url,options).then(res =>{
        console.log(res);
        if(!res.err){
          setDb([...db, res]);
        }else{
          console.log("error de renderizado");
        }
      });
     
  };
 
  return (
    <>
        
        <CrudForm
        createData={createData} 
        //updateData={updateData} 
        dataToEdit={dataToEdit} 
        setDataToEdit={setDataToEdit}/>       
        <Fotpage />
    </>
  );
};

export default Registrarse;
