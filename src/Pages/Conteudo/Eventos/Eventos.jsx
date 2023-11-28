import "./Eventos.css";
import Navbar from "../../Navbar/Navbar";
import Newsletter from "../../../popups/Newsletter/Newsletter";
import Whatsapp from "../../../popups/BotaoWhatsapp/Whatsapp"
import CarouselImages from "./Components/Carousel";

const Eventos = () => {

    const listaDeEventos = [
        {
            nome: "Capacitação do pessoal do CEJUR",
            descricao: "bla bla bla bla bla blabla bla blabla bla blabla " +
                "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla ",
            fotos: [
                'https://th.bing.com/th/id/OIP.msrY1lfbguWufq71iYQrewHaFj?rs=1&pid=ImgDetMain',
                'https://th.bing.com/th/id/OIP.msrY1lfbguWufq71iYQrewHaFj?rs=1&pid=ImgDetMain',
                'https://th.bing.com/th/id/OIP.msrY1lfbguWufq71iYQrewHaFj?rs=1&pid=ImgDetMain',
            ]
        },
        {
            nome: "Capacitação do pessoal do CEJUR",
            descricao: "bla bla bla bla bla blabla bla blabla bla blabla " +
                "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla ",
            fotos: [
                '/Logo_cejur.svg',
                '/Logo_cejur.svg',
                '/Logo_cejur.svg',
            ]
        },
        {
            nome: "Capacitação do pessoal do CEJUR",
            descricao: "bla bla bla bla bla blabla bla blabla bla blabla " +
                "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla ",
            fotos: [
                '/Logo_cejur.svg',
                '/Logo_cejur.svg',
                '/Logo_cejur.svg',
            ]
        }
    ]

    const renderizarEventos = (arrayDeEventos) => {
        return arrayDeEventos.map((evento, id) => (
            <div key={id} className={id % 2 === 0 ? "evento-tipo1" : "evento-tipo2"}>
                <div className="evento-descricao">
                    <div className="evento-bloco">
                        <div className="evento-svg">
                            <CarouselImages id={`carouselExampleIndicators${id}`} fotos={evento.fotos} />
                        </div>
                    </div>
                    <div className="evento-texto">
                        <p>{evento.nome}</p>
                        {evento.descricao}
                        <div className="evento-palavras-chave">
                            Prestação de Serviços - Parceria -
                            Vesting - Licença e Cessão de Uso de Marca -
                            Confidencialidade - Compra e Venda -
                            Termos de Consentimento - Locação - Outros
                        </div>
                    </div>
                </div>
                
            </div>
        ));
    };

    // const renderizarEventos = (arrayDeEventos) => {
    //     const renderizar = arrayDeEventos.map((evento, id) => {
    //         if (id % 2 == 0) {
    //             return (
    //                 <div id="evento-tipo1" key={id}>
    //                     <div className="evento-descricao">
    //                         <div className="evento-bloco">
    //                             <div className="evento-svg">
    //                                 <CarouselImages fotos={evento.fotos}></CarouselImages>
    //                             </div>
    //                         </div>
    //                         <div className="evento-texto">
    //                             <p>{evento.nome}</p>
    //                             {evento.descricao}
    //                             <div className="evento-palavras-chave">
    //                                 Prestação de Serviços - Parceria -
    //                                 Vesting - Licença e Cessão de Uso de Marca -
    //                                 Confidencialidade - Compra e Venda -
    //                                 Termos de Consentimento - Locação - Outros
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         } else {
    //             return (
    //                 <div id="evento-tipo2" key={id}>
    //                     <div className="evento-descricao">
    //                         <div className="evento-texto">
    //                             <p>{evento.nome}</p>
    //                             {evento.descricao}
    //                             <div className="evento-palavras-chave">
    //                                 Contrato Social - Estatuto Social -
    //                                 Código de Conduta - Licença e Cessão de Uso de Marca -
    //                                 Regimento Interno - Termo de Voluntariado -
    //                                 Manual de Abertura de CNPJ - Outros
    //                             </div>
    //                         </div>
    //                         <div className="evento-bloco">
    //                             <div className="evento-svg">
    //                                 <CarouselImages fotos={evento.fotos}></CarouselImages>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         }

    //     })

    //     return renderizar;
    // }





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
                        <a className="btn" href="#evento-tipo1">
                            <i className="fas fa-solid fa-chevron-down fa-2x"></i>
                        </a>
                    </div>
                    <div>
                        {renderizarEventos(listaDeEventos)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Eventos;