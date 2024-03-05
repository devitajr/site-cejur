import React from "react";
import LogoCejurHero from "/Logo_cejur_hero.svg";
import "./Frame1.css";

const Frame1 = () => {
   const infos = {
      numero: 5511943509221,
      mensagem: "Olá! Eu gostaria de conhecer mais sobre os serviços do CEJUR-FGV!"
   }

   return (
      <div className="frame-1">
         <div className="hero-content">
            <h1>
               <span>Empresa Júnior</span> <br/>de soluções jurídicas <br /> da melhor faculdade do Brasil.
            </h1>
            {/* <h1>
               Lorem, ipsum. <span>Lorem.</span>
               <br /> Lorem, ipsum dolor.
            </h1> */}

            <div className="botao-e-texto">
            <a className="btn btn-mais" 
               href={"https://wa.me/" + infos.numero + "?text=" + infos.mensagem}
               target="_blank">
                  Entre em Contato!
            </a>
            <p className="textinho">E se junte aos nossos clientes!</p>

            </div>
         </div>
         <img src={LogoCejurHero} alt="Logo Cejur" className="logo-cejur" />
      </div>
   );
};

export default Frame1;
