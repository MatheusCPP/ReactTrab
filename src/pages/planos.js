import React from 'react';
import Title from './../components/Title/index';
import CardPlan from '../CardPlanos';


 
function Planos(){
    return (
        <div>
            <Title title="Planos" text= "Conheca nossos planos" />  
            <CardPlan />
        </div>
    )   
}
 
export default Planos;