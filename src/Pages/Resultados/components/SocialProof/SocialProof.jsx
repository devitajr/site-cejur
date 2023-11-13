/// Carrossel feito usando o swiper e bootstrap
// https://swiperjs.com/
// ~ Marcim T27 29/09/2023

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import "./SocialProof.css";
import { auto } from "@popperjs/core";

const testimonials = [
   {
      text: "Gosto de contratar Empresas Juniores (EJ's), como o CEJUR, porque a vontade que os alunos têm de aprender me faz perceber que o projeto vai muito além de um mero serviço que visa retorno financeiro. Optei pela contratação de uma EJ - nesse caso, o CEJUR - por ter um custo benefício melhor, ou seja, por ser um serviço de alta qualidade com menor custo. A equipe do CEJUR mostra bastante profissionalismo, de modo que os contratei mais serviços do que era previsto no início do projeto.",
      image: "pessoas/image.jpg",
      name: " Rodrigo Korovichenco",
      profession: "Fundador e CEO da Rubrum",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "Nós contratamos os serviços jurídicos do Cejur-FGV afim de fazer nossa reforma estatutária e elaborar nosso regimento interno. O serviço foi muito bem executado e em poucas reuniões providenciamos tudo. Parabéns pelo empenho dos acadêmicos de Direito da FGV que trabalharam muito bem e atenderam todas as nossas necessidades. Recomendo!" ,
      image: "pessoas/image.jpg",
      name: "Fernanda Miranda",
      profession: "Presidente da Sociedade Goiana de Pneumologia",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "CEJUR has been incredible to me! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio mollitia natus illum maiores consectetur.",
      image: "pessoas/image.jpg",
      name: "John Doe",
      profession: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "This is an amazing product! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio mollitia natus illum maiores consectetur.",
      image: "pessoas/image.jpg",
      name: "John Doe",
      profession: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "Wow, I love CEJUR! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio mollitia natus illum maiores consectetur.",
      image: "pessoas/image.jpg",
      name: "John Doe",
      profession: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "CEJUR has been incredible to me! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio mollitia natus illum maiores consectetur.",
      image: "pessoas/image.jpg",
      name: "John Doe",
      profession: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   // ... add more testimonials
];

const SocialProof = () => {
   return (
      <div id="SocialProof">
         <Swiper
            effect={"coverflow"}
            className="mySwiper"
            modules={[Autoplay, EffectCoverflow]}
            coverflowEffect={{
               rotate: -25,
               stretch: 10,
               depth: 100,
               modifier: 1,
               slideShadows: false,
            }}
            loop={true}
            autoplay={{
               // Configure autoplay
               delay: 2500, // Delay between transitions (in ms). Adjust this value as needed.
               disableOnInteraction: true, // Continue autoplaying when the user interacts with the slide.
            }}
            enabled={true}
            breakpoints={{
               // when window width is >= 1px
               1: {
                  slidesPerView: 1,
               },
               // when window width is >= 700px
               700: {
                 slidesPerView: 2,
               },
               // when window width is >= 1024px
               1150: {
                 slidesPerView: 3,
               },
             }}
            onSwiper={(swiper) => console.log(swiper)}
         >
            {testimonials.map((testimonial, index) => (
               <SwiperSlide key={index}>
                  <div className="card">
                     <div className="card-body">
                        <p className="card-text">{testimonial.text}</p>
                        <div className="d-flex align-items-center stick-down">
                           <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              // Codigo pra usar o placeholder em caso de erro da foto
                              onError={(e) => {
                                 e.target.onerror = null; // Prevents infinite loop in case placeholder is also not found
                                 e.target.src = "/PersonPlaceholder.png";
                              }}
                              style={{
                                 borderRadius: "50%",
                                 width: "50px",
                                 height: "50px",
                                 objectFit: "cover",
                                 marginRight: "10px",
                              }}
                           />
                           <div className="w-full text-sm">
                              <p className="mb-0 card-nome">{testimonial.name}</p>
                              <p className="mb-0 card-profissao">{testimonial.profession}</p>
                           </div>
                        </div>
                        <a
                           href={testimonial.linkedin}
                           className="float-end btn"
                        >
                           <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default SocialProof;
