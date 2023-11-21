import "./Eventos.css";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../../popups/Newsletter/Newsletter";


const Eventos = () => {

    const listaDeEventos = [
        {
            nome: "Capacitação do pessoal do CEJUR",
            descricao: "bla bla bla bla bla blabla bla blabla bla blabla " + 
            "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla ",
            fotos: [
                'https://images.pexels.com/photos/1520483/pexels-photo',
                'https://images.pexels.com/photos/1520483/pexels-photo',
                'https://images.pexels.com/photos/1520483/pexels-photo',
            ]
        },
        {
            nome: "Capacitação do pessoal do CEJUR",
            descricao: "bla bla bla bla bla blabla bla blabla bla blabla " + 
            "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla ",
            fotos: [
                'https://images.pexels.com/photos/1520483/pexels-photo',
                'https://images.pexels.com/photos/1520483/pexels-photo',
                'https://images.pexels.com/photos/1520483/pexels-photo',
            ]
        },
        {
            nome: "Capacitação do pessoal do CEJUR",
            descricao: "bla bla bla bla bla blabla bla blabla bla blabla " + 
            "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla ",
            fotos: [
                'https://images.pexels.com/photos/1520483/pexels-photo',
                'https://images.pexels.com/photos/1520483/pexels-photo',
                'https://images.pexels.com/photos/1520483/pexels-photo',
            ]
        }
    ]

    const renderizarEventos = (arrayDeEventos) => {
        const renderizar = arrayDeEventos.map((evento, id) => {
            if(id % 2 == 0){
                return (
                    <div id="evento-tipo1">
                        <div className="evento-descricao">
                            <div className="evento-bloco">
                                <div className="evento-svg"></div>
                                <div className="evento-nome">
                                    Elaboração e Revisão contratual
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
                )
            } else {
                return (
                    <div id="evento-tipo2">
                        <div className="evento-descricao">
                            <div className="evento-texto">
                                <p>{evento.nome}</p>
                                {evento.descricao}
                                <div className="evento-palavras-chave">
                                    Contrato Social - Estatuto Social -
                                    Código de Conduta - Licença e Cessão de Uso de Marca -
                                    Regimento Interno - Termo de Voluntariado -
                                    Manual de Abertura de CNPJ - Outros
                                </div>
                            </div>
                            <div className="evento-bloco">
                                <div className="evento-svg"></div>
                                <div className="evento-nome">
                                    Documentos
                                    Constitutivos
                                    e Auxiliares
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
        })

        return renderizar;
    }





    return (
        <>
            <section id="eventos">
                <Navbar></Navbar>
                <Newsletter></Newsletter>
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
                        <a className="btn">
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