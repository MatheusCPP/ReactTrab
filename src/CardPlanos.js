
function CardPlan(){
    return(

      <div className='container'>

      <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src='/assets/images/BobBasic.jpg' className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Basic</h3>
            <h5>5R$</h5>
            <p className="card-text">° Com Anuncios</p>
            <p className="card-text">° 0 telas</p>
            <p className="card-text">° 0 Filmes / 2 Series</p>
          </div>
          <div className="card-footer d-grid">
            <button type="button" className="btn btn-outline-dark" >Adquirir</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src='/assets/images/BobMid.jpg' className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Mid</h3>
            <h5>15R$</h5>
            <p className="card-text">° Sem Anuncios</p>
            <p className="card-text">° 3 telas</p>
            <p className="card-text">° 2 Filmes / 2 Series</p>
          </div>
          <div className="card-footer d-grid">
            <button type="button" className="btn btn-outline-dark">Adquirir</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src='/assets/images/BobPika.png' className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Top</h3>
            <h5>25R$</h5>
            <p className="card-text">° Sem Anuncios</p>
            <p className="card-text">° 5 telas</p>
            <p className="card-text">° 100 Filmes / 100 Series</p>
          </div>
          <div className="card-footer d-grid">
            <button type="button" className="btn btn-outline-dark">Adquirir</button>
          </div>
        </div>
      </div>
    </div>

</div>
    )
}

export default CardPlan;