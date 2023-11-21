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
                src="/contrato.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Missão</h5>
                <p className="card-text">
                Promover soluções jurídicas, garantindo oportunidades e experiências personalizadas aos nossos clientes, membros e parceiros. 

                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="/marteloJuiz.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Visão</h5>
                <p className="card-text">
                Ser a Empresa Júnior Jurídica de maior referência em serviços de qualidade no Estado de São Paulo, atingindo o Cluster 3 do Movimento Brasil Júnior até 2024.

                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="/dashboard.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Valores</h5>
                <div className="card-text">
                    <div className="valores">Paixão pelo propósito</div>
                    <div className="valores">Foco no cliente</div>
                    <div className="valores">Responsabilidade com a empresa</div>
                    <div className="valores">Protagonismo no cotidiano</div>
                    <div className="valores">Pluralidade</div>
                    <div className="valores">Profissionalismo</div>
                </div>
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
