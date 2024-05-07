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
            nome: "Eventos Nacionais do Movimento Empresa Júnior: EDL 24  e ENEJ 23",
            descricao: "O Cejur participa anualmente dos dois congressos nacionais do Movimento Empresa Júnior, participando ativamente de uma rede de mais de 16 mil jovens. (Foto 1 - Encontro de Lideranças - Itú/SP) (Foto 2 - Encontro Nacional de Empresas Júniores - Rio de Janeiro/RJ)",            fotos: [
                'IMG/eventos/edl24xx.jpg',
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
            nome: "Evento no Lacaz Martins, Pereira Neto, Gurevich & Schoueri Advogados",
            descricao: "Visita ao escritório Lacaz Martins, Pereira Neto, Gurevich & Schoueri Advogados e conversa com alguns sócios sobre questões de conteúdo multidisciplinar, como planejamento sucessório e planejamento tributário.",            fotos: [
                'IMG/eventos/EventoLacazMartins.jpg',
                'IMG/eventos/EventoLacazMartins2.jpg',
            ]
        },
        
        {
            nome: "Evento na sede da Ambev",
            descricao: 'Evento na sede da Ambev em São Paulo com a equipe jurídica da empresa para conversar sobre carreira no mercado e as demandas de uma multinacional e com a equipe da "Ambev ON" para ouvir sobre estratégias que tornam o ambiente de trabalho mais produtivo.',
            fotos: [
                'IMG/eventos/Ambev.jpg',
            ]
        }
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