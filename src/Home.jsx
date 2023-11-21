
import React from "react";
import Navbar from './Pages/Navbar/Navbar'
import Servicos from './Pages/Servicos/Servicos'
import MVV from './Pages/MVV/MVV'
import Carrousel from './components/Hero/Carrousel'
import Resultados from './Pages/Resultados/Resultados'
import Contato from './Pages/Contato/Contato'
import Newsletter from './popups/Newsletter/Newsletter'


import { useState, useEffect } from "react";


const Home = () => {

    // const NEWSLETTER_TIMER = 3000;

    // //Code to show newsletter after 15 seconds of the first interaction with the page
    // const [showNewsletter, setShowNewsletter] = useState(false);
    // const [hasInteracted, setHasInteracted] = useState(false);

    // useEffect(() => {
    //     const handleInteraction = () => {
    //         if (!hasInteracted) {
    //             setHasInteracted(true);
    //             setTimeout(() => {
    //                 setShowNewsletter(true);
    //             }, NEWSLETTER_TIMER);
    //         }
    //     };

    //     window.addEventListener('click', handleInteraction);
    //     window.addEventListener('keydown', handleInteraction);
    //     window.addEventListener('scroll', handleInteraction);

    //     return () => {
    //         window.removeEventListener('click', handleInteraction);
    //         window.removeEventListener('keydown', handleInteraction);
    //         window.removeEventListener('scroll', handleInteraction);
    //     };
    // }, [hasInteracted]);


    return (
        <>
            <Navbar></Navbar>
            <Carrousel></Carrousel>
            <Newsletter></Newsletter>
            <Servicos></Servicos>
            <MVV></MVV>
            <Resultados></Resultados>
            <Contato></Contato>
        </>
    );
};

export default Home;
