import React from 'react';
import Navbar from "../../Navbar/Navbar";
import Newsletter from "../../../popups/Newsletter/Newsletter";
import Whatsapp from "../../../popups/BotaoWhatsapp/Whatsapp"
import './Historia.css';
import Equipe from "./Equipe/Equipe"
const Historia = () => {


    return (
        <div id="historia-cejur">
            <Navbar></Navbar>
            <Newsletter></Newsletter>
            <Whatsapp></Whatsapp>
            <div className="titulo">NOSSA HISTÓRIA</div>
            <div className='corpo'>
                <div className="texto">
                    <p>A aluna da Escola de Direito de São Paulo da Fundação Getúlio Vargas, Helena Masullo, criou, no ano de 2012 uma entidade cujo o objetivo primário era a prestação de serviços paralegais pelos alunos da FGV, fornecendo, assim, uma excelente oportunidade de aprendizado e experiência prática do Direito. Ao longo dos anos a entidade  fomentou diversas atividades e promoção de eventos, pautando diversos temas jurídicos. </p>

                    <p> O Centro de Estudos Jurídicos Júnior também chegou a atuar na prestação de serviços pro bono para a comunidade mais vulnerável que habitava próximo à Rua Rocha, local em que se situava o prédio da Escola de Direito De São Paulo (EDESP) . </p>

                    <p> Atualmente somos uma empresa júnior jurídica que trabalha com soluções jurídicas, que são consultorias que visam contribuir para a adequação jurídica do cliente diante do mercado legal. Nossos atuais perfis de clientes são ONGs, startups e outras entidades estudantis bem como Projetos Pro- Bono para determinadas organizações </p>

                    <p> A virada de chave no escopo de atuação do CEJUR se deu no ano de 2021, através do ingresso da entidade no MEJ (Movimento Empresa Júnior), que, ainda nos dias de hoje, nos proporciona uma integração essencial com o mercado sênior e outras empresas juniores, fortalecendo, deste modo, a cultura e o propósito de uma entidade que busca cada vez mais a oferta de experiências e aprendizados aos seus membros bem como o constante contato com núcleos expoentes dentro do mundo jurídico o CEJUR.</p>
                </div>
                <div className="foto-equipe">
                    <img src='IMG/Historia/Reuniao.jpg' alt='reuniao' />
                </div>
            </div>
            <Equipe></Equipe>
        </div>
    );
};

export default Historia;

