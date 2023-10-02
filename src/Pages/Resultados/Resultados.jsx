import React from "react";
import "./Resultados.css";
import CarouselLogos from "./components/CarouselLogos";
import Numeros from "./../../components/Numeros/Numeros";
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium accusantium ex explicabo qui nostrum! Fugit nulla
              expedita perferendis minima consequuntur dignissimos labore
              distinctio libero quisquam modi in perspiciatis quos eveniet
              sapiente quia excepturi ducimus eius dolore sit corporis, quod
              neque ea. Iure, neque sequi nemo, dignissimos tempora suscipit
              illum pariatur a in eveniet, officiis voluptate quos fugiat porro
              itaque sapiente inventore architecto et eum aspernatur deserunt
              soluta necessitatibus quasi!
            </h3>
            <Numeros></Numeros>
          </div>
        </div>

        <div className="espacado-3rem">
          <SocialProof></SocialProof>
        </div>

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
