import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from "../Navbar/Navbar";
import Newsletter from "../../popups/Newsletter/Newsletter";
import './FAQ.css';


const FAQ = () => {

    const perguntasERespostas = [
        {
            pergunta: "COMO CONSIGO FAZER UM ORÇAMENTO PARA UM SERVIÇO?",
            resposta: "Para solicitar um orçamento para nossos serviços, entre em contato conosco através do botão de acesso do nosso site. Após recebermos sua solicitação, um membro da CEJUR FGV Jr. entrará em contato com você para agendar uma reunião. Durante essa conversa inicial, trabalharemos para entender suas necessidades e identificar o serviço específico que melhor atenderá às suas demandas. Estamos à disposição para auxiliá-lo em todo o processo de orçamento.",
        },
        {
            pergunta: "VOCÊS REALIZAM PROJETOS PARA OUTROS ESTADOS? E PARA REGIÕES FORA DO BRASIL?",
            resposta: "Sim, realizamos projetos para outros estados. Nossos serviços não se limitam a uma região específica; estamos preparados para atender clientes e prestar auxílio jurídico em todo o Brasil.",
        },
        {
            pergunta: "PARA AGENDAR A REUNIÃO É NECESSÁRIO PAGAMENTO? SE EU DESMARCAR UMA REUNIÃO PRECISO PAGAR?",
            resposta: "Não é obrigatório efetuar pagamento em nenhuma dessas situações. Nosso objetivo é acomodar a disponibilidade do cliente. Portanto, caso ocorra algum contratempo, você pode simplesmente re-agendar a reunião com os membros presentes no atendimento.",
        },
        {
            pergunta: "COMO SER PARCEIRO?",
            resposta: "Se tiver interesse em tornar-se nosso parceiro, não hesite em clicar no botão de acesso do nosso site.",
        },
        {
            pergunta: "VOCÊS REALIZAM PROJETOS PRO BONO?",
            resposta: "Sim, realizamos serviços pro bono. Estamos comprometidos com a prestação de serviços jurídicos gratuitos em casos que atendam aos critérios estabelecidos para pro bono. Se você acredita que seu caso se qualifica para esse tipo de serviço, não hesite em nos contatar para discutir como podemos ajudar.",
        },
        {
            pergunta: "OS SERVIÇOS REALIZADOS AOS CLIENTES SÃO PADRÃO OU PERSONALIZADOS CONFORME AS ESPECIFICIDADES DO CLIENTE?",
            resposta: "Nossos serviços são personalizados de acordo com as especificidades e necessidades de cada cliente. nossa abordagem é adaptada para atender a essas particularidades. Portanto, desenvolvemos soluções jurídicas sob medida com base nas circunstâncias individuais de cada cliente. Assim, cada projeto será realizado por uma equipe de membros, que atuará exclusivamente em sua execução até que seja finalizado.",
        },
        
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

