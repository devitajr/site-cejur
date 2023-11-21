import "./Eventos.css";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../../popups/Newsletter/Newsletter";


const Eventos = () => {

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
                    <div id="evento-tipo1">
                        <div className="servico-descricao">
                            <div className="servico-bloco">
                                <div className="servico-svg"></div>
                                <div className="servico-nome">
                                    Elaboração e Revisão contratual
                                </div>
                            </div>
                            <div className="servico-texto">
                                <p>Elaboração e Revisão</p>
                                Essencial para qualquer
                                tipo de pessoa jurídica. Isso
                                se dá pela importância do
                                estabelecimento de um
                                vínculo formal, seja no
                                formato de uma parceria,
                                uma prestação de serviços
                                ou qualquer outra relação
                                que gere direitos e deveres
                                das partes. Dessa forma, a
                                função do contrato é a
                                determinação dos termos
                                dessas relações e a
                                garantia do cumprimento
                                das obrigações acordadas.

                                <div className="servico-palavras-chave">
                                    Prestação de Serviços - Parceria -
                                    Vesting - Licença e Cessão de Uso de Marca -
                                    Confidencialidade - Compra e Venda -
                                    Termos de Consentimento - Locação - Outros
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="evento-tipo2">
                        <div className="servico-descricao">
                            <div className="servico-texto">
                                <p>Documentos Constitutivos</p>
                                Necessários para garantir
                                às organizações o devido
                                reconhecimento legal.
                                Sendo assim, eles contêm
                                todas as informações
                                básicas para a existência
                                formal das instituições e
                                disciplinam como se dará o
                                seu funcionamento interno,
                                seja a participação
                                atribuída a cada
                                sócio/membro, a forma de
                                admissão de outros, e as
                                responsabilidades dos
                                cargos de gerência.


                                <div className="servico-palavras-chave">
                                    Contrato Social - Estatuto Social -
                                    Código de Conduta - Licença e Cessão de Uso de Marca -
                                    Regimento Interno - Termo de Voluntariado -
                                    Manual de Abertura de CNPJ - Outros
                                </div>
                            </div>
                            <div className="servico-bloco">
                                <div className="servico-svg"></div>
                                <div className="servico-nome">
                                    Documentos
                                    Constitutivos
                                    e Auxiliares
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Eventos;