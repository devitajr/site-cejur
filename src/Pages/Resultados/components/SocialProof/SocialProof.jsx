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
      text: "Gostaria de enaltecer o grande trabalho que o Cejur-FGV fez com a Datapto. Nós tinhamos um grande desafio com um modelo de negócio totalmente inovador, sem paridade no mercado brasileiro, que deveria ser traduzido em forma um sistema de contratos. O Cejur-FGV abraçou o desafio e fez entregas espetaculares, muito acima das minhas  expectativas, pois muito além de discutirem aspectos contratuais e jurídicos, eles discutiram negócios " +
      "entendendo no detalhe o modelo da empresa para, aí sim, entregar um sistema de contratos consistente, integrado, sintético e objetivo. Vale ressaltar também que o Cejur-FGV cumpriu todos os prazos de entrega, muito embora a demanda e a complexidade do projeto fosse maior do que a mapeada inicialmente. Com certeza, foi uma das melhores experiências de cliente com fornecedores de serviços jurídicos em minha vida profissional. Parabéns ao Cejur-FGV pelo excelente trabalho",
      image: "pessoas/image.jpg",
      name: " Rodrigo Togneri",
      profession: "Sócio-fundador da Datapto.",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "Minha experiência foi maravilhosa! Mesmo com todo o profissionalismo do CEJUR, me senti extremamente acolhido em todos os momentos, como se estivesse conversando com amigos, que explicavam o passo a passo com muita clareza e respondiam quaisquer dúvidas que eu possuísse. Me sinto no dever de dizer que recomendaria o CEJUR para qualquer pessoa interessada em realizar serviços como os quais me foram prestados aqui!",
      image: "pessoas/image.jpg",
      name: "",
      profession: "Olímpiada Brasileira de Ciências Políticas e Debates",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "Gostei muito de como se preocuparam em nos ajudar a entender termos, situações que não estávamos familiarizados. Espero que possamos trabalhar juntos novamente, no futuro.",
      image: "pessoas/image.jpg",
      name: "",
      profession: "Facic Jr.",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "A equipe me ajudou a ter clareza de como proceder com as melhorias de minha empresa. São pessoas muito dedicadas, com clareza de pensamento, atentas às demandas solicitadas. Muito obrigada!",
      image: "pessoas/image.jpg",
      name: "",
      profession: "Marketway Comunicação",
      linkedin: "https://www.linkedin.com/in/johndoe/",
   },
   {
      text: "A equipe da Empresa Júnior jurídica CJUR fez um trabalho excelente no desenvolvimento do Código de Conduta e na revisão do Regimento Interno do Speech. Eles demonstraram grande comprometimento"+ 
      " em entender nossas necessidades, entregando soluções alinhadas com as demandas que aprimoraram nossos documentos e robustez jurídica. O resultado final entregue reflete não só a competência técnica, mas também o empenho em atender os compromissos firmados. Agradecemos a parceria e nos colocamos à disposição para projetos futuros. ",
      image: "pessoas/image.jpg",
      name: "Beatriz Avrucik Magalhães",
      profession: "Presidente da Speech Liderança & Comunicaçã0",
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
