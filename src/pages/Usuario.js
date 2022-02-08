import React from "react";
import './Usuario.css';
import Perfil from "../components/Perfil";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
//import {useAuth0} from '@auth0/auth0-react'

const Usuario = () =>{  
    
return(
    <div >
        <div className="loginbtn">
         <h2>Applicattion</h2>
      <LoginButton />   
      <LogoutButton /> 
      
        <Perfil />
        
        </div>
    </div>
)
}
export default Usuario;