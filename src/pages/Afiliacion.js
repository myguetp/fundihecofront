import React, {Component} from 'react';
import jsPDF from 'jspdf';
import './Afiliacion.css';
import Footer from '../components/Footer';


export class Afiliacion extends Component {
    constructor(props){
        super(props);
        this.state ={}
    };
    generatePDF = () => {
        let doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector('#contenido'),{
            callback: function(pdf){
                pdf.save("mypdf.pdf");
            }
        })
    };
  render() {
    return(
    <div className="contenedor"> 
    <div id="contenido">
       <h3>Contrato afiliacion fundiheco SAS</h3>
       <p>Por una parte, FUNDIHECO.SAS, empresa legalmente constituida identificada con NIT. No. 900829999-6, quien para los efectos de este documento se denominará 
       FUNDIHECO.SAS y, por la otra parte,<input type="text" placheholder="nombre y apellido"></input>mayor de edad, vecino de la ciudad de <input type="text" placheholder="ciudad"></input>, identificado como 
       aparece al pie de su firma, quien en adelante se denominará  EL AFILIADO, acuerdan celebrar el presente CONTRATO DE AFILIACIÓN, el cual se regirá por las normas 
       de derecho privado y las siguientes cláusulas: PRIMERA. OBJETO: En virtud del presente contrato, FUNDIHECO.SAS se obliga para con EL AFILIADO a: 1. Brindarle 
       el servicio de consultorio jurídico en derecho administrativo, derecho de familia, derecho de seguros y derecho laboral, así como la asesoría para trámites 
       prestacionales ante el Ministerio de Defensa (pensión, supervivencia, junta médica laboral y trámites ante las oficinas de prestaciones sociales de las fuerzas,
       pago de seguros por discapacidad).  2. Veeduría en los servicios de salud del Subsistema de Salud de las Fuerzas Militares y Policía Nacional. 3. Información sobre 
       trámites y procedimientos de bienestar ante la Caja de Sueldos de Retiro de la Policía Nacional, Caja de Retiro de las Fuerzas Militares y Ministerio de Defensa 
       Nacional. 4. Asesoría integral en servicios funerarios. 5. Ejecutar trabajo social político de inclusión ante el Gobierno Nacional (promover la Ley del Veterano y 
       otros proyectos). PARÁGRAFO PRIMERO: En caso de  existir la necesidad de interponer demandas de reparación directa y/o de responsabilidad civil, en nombre y 
       representación del AFILIADO para obtener algún tipo de indemnización o reconocimiento en caso de perjuicios ocasionados; se dará sólo en caso que nuestro equipo 
       jurídico considere su viabilidad; el valor por concepto de honorarios para nuestros abogados para el caso de estas demandas, será del veinte (20%) por ciento, de lo 
       que se le reconozca, liquide y pague al AFILIADO, por parte de los DEMANDADOS O CONVOCADOS, por cualquier concepto respecto de la indemnización, dineros y/o cualquier 
       otro derecho pretendido en la respectiva Demanda y/o en la respectiva Conciliación o en cualquier forma de terminación normal o anormal del proceso. SEGUNDA. 
       OBLIGACIONES DE FUNDIHECO.SAS: FUNDIHECO.SAS se obliga a cumplir con las siguientes obligaciones: 1. Cumplir con el objeto del presente contrato. 
       2. Prestar los servicios de asesoría bajo la modalidad de jornada continua, los días hábiles de lunes a viernes de 8:00 a.m. a 5:00 p.m,  3. Mantener habilitada su 
       línea celular durante el horario de prestación de servicios previamente enunciado,  4. Contar con el personal idóneo para la prestación de los servicios, 5. Resolver 
       cada consulta dentro del horario de atención, en un tiempo máximo aproximado a dos (3) días hábiles. OBLIGACIONES DEL AFILIADO: El AFILIADO se obliga con el ASESOR 
       a: 1. Efectuar un pago de la afiliación de $30.000 Treinta mil pesos moneda Colombiana, 2. Prestar toda la colaboración que solicite FUNDIHECO.SAS, facilitando la
        información que éste requiera para el correcto cumplimiento del presente contrato, 3. Todas las demás que sean necesarias para cumplir con el objeto del presente 
        contrato. TERCERA. VALOR DEL CONTRATO: El AFILIADO efectuará un pago de mínimo $30.000 treinta mil pesos moneda colombiana, pago que se realizará de forma mensual, 
        los cuales se incrementarán cada año según corresponda la junta directiva de FUNDIHECO.SAS, la cual nos permitirá colocar a su disposición los servicios brindados 
        por FUNDIHECO.SAS, durante los treinta días correspondientes a ese mes. CUARTA. EJECUCIÓN DEL CONTRATO: FUNDIHECO.SAS comenzará a prestar sus servicios a partir 
        del día siguiente de efectuado el pago por EL AFILIADO. QUINTA. CAUSALES DE TERMINACIÓN: El presente contrato terminará por cualquiera de las siguientes causas: 
        1. Por el mutuo acuerdo de las partes, 2. Por la decisión unilateral y previo aviso del AFILIADO con anticipación mínima de tres meses 4. Por imposibilidad de 
        seguir ejecutando su objeto 5. Por cualquier otra legalmente establecida. SEXTA. CESIÓN: Ninguna de las partes podrá ceder el presente contrato, salvo la previa 
        autorización expresa y escrita de la otra. SÉPTIMA. MODIFICACIONES AL CONTRATO: Toda modificación o enmienda total o parcial del presente contrato sólo tendrá 
        validez si es aceptada por AFILIADO. PARÁGRAFO: Cuando la modificación al presente contrato se trate de la ampliación del portafolio de servicios brindados por 
        FUNDIECO.SAS, EL AFILIADO podrá acceder a los nuevos servicios sin que sea necesaria la referida aprobación. OCTAVA. CONFIDENCIALIDAD: FUNDIHECO.SAS 
        se obliga y garantiza que guardará la debida reserva sobre la información que le sea suministrada en desarrollo del presente contrato, la cual para todos los efectos
        será considerada como “Información Confidencial” y de propiedad del AFILIADO. Así mismo, FUNDIHECO.SAS garantiza que la información que conozca y genere en 
        desarrollo del presente contrato,  no se entregará o suministrará total o parcialmente a ningún tercero o persona ajena o extraña al AFILIADO, salvo que 
        EL AFILIADO expresamente y por escrito lo autorice o, se trate de un requerimiento de una autoridad judicial.	PARÁGRAFO: FUNDIHECO.SAS, autoriza que los 
        documentos que produzca en desarrollo del presente contrato podrán ser citados y transcritos total o parcialmente por el AFILIADO, ante autoridades y ante 
        terceros cuando así lo considere conveniente y necesario. NOVENA. DOMICILIO CONTRACTUAL: Las partes convienen en señalar como domicilio contractual la ciudad de 
        Bogotá D.C. DÉCIMA. NOTIFICACIONES: FUNDIHECO.SAS recibirá las notificaciones a las que haya lugar, en el correo electrónico: presidencia@fundiheco.com o en la 
        siguiente dirección: Cra 24 No 35 - 08 Piso 2 de la ciudad de Bogotá D.C., y EL AFILIADO en el correo y/o la dirección suministrada a FUNDIHECO.SAS.        
         </p>
         <p>firma y huella ________________________________</p>
             <p>Para constancia se firma por parte del AFILIADO Y EL ASESOR, el presente contrato, en dos ejemplares del mismo tenor y efecto legal, en la ciudad de Bogotá D.C.
              a los</p>
         <div>            
             
              <input type='date' name='fecha'required></input>
         </div>
    </div>
    <button onClick={this.generatePDF} type="primary">Generate pdf</button>
    <Footer />
    </div>
    
    );
  }
}

export default Afiliacion;
