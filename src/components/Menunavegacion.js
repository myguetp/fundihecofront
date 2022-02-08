import { BrowserRouter, Route, Routes } from "react-router-dom"
import Conocenos from "../pages/Conocenos";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Presentacion from "../pages/Presentacion";
import Registrarse from "../pages/Registrarse";
import Servicios from "../pages/Servicios";
import Usuario from "../pages/Usuario";
import MenuLink from "./MenuLink";



const ConceptosBasicos = () =>{
    return(
        <BrowserRouter>
            <MenuLink />
            <Routes>
            <Route exact path= "/knowledge" element={<Conocenos />}/>
            <Route exact path= "/service" element={<Servicios />}/> 
            <Route exact path= "/contact" element={<Contacto/>}/>
            <Route exact path= "/user" element={<Usuario />} />
            <Route exact path= "/base" element={<Registrarse />}/>
            <Route path= "*" element={<Error404 />}/>
            <Route exact path= "/" element={<Presentacion />}>

            </Route>
            
            </Routes>
        </BrowserRouter>
    )
}

export default ConceptosBasicos;