import React from 'react'
import "./Diferenciais.css"

const Diferenciais = () => {
  return (<>
    <div id="sobre"></div>
      <section id="Diferenciais">
    <div className="container">
        <div className="titulo">				
            <h2>NOSSOS<br/><span>DIFERENCIAIS</span></h2>
            <p className="">Mais do que satisfazer o cliente, nossa preocupação é oferecer a melhor solução. Para isso, contamos com diferenciais que mostram porque contratar a ITA Júnior é a melhor oportunidade de realizar seus objetivos.</p>
        </div>

        <div className="bloco">
            <div className="cards">
                <div className="card-content">
                    <h3 className="card-titulo">Capacidade</h3>
                    <p>Nossos membros estão em treinamento constante, orientados para realizar projetos de excelência.</p>
                    <a href="contato.html" className="btn-mais">Contato</a>
                </div>
            </div>
            <div className="cards">
                <div className="card-content">
                    <h3 className="card-titulo">Tradição</h3>
                    <p>Realizamos projetos com a qualidade de uma empresa júnior que está há 30 anos no mercado.</p>
                    <a href="contato.html" className="btn-mais">Contato</a>
                </div>
            </div>
            <div className="cards">
                <div className="card-content">
                    <h3 className="card-titulo">Exclusividade</h3>
                    <p>Todos os nossos projetos são feitos do zero e levam em conta as necessidades de cada cliente.</p>
                    <a href="contato.html" className="btn-mais">Contato</a>
                </div>
            </div>
            <div className="cards">
                <div className="card-content">
                    <h3 className="card-titulo">Eficiência</h3>
                    <p>O dinamismo das empresas juniores reduz o tempo de negociação e de execução dos projetos.</p>
                    <a href="contato.html" className="btn-mais">Contato</a>
                </div>
            </div>
        </div>

    </div>
</section>
  </>
  )
}

export default Diferenciais
