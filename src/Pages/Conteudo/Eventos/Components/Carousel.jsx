
import React, { useState } from "react";

const CarouselImages = (props) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const exibirFotos = (fotos) => {
      return fotos.map((foto, id) => (
         <div key={id} className={`carousel-item ${id === activeIndex ? "active" : ""}`}>
            <img src={foto} className="d-block w-100" alt={`Slide ${id + 1}`} />
         </div>
      ));
   };

   const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? props.fotos.length - 1 : prevIndex - 1));
   };

   const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === props.fotos.length - 1 ? 0 : prevIndex + 1));
   };

   return (
      <div id={"carouselExampleIndicators"+props.id} className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-indicators">
            {props.fotos.map((_, id) => (
               <button
                  key={id}
                  type="button"
                  data-bs-target={"#carouselExampleIndicators"+props.id}
                  data-bs-slide-to={id}
                  className={id === activeIndex ? "active" : ""}
                  aria-label={`Slide ${id + 1}`}
               ></button>
            ))}
         </div>
         <div className="carousel-inner">{exibirFotos(props.fotos)}</div>
         
      </div>
   );
};

export default CarouselImages;
