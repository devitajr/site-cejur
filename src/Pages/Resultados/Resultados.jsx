import React from "react";
import "./Resultados.css";
import CarouselLogos from "./components/CarouselLogos";
import Numeros from "./components/Numeros/Numeros";
import SocialProof from "./components/SocialProof/SocialProof";

import { Link } from "react-router-dom";

const Resultados = () => {
  const infos = {
    numero: 5511943509221,
    mensagem: "Olá! Eu gostaria de conhecer mais sobre os serviços do CEJUR-FGV!"
  }

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
          O CEJUR é uma entidade que se pauta em serviços paralegais e na elaboração de projetos acadêmicos e sociais.
          Trabalha com soluções jurídicas e consultorias que contribuem para a adequação jurídica do cliente diante do mercado.
          Os principais perfis de clientes da entidade são: startups, ONGs, entidades estudantis e projetos Pro-Bono.
        </h3>
        <Link to="/faq" className="btn-mais faqbtn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Acesse nosso FAQ!
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
        <a className="btn-mais"
          href={"https://wa.me/" + infos.numero + "?text=" + infos.mensagem}
          target="_blank"
        >Fale conosco no WhatsApp!</a>
      </div>
    </section>
  );
};

export default Resultados;
