import React from "react";
import "./Modified_Hero.css";
import LogoCejurHero from "/Logo_cejur_hero.svg";
import Frame1 from "./Frame1";

const Carrousel = () => {
   return (
      <>
         <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
         >
            <div className="carousel-inner">
               <div className="carousel-item active" data-bs-interval="3000">
                  <Frame1></Frame1>
               </div>

               <div className="carousel-item " data-bs-interval="5000">
                  <Frame1></Frame1>
               </div>

               <div className="carousel-item " data-bs-interval="5000">
                  <Frame1></Frame1>
               </div>
            </div>

            <button
               className="carousel-control-prev"
               type="button"
               data-bs-target="#heroCarousel"
               data-bs-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon fas fa-solid fa-chevron-left fa-2x"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button
               className="carousel-control-next"
               type="button"
               data-bs-target="#heroCarousel"
               data-bs-slide="next"
            >
               <span
                  className="carousel-control-next-icon fas fa-solid fa-chevron-right fa-2x"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
         <br />
         <div className="seta">
            <a href="#servicos" className="btn">
               <i className="fas fa-solid fa-chevron-down fa-2x"></i>
            </a>
         </div>
         <br />
      </>
   );
};

export default Carrousel;
