import React from "react";

import Forms from "./Forms";

import "./Contato.css";

const Contato = () => {
    return (
        <section id="contato">
            <div className="container">
                <div className="titulo">
                    <h2>
                        SE INTERESSOU?
                        <br />
                        <span>CONVERSE CONOSCO</span>
                    </h2>
                    <p>
                        Através de uma rede de contatos e parcerias, podemos
                        expandir o Movimento Empresa Junior por todo o Brasil!
                    </p>
                </div>
                <div className="content">
                    {/* Eis o componente do forms */}
                    <Forms></Forms>
                    <div className="titulo mensagem-lateral">
                        <h2>
                            A CEJUR ESTÁ
                            <br />
                            <span>PRONTA </span>
                            PARA TE ATENDER!
                        </h2>
                        <h3>
                            ENTENDA NOSSO PROCESSO:
                        </h3>
                        <div className="svg"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contato;
