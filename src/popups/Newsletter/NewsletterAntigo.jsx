
import React from "react";

import "./Newsletter.css";
import "./data/emails.json"
import axios from "axios";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [howKnew, setHowKnew] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = 'SUA_API_KEY';
    const listId = 'SUA_LISTA_ID';

    // Construa a URL da API do Mailchimp
    // substituir <dc> na URL da API do Mailchimp pelo seu data center específico
    const url = `https://<dc>.api.mailchimp.com/3.0/lists/${listId}/members`;

    // Crie o objeto de dados a ser enviado para o Mailchimp
    const data = {
      email_address: email,
      status: 'subscribed'
    };

    try {
      //Faça a chamada Axios para adicionar o e-mail à lista do Mailchimp
      const response = await axios.post(url, data, {
        headers: {
          'Authorization': `apikey ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('E-mail adicionado com sucesso');
      // Lógica de sucesso
      setSuccess(true);
      
      // Limpar os campos do formulário após o sucesso (opcional)
      setName('');
      setEmail('');
      setHowKnew('');

    } catch (error) {
      console.error('Erro ao adicionar e-mail:', error);
      setError(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSuccess(false);
    setError(false);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleHowKnewChange = (event) => {
    const { value } = event.target;
    setHowKnew(value);
  };

  return (
    <div id="newsletter">

      <button type="button" className="botaoNewsletter" data-bs-toggle="modal" data-bs-target="#exampleModal" translate="no" lang="pt">
        Receba as Newsletters!
      </button>

      <div className={`modal fade ${showPopup ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!showPopup}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Receba nossas Newsletters!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closePopup}></button>
            </div>
            <div className="modal-body">
              {success && <div>Sucesso! Seu formulário foi enviado.</div>}
              {error && <div>Ops! Algo deu errado. Por favor, tente novamente.</div>}
              {!success && !error  && (
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFFeu-yUu8958DiQSgA7c_zhJxJuoqCehwexUxudLJtT_jBQ/viewform?embedded=true" width="640" height="717" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
              )
              }
            </div>
            {success && (
              <div className="modal-footer">
              <button type="button" className="botaoEnviar" data-bs-dismiss="modal" aria-label="Close" onClick={closePopup}>Fechar</button>
            </div>
            )}
            {error && (
              <div className="modal-footer">
              <button type="button" className="botaoEnviar" data-bs-dismiss="modal" aria-label="Close" onClick={closePopup}>Fechar</button>
            </div>
            )}
            {!success && !error && (
              <div className="modal-footer">
                <button type="button" className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter
