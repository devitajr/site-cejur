import './Equipe.css'

const Equipe = () => {

    // Links para o linkedin devem começar com https://www.linkedin
    const presidente = [
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'Presidente',
        },
    ]

    const diretores = [
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'Diretor de eventos',
        },{
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'Diretor de Captação',
        },
    ]
    const membros = [
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'José Maria da Silva Ramos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/johndoe/',
            periodo: '4° período',
            cargo: 'membro',
        },
        
    ]

    const equipeAntiga = [
        {
            nome: 'Fernanda Gonçalves Oldani',
            periodo: '2020 - 2022',
            linkedin: 'https://www.linkedin.com/in/fernanda-gon%C3%A7alves-oldani-632b401b5/',
            empresa: 'Dupla graduação',
        },
        {
            nome: 'Agatha Neiva',
            periodo: '2021 - 2023',
            linkedin: 'https://www.linkedin.com/in/agathaneiva',
            empresa: 'PNA',
        },
        {
            nome: "Fernando Vieira D'Almeida Budeu",
            periodo: '2017 - 2019',
            linkedin: 'https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav',
            empresa: 'TozziniFreire Advogados',
        },
        {
            nome: 'Bruna Silvestre Prado',
            periodo: '2017 - 2018',
            linkedin: 'http://linkedin.com/in/bruna-silvestre-prado-15206311a',
            empresa: 'Mattos Filho Advogados',
        },
        {
            nome: 'Isabela Carolina Amaral dos Santos',
            periodo: '2020 - 2021',
            linkedin: 'https://www.linkedin.com/in/isabelaamaral',
            empresa: 'Dias de Souza Advogados Associados',
        },
        {
            nome: 'Guilherme Dimovci Maria',
            periodo: '2015 - 2016',
            linkedin: 'https://www.linkedin.com/in/guilherme-dimovci-472530101/',
            empresa: 'Guilherme Dimovci Advogados',
        },
        {
            nome: 'Bernardo Flecha de Lima da Cunha Pereira',
            periodo: '2016 - 2018',
            linkedin: 'https://br.linkedin.com/in/bernardo-flecha-de-lima-da-cunha-pereira-25a90515a',
            empresa: 'Stocche Forbes Advogados',
        },
        {
            nome: 'Gabriel Freitas Alves dos Santos',
            periodo: '2018 - 2019',
            linkedin: 'https://www.linkedin.com/in/gabriel-freitas-a-santos-b00778128/',
            empresa: 'Pinheiro Neto Advogados',
        },
        {
            nome: 'Catarina Ishigami Marques',
            periodo: '2022 - 2023',
            linkedin: 'https://www.linkedin.com/in/catarina-marques-282153234/',
            empresa: 'Graduação',
        },
        {
            nome: 'Luiz Alberto Pereira Americano',
            periodo: '2017 - 2018',
            linkedin: 'https://www.linkedin.com/in/luiz-alberto-americano/',
            empresa: 'Talkdesk',
        },
        {
            nome: 'Fernando Daniel de Ponte de Paula e Silva',
            periodo: '2017 - 2018',
            linkedin: ' https://www.linkedin.com/in/fernando-daniel-de-ponte-de-paula-e-silva-02975916b',
            empresa: 'Stocche Forbes Advogados',
        },
        {
            nome: 'Vitor Nogueira Dextro',
            periodo: '2018 - 2019',
            linkedin: 'https://www.linkedin.com/in/v%C3%ADtor-dextro-9468b8160',
            empresa: 'Trench Rossi Watanabe',
        },
        {
            nome: 'Manuela Moraes Gonzalez',
            periodo: '2021 - 2022',
            linkedin: 'https://www.linkedin.com/in/manuela-gonzalez-838832206',
            empresa: 'XP - equity research ',
        },
        {
            nome: 'Gabriel Zampieri Ferreira Batista',
            periodo: '2015 - 2017',
            linkedin: 'https://www.linkedin.com/in/g-ferreirabatista',
            empresa: 'Mattos Filho (Asset management)',
        },
        {
            nome: 'Fernanda Lopes de Alcantara Gil',
            periodo: '2015 - 2017',
            linkedin: 'https://www.linkedin.com/in/fernanda-lopes-a-gil',
            empresa: 'Mattos Filho (licença para LLM na U. Michigan)',
        },
        {
            nome: 'Lia Tenório Palmeira Villanova',
            periodo: '2017 - 2018',
            linkedin: 'https://www.linkedin.com/in/lia-ten%C3%B3rio-palmeira-561b89167',
            empresa: 'System e Systemic',
        },
        {
            nome: 'Livia Flora ',
            periodo: '2017 - 2019',
            linkedin: 'https://www.linkedin.com/in/l%C3%ADvia-flora-95440214a',
            empresa: 'Quadra Capital ',
        },
        {
            nome: 'Nina Goldman Cavalcanti',
            periodo: '2016 - 2018',
            linkedin: 'https://www.linkedin.com/in/nina-goldman-cavalcanti-011b68228',
            empresa: 'BTG Pactual',
        },
        {
            nome: 'Helena Masullo',
            periodo: '2012 - 2014',
            linkedin: 'https://www.linkedin.com/in/helena-masullo-cfp%C2%AE-79465969/',
            empresa: 'Constellation Asset Management',
        },
        
        

        

    ]


    const renderizarEquipeAntiga = (membros) => {
        const renderizar = membros.map((membro, id) => {
            return (
                <div key={id} className='membro'>
                    <div className='linkedin'>
                        <div className='nome'>{membro.nome}</div>
                        <a href={membro.linkedin} target='_blank'>
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