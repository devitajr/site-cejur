import React from "react";
import "./Resultados.css";
import CarouselLogos from "./components/CarouselLogos";
import Numeros from "./../../components/Numeros/Numeros"

import { Link } from "react-router-dom";

const Resultados = () => {
    return (
        <section id="resultados">
            <div className="container">
                <div className="titulo">
                    <h2>
                        NOSSOS RESULTADOS
                        <br />
                        <span>FALAM POR SI</span>
                    </h2>
                    <p className="">
                        A ITAJúnior tem orgulho de contar seus cases de sucesso
                        e o resultado de seu trabalho. Nos inspiramos por fazer
                        a diferença no negócio de nossos clientes, e por isso
                        somos movidos por desafios.
                    </p>
                </div>

            <Numeros></Numeros>


                
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
                <Link to="cases" className="btn-mais casesbtn">
                    Cases de Sucesso
                </Link>
            </div>


        </section>
    );
};

export default Resultados;
