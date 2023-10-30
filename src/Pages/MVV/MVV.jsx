// Marcim T27 ~ 27/09/2023
// Usei framer-motion pra dar um fade-in resenha
import { useInView } from "framer-motion";

import React, { useEffect, useRef } from "react";
import "./MVV.css";

import { Link } from "react-router-dom";

const MVV = () => {
  const cards = useRef(null);

  const isInView = useInView(cards);

  useEffect(() => {
    if (isInView) {
      cards.current.classList.add("animate-fadein");
    }else{
      cards.current.classList.remove("animate-fadein");
    }
  }, [isInView]);

//   cards.current.classList.add("animate-fadein");


  return (
    <>
      <section id="mvv">
        <div className="container">
          <div className="titulo">
            <h2>
              <span>MISSÃO, VISÃO E VALORES</span>
            </h2>
          </div>
          <div ref={cards} className="card-group tres-cards info">
            <div className="card">
              <img
                style={{ padding: "35px" }}
                className="card-img-top"
                src="./svg/contrato.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Missão</h5>
                <p className="card-text">
                Impactar a sociedade por meio da capacitação dos nossos membros para a realização de consultorias jurídicas.
                  
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="./svg/marteloJuiz.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Visão</h5>
                <p className="card-text">
                Tornar-se referência de consultoria jurídica para o segundo e terceiro setor, 
                disseminando conhecimento jurídico e uma cultura de responsabilidade social a todos.
                  
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="./svg/dashboard.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Valores</h5>
                <p className="card-text">
                    <div className="valores">Excelência</div>
                    <div className="valores">Dinamismo</div>
                    <div className="valores">Sentimento de Dono</div>
                    <div className="valores">Consciência</div>
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="btn-mais">
          <Link to="/sobre" className="btn">
            Sobre Nós
          </Link>
        </div>
      </section>
    </>
  );
};

export default MVV;
