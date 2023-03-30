import React from 'react';
import Filme from './../components/Filme/index';
import Title from './../components/Title/index';

function Home() {
    return (
        <div>
        <Title title="Catalogo de Filmes" text="Filmes Disponiveis" />
        <Filme />
        </div>
    )
}
export default Home;