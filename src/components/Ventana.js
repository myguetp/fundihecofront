import React from 'react';
import styled from 'styled-components';

const Ventana = ({children, estado, cambiarEstado, titulo}) =>{
    return(
        <>
            {estado && 
           <Overlay>
                <ContenedorModal>
                    <EncabezadoModal>
                        <h3>{titulo}</h3>
                        
                    </EncabezadoModal>
                    <BotonCerrar onClick={() =>cambiarEstado(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                        <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>  
                    </BotonCerrar>
                    {children}
                </ContenedorModal>
           </Overlay>
            }
        </>
    );
}
export default Ventana;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .7);

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 38rem;
    min-height: 720px;
    background: #fff;
    position: relative;
    border-radius: 3px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px;
 
    @media(max-width: 414px){
        width: 22rem;
        padding: 8px;
        min-height: 620px;
      
    }
`;


const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid gray;

    h3{
        font-weight:500;
        color: #4444;

    }

    
    @media(max-width: 414px){
        margin-bottom: 0px;
        margin-top:15PX;      
        
    }
    
`;

const BotonCerrar = styled.button`
    position:absolute;
    top: 1rem;
    right: 1rem;

    width:30px;
    height:30px;
    border:none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    color: gray;

    &:hover {
        color: #111;
        
        }

    svg{
        width: 100%;
        height: 100%;
    }   

     @media(max-width: 414px){
        position: relative;
        top: 0rem;
        right: 0rem;
        width:30px;
        
        
       
    } 

`;
