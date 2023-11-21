
import React from "react";

import "./Newsletter.css";
import "./data/emails.json"

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [howKnew, setHowKnew] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Valores captados" + name + "" + email);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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

  

  // const handleClose = () => {
  //   setShow(false);
  // };

  if (!show) return null;

  return (
    <div id="newsletter">

      <button type="button" className="botaoNewsletter" data-bs-toggle="modal" data-bs-target="#exampleModal" translate="no" lang="pt">
        Acesse a newsletter!
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Receba nossas Newsletters!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>Nome</div>
              <input
                aria-label="Seu nome"
                name="fields[first_name]"
                placeholder="Digite seu nome"
                type="text"
                onChange={handleNameChange}
                value={name}
              />
              <div>Email</div>
              <input
                aria-label="Seu email"
                name="email_address"
                placeholder="Digite seu email"
                required
                type="email"
                onChange={handleEmailChange}
                value={email}
              />
              <div>Como nos conheceu?</div>
              <input
                aria-label="Seu email"
                name="how_knew"
                placeholder=""
                required
                type="text-area"
                onChange={handleHowKnewChange}
                value={howKnew}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
export default Newsletter
