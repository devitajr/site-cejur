/*
    PARA FAZER ESSE SEARCH, EU USEI O CHATGPT (GPT 4) MESMO
    ~Marcim T27, Setembro de 2023
*/

import React from "react";
import "./Cases.css";
import Navbar_Cases from "../../components/Navbar/Navbar_Cases";

import { useState } from "react";
import { motion } from "framer-motion";

const Cases = () => {
    // Mock data array
    const data = [
        {
            id: 1,
            area: "Computação",
            name: "APS PLUS ",
            destaque: "REVOLUCIONADA",
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad ut ipsam quam ratione nam dignissimos ipsum corrupti pariatur molestias voluptatibus illo in eum accusamus explicabo numquam, itaque eius provident!",

        },
        {
            id: 2,
            area: "Consultoria",
            name: "PRO BONO ",
            destaque: "PRO COMUNIDADE",
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad ut ipsam quam ratione nam dignissimos ipsum corrupti pariatur molestias voluptatibus illo in eum accusamus explicabo numquam, itaque eius provident!",

        },
        {
            id: 3,
            area: "Computação",
            name: "EMPRESA X",
            destaque: "COMO NÓS SOMOS RESENHA",
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad ut ipsam quam ratione nam dignissimos ipsum corrupti pariatur molestias voluptatibus illo in eum accusamus explicabo numquam, itaque eius provident!",

        },
        {
            id: 4,
            area: "Dados",
            name: "EMPRESA Z",
            destaque: "KOWALSKY, ANÁLISE",
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad ut ipsam quam ratione nam dignissimos ipsum corrupti pariatur molestias voluptatibus illo in eum accusamus explicabo numquam, itaque eius provident!",
        },
        // ... add more cases as needed
    ];

    // Use state to maintain active buttons as an array
    const [activeButtons, setActiveButtons] = useState([]);
    const [filteredCases, setFilteredCases] = useState(data);

    const handleCases = (areas) => {
        if (areas.length === 0) {
            // If no filters, show all cases
            setFilteredCases(data);
        } else {
            // Filter cases based on areas
            const results = data.filter((caseItem) =>
                areas.includes(caseItem.area)
            );
            setFilteredCases(results);
        }
    };

    const handleButtonClick = (type) => {
        let updatedActiveButtons; // derive the new value directly

        if (activeButtons.includes(type)) {
            // Remove the button from the active list
            updatedActiveButtons = activeButtons.filter(
                (button) => button !== type
            );
        } else {
            // Add the button to the active list
            updatedActiveButtons = [...activeButtons, type];
        }

        setActiveButtons(updatedActiveButtons); // set the state
        handleCases(updatedActiveButtons); // use the new value directly for filtering
    };

    return (
        <>
        <Navbar_Cases></Navbar_Cases>
            <div className="separator"></div>
            <section id="cases">
                <div className="container">
                    <div className="titulo">
                        <h2>
                            NOSSOS RESULTADOS
                            <br />
                            <span>FALAM POR SI</span>
                        </h2>
                        <p className="">
                            A ITAJúnior tem orgulho de contar seus cases de
                            sucesso e o resultado de seu trabalho. Nos
                            inspiramos por fazer a diferença no negócio de
                            nossos clientes, e por isso somos movidos por
                            desafios.
                        </p>
                    </div>
                    <div className="quadro-areas">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleButtonClick("Dados")}
                        >
                            <div className="seletor-diretorias">
                                <card
                                    className={
                                        "dados " +
                                        (activeButtons.includes("Dados")
                                            ? " ativo"
                                            : "")
                                    }
                                >
                                    Dados
                                </card>
                            </div>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleButtonClick("Consultoria")}
                        >
                            <div className="seletor-diretorias">
                                <card
                                    className={
                                        "consult " +
                                        (activeButtons.includes("Consultoria")
                                            ? "ativo"
                                            : "")
                                    }
                                >
                                    Consultoria
                                </card>
                            </div>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleButtonClick("Computação")}
                        >
                            <div className="seletor-diretorias">
                                <card
                                    className={
                                        "comp " +
                                        (activeButtons.includes("Computação")
                                            ? "ativo"
                                            : "")
                                    }
                                >
                                    Computação
                                </card>
                            </div>
                        </motion.button>
                    </div>
                    <div className="cases-list">
                        {/* Render the filtered cases */}
                        {filteredCases.map((caseItem) => (
                            <div className="titulo" key={caseItem.id}>
                                <h2>{caseItem.name}
                                <br />
                                <span>{caseItem.destaque}</span>
                                </h2>
                                <p>
                                    {caseItem.texto}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cases;
