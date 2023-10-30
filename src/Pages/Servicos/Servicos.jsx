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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              doloribus sapiente similique modi laudantium odit libero non
              maxime, optio est dolore culpa temporibus nisi minus aspernatur.
              Tempore sunt ex, saepe eligendi est molestiae, enim optio quidem
              eum eius deserunt tempora blanditiis sint consectetur ipsum
              mollitia quaerat! Consequuntur quo, voluptate nisi laudantium
              dicta ipsa enim error optio incidunt earum veritatis suscipit
              delectus deleniti nemo distinctio eaque, minus cum consectetur,
              corporis sit pariatur harum. Minus modi quas a exercitationem ad
              eveniet cupiditate!
            </p>
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
                <h5 className="card-title">Lorem</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  culpa molestiae eum fugiat.
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
                <h5 className="card-title">Lorem, ipsum.</h5>
                <p className="card-text comp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, dolore eaque.
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
                <h5 className="card-title">Lorem, ipsum.</h5>
                <p className="card-text comp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae.
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </>
  );
};

export default Servicos;
