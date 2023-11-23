import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
    const infos = {
        numero: 5511943509221,
        mensagem: "Olá! Eu gostaria de conhecer mais sobre os serviços do CEJUR-FGV!"
    }
    return (
        <div className="botaoWhatsapp">
            <a
                href={"https://wa.me/" + infos.numero + "?text=" + infos.mensagem}
                target="_blank"
            >
                <i className="fab fa-whatsapp fa-2x"></i>
            </a>
        </div>

    )
}
export default Whatsapp
