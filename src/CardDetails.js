import { useParams } from 'react-router-dom';

const filmes = [{
    "nome": "Scooby Doo o Misterio Comeca",
    "duracao": "2H30",
    "foto": "Scooby.png",
    "ano": 2002,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Filme de um cachorro atras de um fantasma",
    "nota": 5
},
{
    "nome": "As Branquelas",
    "duracao": "1H50",
    "foto": "as-branquelas-min (1).jpg",
    "ano": 2009,
    "assistido": true,
    "genero": "Comedia",
    "descricao": "Filme de comedia",
    "nota": 10
},
{
    "nome": "Vovózona 3",
    "duracao": "1H10",
    "foto": "vovozona.jpg",
    "ano": 2012,
    "assistido": false,
    "genero": "Comedia",
    "descricao": "2 idiotas na faculdade",
    "nota": 8
}]

function Details(){

    const { filme } = useParams();

    return(
        <div className='vh-100'>
            <div className='container'>
                <div className='row'>
                    {(() => {
                        if (filme === 'Scooby Doo o Misterio Comeca') {
                            return (
                                <div className='col-12'>
                                    <div className='bg-light p-3 d-flex justify-content-center'>
                                        <div className='col-12 col-md-6 d-flex justify-content-center'>
                                            <img src={'/assets/images/' + filmes[0].foto} className='img-fluid mx-auto hover-zoom' alt={filmes[0].nome}></img>
                                        </div>
                                        <div className='col-12 col-md-6 d-flex align-items-center'>
                                            <div>
                                                <p className='text-center'>Filme: {filme}</p>
                                                <p className='text-center'>Duracao: {filmes[0].duracao}</p>
                                                <p className='text-center'>Genero: {filmes[0].genero}</p>
                                                <p className='text-center'>Sinopse: {filmes[0].descricao}</p>
                                                <p className='text-center'>Pontuacao: {filmes[0].nota}</p>
                                                <p className='text-center'>Assistido: {filmes[0].assistido}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (filme === 'As Branquelas') {
                            return (
                                <div className='col-12'>
                                    <div className='bg-light p-3 d-flex justify-content-center'>
                                        <div className='col-3 col-md-3 d-flex justify-content-center'>
                                            <img src={'/assets/images/' + filmes[1].foto} className='img-fluid mx-auto hover-zoom' alt={filmes[0].nome}></img>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className="pt-5">
                                                <p className='text-center'>Filme: {filme}</p>
                                                <p className='text-center'>Duracao: {filmes[1].duracao}</p>
                                                <p className='text-center'>Genero: {filmes[1].genero}</p>
                                                <p className='text-center'>Sinopse: {filmes[1].descricao}</p>
                                                <p className='text-center'>Pontuacao: {filmes[1].nota}</p>
                                                <p className='text-center'>Assistido: {filmes[1].assistido}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='col-12'>
                                    <div className='bg-light p-3 d-flex justify-content-center'>
                                        <div className='col-12 col-md-6 d-flex justify-content-center'>
                                            <img src={'/assets/images/' + filmes[2].foto} className='img-fluid mx-auto hover-zoom' alt={filmes[2].nome}></img>
                                        </div>
                                        <div className='col-12 col-md-6 d-flex align-items-center'>
                                            <div>
                                                <p className='text-center'>Filme: {filme}</p>
                                                <p className='text-center'>Duracao: {filmes[2].duracao}</p>
                                                <p className='text-center'>Genero: {filmes[2].genero}</p>
                                                <p className='text-center'>Sinopse: {filmes[2].descricao}</p>
                                                <p className='text-center'>Pontuacao: {filmes[2].nota}</p>
                                                <p className='text-center'>Assistido: {filmes[2].assistido}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default Details;