import React from 'react';
import Title from './../components/Title/index'
import Details from '../CardDetails';


function Detalhes() {
    return (
        <div className='vh-100'>
            <Title title='Detalhes dos filmes' text='' />
            <Details />

        </div>
    )
}

export default Detalhes;