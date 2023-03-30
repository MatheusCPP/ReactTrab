import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import SobreC from '../CardSobre';

function Sobre() {
    const { name } = useParams();
    
    return (
        <div>   
            <Title title="Sobre" text= "Conheca o novo netflix" />         
                <SobreC text = "A Netflix é uma plataforma de streaming de vídeo que oferece um vasto catálogo de filmes, séries, documentários e programas de TV para seus assinantes em mais de 190 países. A empresa investe em produções próprias, como a premiada série Stranger Things, além de adquirir conteúdo licenciado de outras empresas. A Netflix utiliza tecnologia de ponta para oferecer uma experiência personalizada e de alta qualidade aos usuários, permitindo que assistam seus programas favoritos em qualquer dispositivo conectado à internet. A plataforma se tornou uma das principais formas de entretenimento na era digital."/>
        </div>
    )
}

export default Sobre;