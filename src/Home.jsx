import React from "react";
import Navbar from './components/Navbar/Navbar'
import Servicos from './Pages/Servicos/Servicos'
import Carrousel from './components/Hero/Carrousel'
import Resultados from './Pages/Resultados/Resultados'
import Contato from './Pages/Contato/Contato'

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Carrousel></Carrousel>
            <Servicos></Servicos>
            <Resultados></Resultados>
            <Contato></Contato>
        </>
    );
};

export default Home;
