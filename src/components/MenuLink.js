import React from "react";
import { Link } from "react-router-dom";
import './Menulink.css';
import logo from '../asset/img/logo.jpg';

const MenuLink = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <img className="logoa" src={logo} alt="asesoria-juridica"></img>  
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">           
            <ul className="navbar-nav">
            <img className="logo" src={logo} alt="asesoria-juridica"></img>  
                <li className="nav-item">
                <Link className="enlac" to="/">Inicio</Link>     
                </li>
                <li className="nav-item">
                <Link className="enlac" to="/knowledge">Conocenos</Link>
                </li>
                <li className="nav-item">
                <Link className="enlac" to="/service">Servicios</Link>
                </li>              
           
                <li className="nav-item">
                <Link className="enlac" to="/contact">Contacto</Link>
                </li>    
                <li className="nav-item">
                <Link className="enlac" to="/base">Afiliación</Link>
                </li> 
                
            </ul>
            </div>
            </div>
        </nav>         
    )
}

export default MenuLink