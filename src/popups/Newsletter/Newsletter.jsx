
import React from "react";

import "./Newsletter.css";
import "./data/emails.json"

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div id="newsletter">

     {/* <div id="newsletter"> */}


      {/* <form className="news-form fade-in" onSubmit={handleSubmit}>
        <button onClick={handleClose} className="close-button">
          X
        </button>{" "}
        <h2 className="subtitulo">Se inscreva no nosso newsletter!</h2>
        <input
          aria-label="Seu nome"
          name="fields[first_name]"
          placeholder="Seu nome"
          type="text"
          onChange={handleNameChange}
          value={name}
        />
        <input
          aria-label="Seu email"
          name="email_address"
          placeholder="Seu email"
          required
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <button className="btn">Enviar</button>
      </form>
    </div> */}


<button type="button" class="botaoNewsletter" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Se inscreva em nossa newsletter!
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Receba nossas Newsletters!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="botaoEnviar">Enviar</button>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
export default Newsletter
