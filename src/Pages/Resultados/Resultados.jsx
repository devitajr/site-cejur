import React from "react";
import "./Resultados.css";
import CarouselLogos from "./components/CarouselLogos";
import Numeros from "./components/Numeros/Numeros";
import SocialProof from "./components/SocialProof/SocialProof";

import { Link } from "react-router-dom";

const Resultados = () => {
  return (
    <section id="resultados">
      <br />

      <div className="container">
        <div className="titulo">
          <h2>
            NOSSOS RESULTADOS
            <br />
            <span>FALAM POR SI</span>
          </h2>
          <div className="subtitulo-e-numeros">
            <h3 className="subtitulo-metade">
            Com mais de 10 anos de experiência, o CEJUR-FGV já acumulou um impressionante histórico de resultados. 
            Ao longo desse período, realizamos mais de 85 projetos, proporcionando soluções jurídicas acessíveis e de excelência.
            Nossa dedicação incansável impactou positivamente mais de 50 empresas, otimizando o que nossos clientes têm de melhor. 
            Essa jornada de sucesso reflete nosso compromisso contínuo com a excelência, a inovação e o espírito empreendedor, 
            tanto como empresa júnior quanto como membros da comunidade FGV.

            </h3>
            <Numeros></Numeros>
          </div>
        </div>

        <div className="mosaico"></div>

        <div className="espacado-3rem">
          <SocialProof></SocialProof>
        </div>

        <h3 className="texto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sunt
          ab laborum porro deserunt, consequuntur delectus facere optio! Illo
          aliquid perspiciatis, autem debitis natus optio ea asperiores
          doloremque magni maiores!
        </h3>
        <Link to="/cases" className="btn-mais casesbtn">
          Cases de Sucesso
        </Link>

        <div className="subtitulo">
          <h2>
            <span>Seja como nossos clientes:</span>
          </h2>
        </div>

        <div className="clientes">
          <br />
          <CarouselLogos></CarouselLogos>
        </div>
        <br />
        <a href="#contato" className="btn-mais casesbtn">
          Entre em contato!
        </a>
      </div>
    </section>
  );
};

export default Resultados;
