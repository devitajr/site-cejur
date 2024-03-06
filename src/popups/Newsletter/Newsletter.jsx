
import React from "react";
import "./Newsletter.css";


const Newsletter = () => {
  
  const urlForms = "https://forms.gle/TQtn4RZybk1rahzh8"
  return (
    <div id="newsletter">

      <button type="button" className="botaoNewsletter" data-bs-toggle="modal" data-bs-target="#exampleModal" translate="no" lang="pt">
        <a href={urlForms} target="_blank">
            Acesse nossas Newsletters!
        </a>
      </button>
      
    </div>
  );
}
export default Newsletter
