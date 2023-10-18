/*
    UTILIZEI O EMAILJS PRA ENVIAR O EMAIL
    UTILIZEI RADIX-UI PRA FAZER O FORMS
    ~ Marcim T27 14/09/2023
*/

const YOUR_SERVICE_ID = "service_nj6dhoa";
const YOUR_TEMPLATE_ID = "template_0rhc8y8";
const YOUR_USER_ID = "lWDmz__YgXZExslPu";

import React from "react";
import * as Form from "@radix-ui/react-form";
import SelectValor from "./components/SelectValor";
import SelectArea from "./components/SelectArea";
import emailjs from "emailjs-com";
import "./Forms.css";

import { useState } from "react";

const Forms = () => {
  // coloca usestate de todos os campos
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [name, setName] = useState("");
  const [howKnew, setHowknew] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    // Inform the user that the email is being processed
    setFormStatus("Enviando email...");

    try {
        const response = await emailjs.send(
            YOUR_SERVICE_ID,
            YOUR_TEMPLATE_ID,
            {
                name: name,
                email: email,
                phone: whatsappNumber,
                valor: valor,
                area: area,
                description: descricao,
            },
            YOUR_USER_ID
        );

        console.log("Email successfully sent!", response);
        setFormStatus("Email enviado com sucesso!");
    } catch (error) {
        console.error("Email sending error:", error);
        setFormStatus("Erro ao enviar email!");
    }
  };


  const handleWhatsappChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Remove all non-numeric characters
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Format area code
    value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Format last 4 digits
    setWhatsappNumber(value);
  };

  const handleSelectChange = (value) => {
    setValor(value);
    console.log("Selected value in parent:", value);
  };

  const handleAreaChange = (selectedValue) => {
    setArea(selectedValue);
    console.log(area);
  };

  return (
    <Form.Root className="FormRoot" onSubmit={sendEmail}>
      <Form.Field className="FormField" name="name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Nome</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Por favor, insira um nome
          </Form.Message>
        </div>
        <Form.Control asChild type="name">
          <input
            className="Input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Por favor, insira seu e-mail
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Por favor, insira um e-mail válido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="Input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="phone">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Whatsapp</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Por favor, insira um número de telefone
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="Input WhatsappInput"
            type="text"
            placeholder="Ex.: (11) 99002-8922"
            required
            value={whatsappNumber}
            onChange={handleWhatsappChange}
            maxLength={15} // Maximum length considering the format (XX) XXXXX-XXXX
          />
        </Form.Control>
      </Form.Field>
      {/* <Form.Field className="FormField" name="Valor">
        <Form.Label className="FormLabel">
          Quanto Você pretende Investir em seu projeto?
        </Form.Label>
        <SelectValor onValueChange={handleSelectChange} />
      </Form.Field> */}
      <Form.Field className="FormField" name="Area">
        <Form.Label className="FormLabel">
          Qual Área de atuação mais te interessou?
        </Form.Label>
        <SelectArea onValueChange={handleAreaChange}></SelectArea>
      </Form.Field>
      <Form.Field className="FormFieldPenultimo" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Como você nos conheceu? </Form.Label>
        </div>
        <Form.Control asChild>
          <textarea
            className="Textarea"
            required
            value={howKnew}
            onChange={(e) => setHowknew(e.target.value)}
          />
        </Form.Control>
        <div className="status FormMessage">{formStatus}</div>
      </Form.Field>
      <Form.Field className="FormField" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Descreva seu projeto</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Por favor, insira uma descrição do projeto
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="Textarea"
            required
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Control>
        <div className="status FormMessage">{formStatus}</div>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button azul" style={{ marginTop: 10 }}>
          Enviar
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default Forms;
