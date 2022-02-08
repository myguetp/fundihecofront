import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Registro from './Registro';


const Perfil = () => {

    const{user, isAuthenticated}= useAuth0();
  return (
    isAuthenticated && (
    <div>
        <img src={user.picture} alt={user.name}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <hr />
        <Fragment>
          <h3>Base de datos (Fundiheco-sas)</h3>
          <Registro/>
        </Fragment>
               
    </div>
    )

  )
};

export default Perfil
