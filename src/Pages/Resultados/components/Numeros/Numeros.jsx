import { useEffect, useState } from 'react'
import './Numeros.css'

const Numeros = () => {

    const [startCounter, setStartCounter] = useState(false);
    const [countProjetos, setCountProjetos] = useState(0)
    const [countEmpresas, setCountEmpresas] = useState(0)
    const [countTempo, setCountTempo] = useState(0)
    const targetValues = [85, 50, 10]

    const ANIMATION_SPEED = 20
    

    const handleScroll = () => {
        if (window.scrollY > 1200) { // Defina a posição de rolagem onde você deseja ativar a animação
          setStartCounter(true);
        }
    };

    useEffect(() => {
        // Registra o evento de rolagem
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          // Remove o evento de rolagem ao desmontar o componente
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        if (startCounter) {
            const interval = setInterval(() => {
                if (countProjetos < targetValues[0]) setCountProjetos((prevCount) => prevCount + 1);
                if (countEmpresas < targetValues[1]) setCountEmpresas((prevCount) => prevCount + 1);
                if (countTempo < targetValues[2]) setCountTempo((prevCount) => prevCount + 1);

                // Clear interval if all counts reach their target
                if (countProjetos >= targetValues[0] && countEmpresas >= targetValues[1] && countTempo >= targetValues[2]) {
                    clearInterval(interval);
                }
            }, ANIMATION_SPEED); // A velocidade da animação é ajustada aqui

            return () => clearInterval(interval);
        }
    }, [startCounter, countProjetos, countEmpresas, countTempo]);

    return (
        <div className="card-estatisticas">
            <div className='projetos'>
                <div className="numeros">+{ countProjetos }</div>
                <div className='textao'>Projetos realizados</div>
                <div className='textinho'>
                    Oferecemos soluções jurídicas acessíveis e de excelência
                </div>
            </div>
            <div className='empresas'>
                <div className="numeros">+{ countEmpresas }</div>
                <div className='textao'>Empresas impactadas</div>
                <div className='textinho'>
                Nosso trabalho busca otimizar o que nossos clientes têm de melhor
                </div>
            </div>
            <div className='historia'>
                <div className="numeros">+{ countTempo }</div>
                <div className='textao'>Anos no mercado</div>
                <div className='textinho'>
                Temos orgulho de nossa tradição tanto como empresa júnior quanto como gvnianos, empreendedores natos
                </div>
            </div>
        </div>
    )
    
}

export default Numeros
