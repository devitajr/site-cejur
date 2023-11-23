
import React from "react";
import Navbar from './Pages/Navbar/Navbar'
import Servicos from './Pages/Servicos/Servicos'
import MVV from './Pages/MVV/MVV'
import Carrousel from './components/Inicio/Carrousel'
import Resultados from './Pages/Resultados/Resultados'
import Contato from './Pages/Contato/Contato'
import Newsletter from './popups/Newsletter/Newsletter'
import Whatsapp from './popups/BotaoWhatsapp/Whatsapp'

import { useState, useEffect } from "react";


const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Carrousel></Carrousel>
            <Newsletter></Newsletter>
            <Whatsapp></Whatsapp>
            <Servicos></Servicos>
            <MVV></MVV>
            <Resultados></Resultados>
            <Contato></Contato>
        </>
    );
};

export default Home;
