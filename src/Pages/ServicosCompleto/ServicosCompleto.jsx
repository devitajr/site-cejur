import "./ServicosCompleto.css";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../popups/Newsletter/Newsletter";
const ServicosCompleto = () => {

    return (
        <>
            <section id="servicos-completo">
                <Navbar></Navbar>
                <Newsletter></Newsletter>
                <div className="container-custom">
                    <div className="titulo">
                        <div className="parte-esquerda">
                            <h2>
                                NOSSOS
                                <br />
                                <span>SERVIÇOS</span>
                            </h2>
                            <p>
                                Como podemos te ajudar?
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
                    <div id="elaboracao-revisao">
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
                    <div id="documentos-constitutivos">
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
                    <div id="consultoria-pareceres">
                        <div className="servico-descricao">
                            <div className="servico-bloco">
                                <div className="servico-svg"></div>
                                <div className="servico-nome">
                                    Consultoria
                                    e Pareceres
                                    Jurídicos
                                </div>
                            </div>
                            <div className="servico-texto">
                                <p>Consultoria e Pareceres</p>
                                Consiste em um estudo
                                aprofundado a respeito de
                                um tema de interesse do
                                cliente, entregue por meio
                                de um documento escrito
                                no qual os aspectos
                                relevantes são expostos de
                                maneira clara e didática.
                                Dessa forma, oferecemos
                                todos os insumos para a
                                melhor tomada de decisão,
                                seja qual for a demanda, e
                                possivelmente realizando
                                um serviço complementar
                                de assessoria na execução.


                                <div className="servico-palavras-chave">
                                    Registro de Marca - Regime Tributário -
                                    Compliance - Imunidade e Isenção de Tributos -
                                    Clearance - Cobrança por Inadimplemento -
                                    Rescisão Contratual - LGPD - Outros

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="adequacao-lgpd">
                        <div className="servico-texto">
                            <p>Adequação
                                à LGPD</p>
                            Para fazer cumprir a lei,
                            realizamos uma análise do
                            processo de tratamento de
                            dados, através de um
                            relatório e mapa de risco.
                            Uma vez identificadas as
                            necessidades da empresa,
                            elaboramos os documentos
                            para implementação da lei,
                            oferecendo também o
                            serviço de DPO para
                            aconselhamento,
                            compliance, gestão de riscos
                            e atendimento ao titular de
                            dados.

                            <div className="servico-palavras-chave">
                                DPO as a service - Política de Privacidade -
                                Relatório de Atividades - Política de Cookies -
                                Mapa de Riscos - Termos e Condições de Uso -
                                Termo de Consentimento de Uso de Dados - Outros


                            </div>
                        </div>
                        <div className="servico-descricao">
                            <div className="servico-bloco">
                                <div className="servico-svg"></div>
                                <div className="servico-nome">
                                    Adequação
                                    <br></br>
                                    à LGPD
                                    <br></br>
                                    + DPO
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dpo-service">
                        <div className="servico-descricao">
                            <div className="servico-bloco">
                                <div className="servico-svg"></div>
                                <div className="servico-nome">
                                    DPO
                                    <br></br>
                                    as
                                    <br></br>
                                    a service
                                </div>
                            </div>
                            <div className="servico-texto">
                                <p>DPO as a service</p>
                                O DPO de uma empresa
                                serve para estabelecer um
                                canal entre as empresas e
                                os titulares dos dados
                                pessoais com autoridades.
                                Dessa maneira, o "DPO as a
                                service" se apresenta como
                                um serviço de suporte na
                                fiscalização, documentação
                                e comunicação em relação
                                ao tratamento de dados,
                                para que as empresas
                                cumpram os requisitos da
                                LGPD, contando com o
                                apoio de uma equipe
                                especializada no assunto.


                                <div className="servico-palavras-chave">
                                    Comitê de privacidade - Atendimento ao titular -
                                    Contato com a ANPD - Mapeamento de Dados -
                                    ROPA (Registro das Atividades de Tratamento) -
                                    RIPD (Relatório de Impacto de Proteção de Dados) -
                                    Procedimento de respostas a incidentes - Outros
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="capacitacoes">
                        <div className="servico-texto">
                            <p>Capacitações</p>
                            Personalizadas à sua necessidade. Seja para treinamento,
                            um evento ou simplesmente para conscientização, nossas
                            capacitações possuem o nível que somente a melhor
                            faculdade de Direito privada do Brasil pode oferecer.

                            <div className="servico-palavras-chave">
                                Compliance - Direito do Consumidor -
                                Direito Tributário - LGPD -
                                Tipos Contratuais - Multa e Rescisão -
                                Propriedade Intelectual - Outros

                            </div>
                        </div>
                        <div className="servico-descricao">
                            <div className="servico-bloco">
                                <div className="servico-svg"></div>
                                <div className="servico-nome">
                                    Capacitações
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicosCompleto;