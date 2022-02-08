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
import Footer from '../components/Footer';



const Servicios = () =>{

    const [show,setShow]=React.useState(false)


    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
  

    return (
    <div className="allserice">
        <div className="serviciop" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
            <h3>Asesoria juridíca</h3>
            <img className="serv-imag" src={juridica} alt="asesoria-juridica"></img>        
           
            <ContenedorBotones>
                <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal1}
            cambiarEstado = {cambiarEstadoModal1}
            titulo = "Asesoria Jurídica (FundihecoSAS)"
 
        >
                 
               <div>
                    <ul>
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
                        <button onClick={()=>setShow(true)}>mostrar</button>
                        <button onClick={()=>setShow(false)}>ocultar</button>
                    </ul>               

               </div>
        </Ventana>    

        {/* seguro de vida  */}
  

            <div className="serviciop" onClick={() => cambiarEstadoModal2(!estadoModal2)}>
            <h3>seguros</h3>
            <img className="serv-imag" src={seguro} alt="seguros-vida"></img> 

           
            <ContenedorBotones>
                <Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal2}
            cambiarEstado = {cambiarEstadoModal2}
            titulo = "Seguros de vida (FundihecoSAS)" >
                 
                 <div>
                    <ul>
                        <li><strong>Por fallecimiento del titular</strong></li>
        
                        {
                            show?<p>La familia o a quien indique en el momento de recinir el seguro sera el beneficiado de un monto de dinero el cual 
                            le sera entregado posterior al fallecimiento del titular</p>:null
                        }

                        <li><strong>Por incapacidad</strong></li>
                    
                        {
                            show?<p>Al adquirir el seguro podra obtener una cantidad de dinero el monto de este depende de lo que indique un juez o medico
                            quien valore la gravedad de la incapaciad que se haya provocado</p>:null
                        }

                        <li><strong>Por incapacidad</strong></li>
                        
                        {
                            show?<p>Es un dinero que se da a su conyuge posterior a su fallecimiento esto con el fin de no dejar desamparada a su conyugue en 
                            esos dificiles momentos y pueda tener una forma de sustentarse mientras realiza los procesos de sucesión</p>:null
                        }
                        <button onClick={()=>setShow(true)}>mostrar</button>
                        <button onClick={()=>setShow(false)}>ocultar</button>
                       
                    </ul>               

               </div>
        </Ventana>      
           
        {/* tramites prestacionales  */}

        <div className="serviciop" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
            <h3>Tramites prestacionales</h3>
            <img className="serv-imag" src={tramites} alt="seguros-vida"></img> 

           
            <ContenedorBotones>
                <Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal3}
            cambiarEstado = {cambiarEstadoModal3}
            titulo = "Tramites frente al ministerio de defensa (FundihecoSAS)" >
            <div>
                    <ul>
                        <li><strong>Pensiones de supervivencia</strong></li>
        
                        {
                            show?<p>se ayuda a ralizar el debido tramite de supervicencia frente a la entidad correspondiente indicandole que documentos
                            debe de presentar o en caso de demoras u otro inconveniente se le ayudara para que pueda realizar su tramo de forma correcta y agil</p>:null
                        }

                        <li><strong>Tramites Institucionales</strong></li>
                    
                        {
                            show?<p>En cualquier tramite institucional se le brindara una guia y apoyo al momento de realizar el tramite en cuestion</p>:null
                        }

                        <li><strong>Pensiones de sociales FFMM. Y Ponal</strong></li>
                        
                        {
                            show?<p>Se le dara un apoyo y guia al momento de realizar el tramite de pension en las entidades de FFMM y Ponal para que sea un
                             proceso agil y seguro</p>:null
                        }
                        <button onClick={()=>setShow(true)}>mostrar</button>
                        <button onClick={()=>setShow(false)}>ocultar</button>
                       
                    </ul>               

               </div>
                
        </Ventana>  
          {/* asesoria en salud  */}

          <div className="serviciop" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
            <h3>Asesoria tramites de salud</h3>
            <img className="serv-imag" src={salud} alt="seguros-vida"></img> 

           
            <ContenedorBotones>
                <Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal3}
            cambiarEstado = {cambiarEstadoModal3}
            titulo = "Tramites frente al ministerio de defensa (FundihecoSAS)" >
            <div>
                    <ul>
                        <li><strong>Ruta de atención</strong></li>
        
                        {
                            show?<p>Se le ayudara en caso de tener inconvenientes en sacar una cita,que le entreguen algun resultado
                            u algun otro proceso de salud que tenga</p>:null
                        }

                        <li><strong>Asesoria juridica</strong></li>
                    
                        {
                            show?<p>Tenemos un grupo de abogados dispuestos a ayudarle con sus caasos medicos ellos haran una anlisis de su caso y le ayudaran 
                            en el proceso legal que se deba realizar</p>:null
                        }

                        <li><strong>Asistencia en casos especiales</strong></li>
                        
                        {
                            show?<p>en casos especiales se le atendera y ayudara para sus procesos medicos  </p>:null
                        }
                        <button onClick={()=>setShow(true)}>mostrar</button>
                        <button onClick={()=>setShow(false)}>ocultar</button>
                       
                    </ul>               

               </div>
                
        </Ventana>  

        {/* servicio funerario */}

        <div className="serviciop" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
            <h3>Servicios funerarios</h3>
            <img className="serv-imag" src={funerario} alt="seguros-vida"></img> 

            <ContenedorBotones>
                <Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal4}
            cambiarEstado = {cambiarEstadoModal4}
            titulo = "Servicio Funerario (FundihecoSAS)" >

        <div>
                    <ul>
                        <li><strong>Auxilio funerario</strong></li>
        
                        {
                            show?<p>Es un servicio que se le dara a su familia para cubrir los requerimientos que se encesiten en el momento
                            en que el afiliado fallezca  </p>:null
                        }

                        <li><strong>Asesoría para prestación del servicio</strong></li>
                    
                        {
                            show?<p>acompañaremos a su familia en ese doloroso proceso para que se cumpla debidamente con todos los requisitos
                            que debe tener el velorio de un heroe de la patria tener un debido cajon una corona de flores y todo aquello
                            que sea necesario</p>:null
                        }

                        <li><strong>Tramite de servicios médicos a supervivientes</strong></li>
                        
                        {
                            show?<p>se brindara una asesoria y acompañamiento para que sus familiares obtengan de forma rapida y efectiva 
                            los documentos que deban ser entregados por su fallecimiento</p>:null
                        }

                        <li><strong>Acompañamiento en tramite pensión de supervivencia</strong></li>
                        
                        {
                            show?<p>Se le dara una guia y acompañamiento para que este tramite sea algo facil de realizar </p>:null
                        }
                        <button onClick={()=>setShow(true)}>mostrar</button>
                        <button onClick={()=>setShow(false)}>ocultar</button>
                       
                    </ul>               

               </div>    
              
 
        </Ventana>  
        {/* servicio funerario */}

        <div className="serviciop" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
            <h3>Bienestar</h3>
            <img className="serv-imag" src={terserizar} alt="seguros-vida"></img> 

            <ContenedorBotones>
                <Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>Información</Boton>
            </ContenedorBotones>
        </div>
        <Ventana
            estado = {estadoModal4}
            cambiarEstado = {cambiarEstadoModal4}
            titulo = "Bienestar (FundihecoSAS)" >

        <div>
                    <ul>
                        <li><strong>AInformación permanente de alianzas con mindefensa</strong></li>
        
                        {
                            show?<p>SE brindara un puente de comunicación entre nuestros afiliados y el ministerio de defensa en el cual estaran ams cerca 
                            y habra una comunicación mas amena entre las partes </p>:null
                        }

                        <li><strong>Alianzas de nuestra instituciones aliadas</strong></li>
                    
                        {
                            show?<p>Tendra el beneficio de disfrutar de nuestras empresas aliadas y poder hacer uso de las mismas</p>:null
                        }

                        <li><strong>Cursos de capacitación</strong></li>
                        
                        {
                            show?<p>Por intermedio de nuestras empresas aliadas se dictaran cursos a nuestros afiliados para que estos puedan 
                            surgir en sus emprendimientos o metas de estudio que se tengan propuesta</p>:null
                        }

                        <li><strong>Procesos para emprendimientos</strong></li>
                        
                        {
                            show?<p>Se dara una ayuda a a aquellos afiliados que tengan algun emprendimiento por medio de nuestrois aliados </p>:null
                        }
                        <button onClick={()=>setShow(true)}>mostrar</button>
                        <button onClick={()=>setShow(false)}>ocultar</button>
                       
                    </ul>               

               </div>    
                 
 
        </Ventana>  


        {/* footer */}
        <Footer />

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


