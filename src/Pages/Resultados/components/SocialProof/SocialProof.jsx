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
               disableOnInteraction: false, // Continue autoplaying when the user interacts with the slide.
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
               1024: {
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
                           <div className="w-full">
                              <p className="mb-0">{testimonial.name}</p>
                              <p className="mb-0">{testimonial.profession}</p>
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
