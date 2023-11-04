import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Newsletter from "../../../popups/Newsletter/Newsletter";
import './Newsletters.css'
const Conteudo = () => {

    const pdfDataArray = [
        {
          title: 'PDF 1',
          pdfUrl: '/pdfs/pdf1.pdf',
          imageUrl: '/images/pdf1.jpg',
        },
        {
          title: 'PDF 2',
          pdfUrl: '/pdfs/pdf2.pdf',
          imageUrl: '/images/pdf2.jpg',
        },
        // Adicione mais objetos para mais PDFs
      ];


      function getNewsletters(pdfData) {
        const pdfList = [];
      
        const pdfHTML = pdfData.map((item, index) => {
          const { title, pdfUrl, imageUrl } = item;
          const downloadUrl = `/download-pdf/${pdfUrl}`; // Rota de download (substitua por sua lógica)

          const pdfItem = (
            <div class="pdf-item">
              <img src={imageUrl} alt={title} />
              <h2>${title}</h2>
              <a href={downloadUrl} download>Download</a>
            </div> );

            return pdfItem
        });
      
        return pdfHTML;
      }


    return (
        <div id="newsletters-page">
            <Navbar></Navbar>
            <Newsletter></Newsletter>
            <div className="titulo">Newsletters passadas</div>
            <div className="newsletters-box">
                {getNewsletters(pdfDataArray)}
            </div>
        </div>
        
    )
}


export default Conteudo