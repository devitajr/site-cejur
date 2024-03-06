import React from "react";
import "./Carousel.css";
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
               <div className="carousel-item active">
                  <Frame1></Frame1>
               </div>
            </div>
         </div>
         <div className="seta">
            <a href="#servicos" className="btn">
               <i className="fas fa-solid fa-chevron-down fa-2x"></i>
            </a>
         </div>
      </>
   );
};

export default Carrousel;
