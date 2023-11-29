import React from 'react';
import Navbar from "../../Navbar/Navbar";
import Newsletter from "../../../popups/Newsletter/Newsletter";
import Whatsapp from "../../../popups/BotaoWhatsapp/Whatsapp"
import './Historia.css';

const Historia = () => {


    return (
        <div id="faq-page">
            <Navbar></Navbar>
            <Newsletter></Newsletter>
            <Whatsapp></Whatsapp>
            <div className="titulo">NOSSA HISTÓRIA</div>
            <div className='corpo'>
                
            </div>
        </div>

    );
};

export default Historia;

