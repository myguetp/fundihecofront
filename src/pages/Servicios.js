import React, { useState } from 'react';
import juridica from '../asset/img/juridica.png'
import terserizar from '../asset/img/terserizar.png'
import tramites from '../asset/img/tramites.png'
import seguro from '../asset/img/seguro.png'
import funerario from '../asset/img/funeraria.jpg'
import salud from '../asset/img/salud.png'
import styled from 'styled-components';
import './Servicio.css';
import Ventana from '../components/Ventana';
import { Link } from 'react-router-dom';
import Fotpage from '../components/Fotpage';



const Servicios = () =>{    
    const [show,setShow]=React.useState(false);


    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
  

    return (
    <div className="allserice">
        <div className="serviciop" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
            <h3>Asesoria juridíca</h3>
            <img className="serv-imag" src={juridica} alt="asesoria-juridica"></img>        
           
            <ContenedorBotones>
                <Boton className="btn btn-primary " onClick={() => cambiarEstadoModal1(!estadoModal1)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal1}
            cambiarEstado = {cambiarEstadoModal1}
            titulo = "Asesoria Jurídica (FundihecoSAS)"
 
        >
                 
               <div>
                    <ul className="servicioss">
                        <li><strong>Derecho administrativo</strong></li>
                       
                        {
                            show?<p>El derecho administrativo se ocupa de regular la organización, funcionamiento, poderes y deberes de la Administración pública.
                         Asimismo, se encarga de controlar y regular las relaciones jurídicas que se establecen entre la Administración pública y otros, 
                         ya sean empresas, individuos, u gobierno </p>:null
                        }
                        <li><strong>Derecho de familia</strong></li>
                      
                        {
                            show? <p>El derecho de familia se encarga de atender los asuntos que afectan a los miembros de una familia, entendida como una institución 
                            natural y social. </p>:null
                        }
                        <li><strong>Derecho de seguros </strong></li>
                        {
                            show? <p>En el derecho de seguro encontramos una serie de normas que regulan el estatuto del empresario de seguros y de sus colaboradores,
                             y sus relaciones con los tomadores, asegurados, beneficiarios, terceros perjudicados y otros sujetos a través de los contratos de seguro.</p>:null
                        }
                        <li><strong>Derecho laboral </strong></li>
                    
                        {
                            show? <p>El derecho laboral se encarga de regularizar, mediante reglas jurídicas, las relaciones que establecen a partir de trabajo. Este conjunto 
                            de reglas debe garantizar el cumplimiento de las obligaciones de las partes que intervienen en una relación de trabajo.</p>:null
                        }
                        <button className="btn btn-info" onClick={()=>setShow(true)}>mostrar</button>
                        <button className="btn btn-light" onClick={()=>setShow(false)}>ocultar</button>
                        <Link to="/register">Me interesa</Link>
                    </ul>               

               </div>
        </Ventana>    

        {/* seguro de vida  */}
  

            <div className="serviciop" onClick={() => cambiarEstadoModal2(!estadoModal2)}>
            <h3>seguros</h3>
            <img className="serv-imag" src={seguro} alt="seguros-vida"></img> 

           
            <ContenedorBotones>
                <Boton className="btn btn-primary " onClick={() => cambiarEstadoModal2(!estadoModal2)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal2}
            cambiarEstado = {cambiarEstadoModal2}
            titulo = "Seguros de vida (FundihecoSAS)" >
                 
                 <div>
                    <ul  className="servicioss">
                        <li><strong>Por fallecimiento del titular</strong></li>
        
                        {
                            show?<p>La familia o a quien indique en el momento de recinir el seguro será el beneficiado de un monto de dinero, el cual 
                            le será entregado posterior al fallecimiento del titular</p>:null
                        }

                        <li><strong>Por incapacidad</strong></li>
                    
                        {
                            show?<p>Al adquirir el seguro podrá obtener una cantidad de dinero, el monto de este depende de lo que indique un juez o médico
                            quien valore la gravedad de la incapacidad que se haya provocado</p>:null
                        }

                        <li><strong>Por incapacidad</strong></li>
                        
                        {
                            show?<p>Es un dinero que se da a su cónyuge posterior a su fallecimiento, esto con el fin de no dejar desamparada a su cónyuge en 
                            esos difíciles momentos y pueda tener una forma de sustentarse mientras realiza los procesos de sucesión</p>:null
                        }
                        <button className="btn btn-info" onClick={()=>setShow(true)}>mostrar</button>
                        <button className="btn btn-light" onClick={()=>setShow(false)}>ocultar</button>
                        <Link to="/register">Me interesa</Link>
                    </ul>               

               </div>
        </Ventana>      
           
        {/* tramites prestacionales  */}

        <div className="serviciop" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
            <h3>Trámites prestacionales</h3>
            <img className="serv-imag" src={tramites} alt="seguros-vida"></img> 

           
            <ContenedorBotones>
                <Boton className="btn btn-primary " onClick={() => cambiarEstadoModal3(!estadoModal3)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal3}
            cambiarEstado = {cambiarEstadoModal3}
            titulo = "Tramites frente al ministerio de defensa (FundihecoSAS)" >
            <div>
                    <ul  className="servicioss">
                        <li><strong>Pensiones de supervivencia</strong></li>
        
                        {
                            show?<p>se ayuda a realizar el debido trámite de supervivencia frente a la entidad correspondiente indicándole que documentos
                            debe de presentar o en caso de demoras u otro inconveniente, se le ayudara para que pueda realizar su tramo de forma correcta y ágil</p>:null
                        }

                        <li><strong>Trámites Institucionales</strong></li>
                    
                        {
                            show?<p>En cualquier trámite institucional se le brindará una, guia y apoyo al momento de realizar el trámite en cuestión</p>:null
                        }

                        <li><strong>Pensiones de sociales FFMM. Y Ponal</strong></li>
                        
                        {
                            show?<p>Se le dará un apoyo y guía al momento de realizar el trámite de pensión en las entidades de FFMM y Ponal para que sea un
                             proceso ágil y seguro</p>:null
                        }
                        <button className="btn btn-info" onClick={()=>setShow(true)}>mostrar</button>
                        <button className="btn btn-light" onClick={()=>setShow(false)}>ocultar</button>
                        <Link to="/register">Me interesa</Link>
                    </ul>               

               </div>
                
        </Ventana>  
          {/* asesoria en salud  */}

          <div className="serviciop" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
            <h3>Asesoría trámites de salud</h3>
            <img className="serv-imag" src={salud} alt="seguros-vida"></img> 

           
            <ContenedorBotones>
                <Boton className="btn btn-primary" onClick={() => cambiarEstadoModal4(!estadoModal4)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal4}
            cambiarEstado = {cambiarEstadoModal4}
            titulo = "Tramites frente al ministerio de defensa (FundihecoSAS)" >
            <div>
                    <ul  className="servicioss">
                        <li><strong>Ruta de atención</strong></li>
        
                        {
                            show?<p>Se le ayudará en caso de tener inconvenientes en sacar una cita, que le entreguen algún resultado
                            u algún otro proceso de salud que tenga</p>:null
                        }

                        <li><strong>Asesoría jurídica</strong></li>
                    
                        {
                            show?<p>Tenemos un grupo de abogados dispuestos a ayudarle con sus casos medicos, ellos harán una análisis de su caso y le ayudarán 
                            en el proceso legal que se deba realizar</p>:null
                        }

                        <li><strong>Asistencia en casos especiales</strong></li>
                        
                        {
                            show?<p>en casos especiales se le atenderá y ayudará para sus procesos médicos  </p>:null
                        }
                        <button className="btn btn-info" onClick={()=>setShow(true)}>mostrar</button>
                        <button className="btn btn-light" onClick={()=>setShow(false)}>ocultar</button>
                        <Link to="/register">Me interesa</Link>
                    </ul>               

               </div>
                
        </Ventana>  

        {/* servicio funerario */}

        <div className="serviciop" onClick={() => cambiarEstadoModal5(!estadoModal5)}>
            <h3>Servicios funerarios</h3>
            <img className="serv-imag" src={funerario} alt="seguros-vida"></img> 

            <ContenedorBotones>
                <Boton className="btn btn-primary " onClick={() => cambiarEstadoModal5(!estadoModal5)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal5}
            cambiarEstado = {cambiarEstadoModal5}
            titulo = "Servicio Funerario (FundihecoSAS)" >

        <div>
                    <ul  className="servicioss">
                        <li><strong>Auxilio funerario</strong></li>
        
                        {
                            show?<p>Es un servicio que se le dará a su familia para cubrir los requerimientos que se necesiten en el momento
                            en que el afiliado fallezca </p>:null
                        }

                        <li><strong>Asesoría para prestación del servicio</strong></li>
                    
                        {
                            show?<p>acompañaremos a su familia en ese doloroso proceso para que se cumpla debidamente con todos los requisitos
                            que debe tener el velorio de un héroe de la patria, tener un debido cajon, una corona de flores y todo aquello
                            que sea necesario</p>:null
                        }

                        <li><strong>Trámite de servicios médicos a supervivientes</strong></li>
                        
                        {
                            show?<p>se brindará una asesoría y acompañamiento para que sus familiares obtengan de forma rápida y efectiva 
                            los documentos que deban ser entregados por su fallecimiento</p>:null
                        }

                        <li><strong>Acompañamiento en trámite pensión de supervivencia</strong></li>
                        
                        {
                            show?<p>Se le dará una guía y acompañamiento para que este trámite sea algo fácil de realizar </p>:null
                        }
                        <button className="btn btn-info" onClick={()=>setShow(true)}>mostrar</button>
                        <button className="btn btn-light" onClick={()=>setShow(false)}>ocultar</button>
                        <Link to="/register">Me interesa</Link>
                    </ul>               

               </div>    
              
 
        </Ventana>  
        {/* servicio funerario */}

        <div className="serviciop" onClick={() => cambiarEstadoModal6(!estadoModal6)}>
            <h3>Bienestar</h3>
            <img className="serv-imag" src={terserizar} alt="seguros-vida"></img> 

            <ContenedorBotones>
                <Boton className="btn btn-primary " onClick={() => cambiarEstadoModal6(!estadoModal6)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal6}
            cambiarEstado = {cambiarEstadoModal6}
            titulo = "Bienestar (FundihecoSAS)" >

        <div>
                    <ul  className="servicioss">
                        <li><strong>Información permanente de alianzas con mindefensa</strong></li>
        
                        {
                            show?<p>Se brindará un puente de comunicación entre nuestros afiliados y el ministerio de defensa en el cual estarán más cerca 
                            y habrá una comunicación más amena entre las partes </p>:null
                        }

                        <li><strong>Alianzas de nuestras instituciones aliadas</strong></li>
                    
                        {
                            show?<p>Tendrá el beneficio de disfrutar de nuestras empresas aliadas y poder hacer uso de las mismas</p>:null
                        }

                        <li><strong>Cursos de capacitación</strong></li>
                        
                        {
                            show?<p>Por intermedio de nuestras empresas aliadas se dictarán cursos a nuestros afiliados para que estos puedan 
                            surgir en sus emprendimientos o metas de estudio que se tengan propuesta</p>:null
                        }

                        <li><strong>Procesos para emprendimientos</strong></li>
                        
                        {
                            show?<p>Se dará una ayuda a aquellos afiliados que tengan algún emprendimiento por medio de nuestros aliados  </p>:null
                        }
                        <button className="btn btn-info" onClick={()=>setShow(true)}>mostrar</button>
                        <button className="btn btn-light" onClick={()=>setShow(false)}>ocultar</button>
                        <Link to="/register">Me interesa</Link>
                    </ul>               

               </div>                     
 
        </Ventana>  


        {/* footer */}
      <Fotpage/>

    </div>
    
    );
  }

export default Servicios;

const ContenedorBotones = styled.div`

 width:18rem;
 margin: 0 auto;
 justify-content: center;
 font-size:20px;
 font-weight:600;
        
`;

const Boton = styled.button`
    width:100%;
    background-color:#2B6CC1;
    border-: none;
    

    &:hover{
        background-color:#338DFF;
    };
`;


