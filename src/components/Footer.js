import React, { Component } from 'react';
import "./Footer.css";
import LogoInfo from './LogoInfo';
import Redes from './Redes';
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return ( 
    <footer className="foot">      
       
        <ul className="contactof">
          <li><i className="fas fa-building"></i><strong> Bogotá</strong> </li>
          <li><i className="fas fa-phone-alt"></i><strong>   +57 320 495 0075 </strong> </li>
          <li><i className="fas fa-route"></i><strong>  Carrera 15 N° 28a-35 </strong> </li>
          <li><i className="fas fa-mail-bulk"></i><strong> atencion@fundiheco-sas.com </strong> </li> 
          <li className="nav-item"><Link className="enlac" to="/user">FUNDIHECO-SAS</Link></li> 
          
        </ul> 
        <Redes /> 
        <LogoInfo />      
       
      
    </footer>
    );
  }
}
