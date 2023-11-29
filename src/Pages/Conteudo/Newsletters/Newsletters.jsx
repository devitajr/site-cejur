import React from "react";
import Navbar from "../../Navbar/Navbar";
import Newsletter from "../../../popups/Newsletter/Newsletter";
import Whatsapp from "../../../popups/BotaoWhatsapp/Whatsapp"

import './Newsletters.css'
const Conteudo = () => {

  const pdfDataArray = [
    {
      title: 'Direito em Pauta: Alterações na LGPD',
      subtitle: 'Uma análise sobre as alterações nas lei de proteção dos dados',
      data: '09/2023',
      pdfUrl: '/pdfs/NewsLetter0923.pdf',
      imageUrl: '/IMG/Newsletters/NewsSetembro.png',
    },
    {
      title: 'Direito em Pauta: Tributário',
      subtitle: 'Uma análise sobre o direito tributário no Brasil e suas implicações',
      data: '10/2023',
      pdfUrl: '/pdfs/NewsLetter1023.pdf',
      imageUrl: '/IMG/Newsletters/NewsOutubro.png',
    },
    {
      title: 'Direito em Pauta: Alterações na LGPD',
      subtitle: 'Uma análise sobre as alterações nas lei de proteção dos dados',
      data: '09/2023',
      pdfUrl: '/pdfs/NewsLetter0923.pdf',
      imageUrl: '/IMG/Newsletters/NewsSetembro.png',
    },
    {
      title: 'Direito em Pauta: Tributário',
      subtitle: 'Uma análise sobre o direito tributário no Brasil e suas implicações',
      data: '10/2023',
      pdfUrl: '/pdfs/NewsLetter1023.pdf',
      imageUrl: '/IMG/Newsletters/NewsOutubro.png',
    },
    // Adicione mais objetos para mais PDFs
  ];


  function getNewsletters(pdfData) {
    const pdfList = [];

    const pdfHTML = pdfData.map((item, id) => {
      const { title, data, subtitle, pdfUrl, imageUrl } = item;
      const downloadUrl = `${pdfUrl}`; // Rota de download 

      const pdfItem = (
        <div key={id} id={"evento" + id} className={id % 2 === 0 ? "news-tipo1" : "news-tipo2"}>
          <div className="news-img">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="news-texto">
            <h2>{title} - {data}</h2>
            <h4>{subtitle}</h4>
            <div className="botaoDownload">
              <a href={downloadUrl} download>
                <i className="fa fa-download fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      );

      return pdfItem
    });

    return pdfHTML;
  }

  const renderizarEventos = (arrayDeEventos) => {
    return arrayDeEventos.map((evento, id) => (
      <div key={id} id={"evento" + id} className={id % 2 === 0 ? "evento-tipo1" : "evento-tipo2"}>
        <div className="evento-descricao">
          <div className="evento-bloco">
            <div className="evento-svg">
              <CarouselImages id={`carouselExampleIndicators${id}`} fotos={evento.fotos} />
            </div>
          </div>
          <div className="evento-texto">
            <p>{evento.nome}</p>
            {evento.descricao}
          </div>
        </div>

      </div>
    ));
  };


  return (
    <div id="newsletters-page">
      <Navbar></Navbar>
      <Newsletter></Newsletter>
      <Whatsapp></Whatsapp>
      <div className="titulo">Newsletters passadas</div>
      <div className="newsletters-box">
        {getNewsletters(pdfDataArray)}
      </div>
    </div>

  )
}


export default Conteudo