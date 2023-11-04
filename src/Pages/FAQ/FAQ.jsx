
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../popups/Newsletter/Newsletter";
import './FAQ.css';


const FAQ = () => {

    const perguntasERespostas = [
        {
            pergunta: "Clique Aqui para Expandir 1",
            resposta: "Este é o conteúdo do Acordeão 1.",
        },
        {
            pergunta: "Clique Aqui para Expandir 3",
            resposta: "Este é o conteúdo do Acordeão 3.",
        },
        {
            pergunta: "Clique Aqui para Expandir 2",
            resposta: "Este é o conteúdo do Acordeão 2.",
        },
        {
            pergunta: "Clique Aqui para Expandir 1",
            resposta: "Este é o conteúdo do Acordeão 1.",
        },
        {
            pergunta: "Clique Aqui para Expandir 3",
            resposta: "Este é o conteúdo do Acordeão 3.",
        },
        {
            pergunta: "Clique Aqui para Expandir 2",
            resposta: "Este é o conteúdo do Acordeão 2.",
        },
        {
            pergunta: "Clique Aqui para Expandir 1",
            resposta: "Este é o conteúdo do Acordeão 1.",
        },
        {
            pergunta: "Clique Aqui para Expandir 3",
            resposta: "Este é o conteúdo do Acordeão 3.",
        },
        {
            pergunta: "Clique Aqui para Expandir 2",
            resposta: "Este é o conteúdo do Acordeão 2.",
        }
    ]
    const renderizarPerguntas = (duvidas) => {
        const renderizar = duvidas.map((duvida, id) => {
            return (
                <Accordion.Item eventKey={id} className="accordion-item">
                    <Accordion.Header className='pergunta'>
                        {duvida.pergunta}
                    </Accordion.Header>
                    <Accordion.Body className='resposta'>
                        {duvida.resposta}
                    </Accordion.Body>
                </Accordion.Item>
            )
        })

        return renderizar;

    }
    return (
        <div id="faq-page">
            <Navbar></Navbar>
            <Newsletter></Newsletter>
            <div className="titulo">Perguntas Frequentes</div>
            <div className='corpo'>
                <Accordion defaultActiveKey="0" className='accordion'>
                    {renderizarPerguntas(perguntasERespostas)}
                </Accordion>
            </div>
        </div>

    );
};

export default FAQ;

