import './Equipe.css'

const Equipe = () => {

    const presidente = [
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'Presidente',
        },
    ]

    const diretores = [
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'Diretor de eventos',
        },{
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'Diretor de Captação',
        },
    ]
    const membros = [
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            periodo: '4° período',
            cargo: 'membro',
        },
    ]

    const equipeAntiga = [
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        {
            nome: 'José Maria da Silva Ramos',
            periodo: '2017 - 2019',
            linkedin: '"https://www.linkedin.com/in/johndoe/"',
            empresa: 'Petrobrás',
        },
        
        

        

    ]


    const renderizarEquipeAntiga = (membros) => {
        const renderizar = membros.map((membro, id) => {
            return (
                <div key={id} className='membro'>
                    <div className='linkedin'>
                        <div className='nome'>{membro.nome}</div>
                        <a href={membro.linkedin}>
                            <i className='fab fa-linkedin fa-2x'></i>
                        </a>
                    </div>
                    <div className='infos'>
                        <div className="empresa">{membro.empresa}</div>
                        <div className="periodo">{membro.periodo}</div>
                    </div>
                    
                </div>
            )
        })

        return renderizar;
    }

    const renderizarEquipeAtual = (membros) => {
        const renderizar = membros.map((membro, id) => {
            return (
                <div key={id} className='membro'>
                    <div className='foto-membro'>
                        <img src={membro.foto}  alt={membro.nome}></img>
                    </div>
                    <div className='linkedin'>
                        <div className='nome'>{membro.nome}</div>
                        <a href={membro.linkedin}>
                            <i className='fab fa-linkedin fa-2x'></i>
                        </a>
                    </div>
                    <div className='infos'>
                        <div className="empresa">{membro.cargo}</div>
                        <div className="periodo">{membro.periodo}</div>
                    </div>
                    
                </div>
            )
        })

        return renderizar;
    }


    return (
    <div id="equipe">
        <div>
            <div className='tituloEquipe'>Equipe Atual do CEJUR</div>
            <div className='membros-atuais'>
                <div className='cargos'>Presidência</div>
                <div className="wrap">{renderizarEquipeAtual(presidente)}</div>
                <div className='cargos'>Diretoria</div>
                <div className="wrap">{renderizarEquipeAtual(diretores)}</div>
                <div className='cargos'>Membros</div>
                <div className="wrap">{renderizarEquipeAtual(membros)}</div>
            </div>
        </div>
        <div>
            <div className='tituloEquipe'>Ex-membros do CEJUR</div>
            <div className='wrap'>
                {renderizarEquipeAntiga(equipeAntiga)}
            </div>
        </div>
    </div>


    )
}

export default Equipe