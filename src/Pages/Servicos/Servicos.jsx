// Marcim T27 ~ 27/09/2023
// Usei framer-motion pra dar um fade-in resenha
import { useInView } from "framer-motion";

import React, { useEffect, useRef } from "react";
import "./Servicos.css";

import { Link } from "react-router-dom";

const Servicos = () => {
  const cards = useRef(null);
  const isInView = useInView(cards);

  useEffect(() => {
    if (isInView) {
      cards.current.classList.add("animate-fadein");
    }else{
      cards.current.classList.remove("animate-fadein");
    }
  }, [isInView]);

  return (
    <>
      <section id="servicos">
        <div className="container">
          <div className="titulo">
            <h2>
              NOSSOS
              <br />
              <span>SERVIÇOS</span>
            </h2>
            <p>
            O CEJUR é uma entidade que se pauta em serviços paralegais e na elaboração de projetos acadêmicos e sociais. 
            Trabalha com soluções jurídicas e consultorias que contribuem para a adequação jurídica do cliente diante do mercado. 
            Os principais perfis de clientes da entidade são: startups, ONGs, entidades estudantis e projetos Pro-Bono.
            </p>
          </div>
          <div ref={cards} className="card-group tres-cards info">
            <Link className="card" to="/servicos#" >
              <img
                style={{ padding: "35px" }}
                className="card-img-top"
                src="./svg/contrato.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Elaboração e Revisão</h5>
                <p className="card-text">
                  Revisamos contratos, essenciais para qualquer pessoa jurídica e 
                  elaboramos documentos constitutivos, necessários para o devido reconhecimento legal da pessoa jurídica.
                </p>
              </div>
            </Link>
            <Link className="card" to="/servicos#" >
              <img
                className="card-img-top"
                src="./svg/marteloJuiz.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Consultoria jurídica</h5>
                <p className="card-text">
                  Fazemos em um estudo aprofundado sobre um tema de interesse do cliente. 
                  Fornecemos insumos para tomada de decisões e também capacitações personalizadas. 
                </p>
              </div>
            </Link>
            <Link className="card" to="/servicos#">
              <img
                className="card-img-top"
                src="./svg/dashboard.svg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Adequação à LGPD</h5>
                <p className="card-text">
                  Consiste uma análise do processo de tratamento dos dados. Identificamos as necessidades para se adequar à lei, 
                  e oferecemos o serviço de DPO, com suporte na fiscalização, documentação dos dados
                </p>
              </div>
            </Link>
          </div>
          <br />
          <div className="btn-mais">
          <Link to="/servicos#" className="btn">
            Leia mais sobre nossos serviços
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
