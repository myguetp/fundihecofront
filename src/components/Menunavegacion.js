import { BrowserRouter, Route, Routes} from "react-router-dom"
import Conocenos from "../pages/Conocenos";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Presentacion from "../pages/Presentacion";
import Registro from "../pages/Registro";
import Servicios from "../pages/Servicios";
import DatosPersonales from "./DatosPersonales";
import MenuLink from "./MenuLink";




const ConceptosBasicos = () =>{
    return(
        <BrowserRouter>
            <MenuLink />
            <Routes>
            <Route exact path= "/knowledge" element={<Conocenos />}/>
            <Route exact path= "/service" element={<Servicios />}/> 
            <Route exact path= "/contact" element={<Contacto/>}/>
            <Route exact path= "/conditions" element={<DatosPersonales />} />
            <Route exact path= "/regis" element={<Registro />} />
            <Route exact path= "/" element={<Presentacion />}>
                     
            <Route path= "*" element={<Error404 />}/>              

            </Route>
            
            </Routes>
        </BrowserRouter>
    )
}

export default ConceptosBasicos;