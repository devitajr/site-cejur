/*
    PARA FAZER ESSE CARROSSEL, EU USEI A BIBLIOTECA SWIPER
    Apenas lendo a documentação consegui criar esse componente.
     Creio que você consegue também :)
    https://swiperjs.com/
    ~Marcim T27, Setembro de 2023
*/

import React from "react";
import "./CarouselLogos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import de logos
import logoCittaMobi from "./logos/cittamobi.png";
import logoDatApto from "./logos/datApto.png";
import logoEJMackenzie from "./logos/EJ_Mackenzie.png";
import logoFinDocs from "./logos/FinDocs.png";
import logoLigaNegociosModa from "./logos/Liga_negocios_moda.png";
import logoRubrum from "./logos/logo_rubrum-1.png";

function CarouselLogos() {
    const logos = [
        logoCittaMobi,
        logoDatApto,
        logoEJMackenzie,
        logoFinDocs,
        logoLigaNegociosModa,
        logoRubrum,
        logoCittaMobi,
        logoDatApto,
        logoEJMackenzie,
        logoFinDocs,
        logoLigaNegociosModa,
        logoRubrum,
    ];

    return (
        <Swiper
            className="mySwiper"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
                // Configure autoplay
                delay: 2500, // Delay between transitions (in ms). Adjust this value as needed.
                disableOnInteraction: false, // Continue autoplaying when the user interacts with the slide.
            }}
            enabled={true}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index} className="slide">
                    <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="imagem"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CarouselLogos;
