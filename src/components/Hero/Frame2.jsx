import React from "react";
import LogoCejurHero from "/Logo_cejur_hero.svg";
import "./Frame2.css";

const Frame2 = () => {
   return (
      <div className="frame-2">
         <div className="hero-content">
            <h2>
               Lorem ipsum dolor sit. <br /> Lorem, ipsum dolor.
            </h2>
            <h1>
               Lorem, ipsum. <span>Lorem.</span>
               <br /> Lorem, ipsum dolor.
            </h1>

            <div className="botao-e-texto">
            <button className="btn btn-mais">Entre em Contato!</button>
            <p className="textinho">E se junte a nossos 500 mil clientes!</p>

            </div>
         </div>
         <img src={LogoCejurHero} alt="Logo Cejur" className="logo-cejur" />
      </div>
   );
};

export default Frame2;
