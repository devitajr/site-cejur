import "./Eventos.css";
import Navbar from "../../Navbar/Navbar";
import Newsletter from "../../../popups/Newsletter/Newsletter";
import Whatsapp from "../../../popups/BotaoWhatsapp/Whatsapp"
import CarouselImages from "./Components/Carousel";

const Eventos = () => {

    const listaDeEventos = [
        {
            nome: "Vórtex 24",
            descricao: "Em Sorocaba, o Vórtex (evento estadual do Movimento Empresa Júnior) reuniu grandes empresas do mercado sênior, como Ambev e Stone, para oferecerem treinamentos aos estudantes. Além disso, o Cejur participou da “Batalha de Cases”, em que saiu vencedor, por voto do público, na categoria de Transformação Cultural, após compartilharmos a nossa história como empresa para mais de 600 empresários juniores.",            fotos: [
                'IMG/eventos/vortex24.jpeg',
            ]
        },
        {
            nome: "Evento na sede da Ambev",
            descricao: 'Evento na sede da Ambev em São Paulo com a equipe jurídica da empresa para conversar sobre carreira no mercado e as demandas de uma multinacional e com a equipe da "Ambev ON" para ouvir sobre estratégias que tornam o ambiente de trabalho mais produtivo.',
            fotos: [
                'IMG/eventos/Ambev.jpg',
            ]
        },
        {
            nome: "ENEJ 23",
            descricao: "Todo ano o Cejur participa do ENEJ (Encontro Nacional de Empresas Júniores), maior evento de empreendedorismo jovem do mundo e que reúne mais de cinco mil jovens brasileiros. A edição de 2023 foi sediada no Rio de Janeiro/RJ e em 2024 o evento acontecerá na cidade Florianópolis/SC.",            
            fotos: [
                'IMG/eventos/enej23x.jpg',
            ]
        },
        {
            nome: "Evento no Lacaz Martins, Pereira Neto, Gurevich & Schoueri Advogados",
            descricao: "Visita ao escritório Lacaz Martins, Pereira Neto, Gurevich & Schoueri Advogados e conversa com alguns sócios sobre questões de conteúdo multidisciplinar, como planejamento sucessório e planejamento tributário.",            fotos: [
                'IMG/eventos/EventoLacazMartins.jpg',
                'IMG/eventos/EventoLacazMartins2.jpg',
            ]
        },
        {
            nome: "Estação SP 23",
            descricao: "Em São José dos Campos, o Estação SP (evento regional do Movimento Empresa Júnior) contou com a presença de mais de 800 empresários juniores, ocasião em que o Cejur foi reconhecido em quatro categorias diferentes pelo seu alto desempenho como empresa júnior no ano de 2023.",
            fotos: [
                'IMG/eventos/estacao23.jpeg',
            ]
        },
        {
            nome: "Evento com Helen Wan",
            descricao: "Evento organizado pelo Cejur para debater os desafios da diversidade e a busca pelo sucesso em ambientes corporativos com a presença da palestrante internacional Helen Wan, autora do romance legal “The Partner Track”, de 2013, transformado em série pela Netflix.",
            fotos: [
                'IMG/eventos/helen2.jpg',
            ]
        },
        {
            nome: "Credit Suisse",
            descricao: "Evento sobre carreiras jurídicas no mercado financeiro brasileiro, na sede do Credit Suisse em São Paulo.",
            fotos: [
                'IMG/eventos/credit.jpg',
            ]
        },
        {
            nome: "EDL 24",
            descricao: "Todo mês de janeiro o Cejur marca presença no EDL (Encontro de Lideranças), evento nacional organizado pela Brasil Júnior para as lideranças formais das empresas júniores, que estarão à frente da gestão durante o ano.",            
            fotos: [
                'IMG/eventos/edl24xx.jpg',
            ]
        },
        
    ]

    const renderizarEventos = (arrayDeEventos) => {
        return arrayDeEventos.map((evento, id) => (
            <div key={id} id={"evento"+id} className={id % 2 === 0 ? "evento-tipo1" : "evento-tipo2"}>
                <div className="evento-descricao">
                    <div className="evento-bloco">
                        <div className="evento-svg">
                            <CarouselImages id={`carouselExampleIndicators${id}`} fotos={evento.fotos} />
                        </div>
                    </div>
                    <div className="evento-texto">
                        <p>{evento.nome}</p>
                        {evento.descricao}
                    </div>
                </div>

            </div>
        ));
    };

    return (
        <>
            <section id="eventos">
                <Navbar></Navbar>
                <Newsletter></Newsletter>
                <Whatsapp></Whatsapp>
                <div className="container-custom">
                    <div id="inicio" className="titulo">
                        <div className="parte-esquerda">
                            <h2>
                                NOSSOS
                                <br />
                                <span>EVENTOS</span>
                            </h2>
                            <p>
                                Conheça mais sobre o Cejur FGV, sua capacitação e demais eventos
                            </p>
                        </div>
                        <div className="parte-direita">
                        </div>
                    </div>
                    <div className="seta">
                        <a className="btn" href="#evento0">
                            <i className="fas fa-solid fa-chevron-down fa-2x"></i>
                        </a>
                    </div>
                    {renderizarEventos(listaDeEventos)}
                </div>
            </section>
        </>
    );
};

export default Eventos;