// Marcim T27 ~ 27/09/2023
// Usei framer-motion pra dar um fade-in resenha
import { useInView } from "framer-motion";

import React, { useEffect, useRef } from "react";
import "./MVV.css";

import { Link } from "react-router-dom";

const MVV = () => {

  const MVVObject = {
    missao: "Promover soluções jurídicas, garantindo oportunidades e experiências personalizadas aos nossos clientes, membros e parceiros.",
    visao: "Ser a empresa júnior jurídica referência no Brasil e formar líderes de impacto por meio da vivência empreserial, atingindo o Cluster 4 em 2024.",
    valores: [
      "Foco no Cliente",
      "Excelência no trabalho",
      "Responsabilidade com a empresa",
      "Protagonismo no cotidiano",
      "Profissionalismo",
      "Paixão pelo propósito",
      "Pluralidade",
    ],
  }

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
                  {MVVObject.missao}
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
                  {MVVObject.visao}
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
                  {MVVObject.valores.map((e, index) => {
                    return (
                      <div className="valores" key={index}>{e}</div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="btn-mais">
          <Link to="/historia" className="btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Conheça nossa história
          </Link>
        </div>
      </section>
    </>
  );
};

export default MVV;
