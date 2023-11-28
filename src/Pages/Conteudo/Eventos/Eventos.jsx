import "./Eventos.css";
import Navbar from "../../Navbar/Navbar";
import Newsletter from "../../../popups/Newsletter/Newsletter";
import Whatsapp from "../../../popups/BotaoWhatsapp/Whatsapp"
import CarouselImages from "./Components/Carousel";

const Eventos = () => {

    const listaDeEventos = [
        {
            nome: "Reunião Geral do Cejur-FGV",
            descricao: "Nossas RGs são realizadas mensalmente e nelas retomamos os nossos projetos em andamento, tanto internos como externos. Ainda, os diretores apresentam um panorama geral dos principais acontecimentos da empresa, relembrando as nossas metas do semestre.",
            fotos: [
                'IMG/eventos/RG.jpg',
            ]
        },
        {
            nome: "Evento no Lacaz Martins, Pereira Neto, Gurevich & Schoueri Advogados",
            descricao: "bla bla bla bla bla blabla bla blabla bla blabla " +
                "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla ",
            fotos: [
                'IMG/eventos/EventoLacazMartins.jpg',
                'IMG/eventos/EventoLacazMartins2.jpg',
            ]
        },
        
        {
            nome: "Membros do Cejur-FGV no Vórtex em abril de 2023",
            descricao: " A empresa está sempre presente nos eventos do Movimento Empresa Júnior, fazendo benchmarks, construindo laços para Ações Colaborativas e prospectando novos projetos com outras EJs",
            fotos: [
                'IMG/eventos/Vortex.jpg',
            ]
        },
        {
            nome: "Evento na sede da Ambev",
            descricao: 'Evento na sede da Ambev organizado por um dos nossos conselheiros, Alessandro Marques, advogado na área cível da multinacional. Sempre com o propósito de ampliar a experiencia do seus membros,' +
                ' o Cejur-FGV proporcionou a sua equipe e aos primeiros inscritos no Processo Seletivo a oportunidade de vivenciar o funcionamento da área jurídica de uma das maiores empresas da América Latina. ' +
                'No encontro, conversamos com a equipe da "Ambev ON", que explicou as suas estratégias para tornar o ambiente de trabalho mais produtivo e diverso. Nossos membros trocaram também com advogados da Ambev que ' +
                'explicaram melhor as demandas jurídicas de uma grande multinacional, permitindo aos nossos membros de trocarem com profissionais do mercado sênior sobre carreira, além de desenvolver o networking para futuros projetos e parcerias.',
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
                                Conheça mais sobre o CEJUR-FGV, sua capacitação e demais eventos
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