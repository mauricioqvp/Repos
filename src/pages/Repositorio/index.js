import React from 'react';
import { useParams } from 'react-router-dom';

function Repositorio(){

    let {repositorio} = useParams();

    return(
        <h1 style={{color:'#fff'}}>
            {repositorio}
        </h1>
    );
}

export default Repositorio;