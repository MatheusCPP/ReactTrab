import "./Filme.css";

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
}
]

function Assistido({javisto}){
 if(javisto){
  return <p className="text-success">Assistido ¥</p>
 }else{
  return <p className="text-danger">nao assistido</p>
 }
}

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i.toString()}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assistido javisto = {filme.assistido}/>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}