import './Equipe.css'

const Equipe = () => {

    // Links para o linkedin devem começar com https://www.linkedin
    const presidente = [
        {
            nome: 'Rodrigo Bezerra',
            foto: 'IMG/Historia/rodrigo.jpeg',
            linkedin: 'https://www.linkedin.com/in/rodrigo-bezerra-959492236',
            periodo: '5° período',
            cargo: 'Presidente',
        },{
            nome: 'Nicholas Guth',
            foto: 'IMG/Historia/nicholas.jpeg',
            linkedin: 'https://www.linkedin.com/in/nicholas-guth-57912b26b/',
            periodo: '3° período',
            cargo: 'Vice-Presidente',
        }
    ]

    const diretores = [
        {
            nome: 'Rubem Suzuki Vieira',
            foto: 'IMG/Historia/rubem.jpeg',
            linkedin: 'https://www.linkedin.com/in/rubem-suzuki-vieira/',
            periodo: '5° período',
            cargo: 'Diretor de Projetos',
        },{
            nome: 'Natalia Valois Sá',
            foto: 'IMG/Historia/natalia.jpeg',
            linkedin: 'https://www.linkedin.com/in/nat%C3%A1liavalois/',
            periodo: '5° período',
            cargo: 'Diretora de Marketing',
        },{
            nome: 'Paula Monrroy',
            foto: 'IMG/Historia/paula.jpeg',
            linkedin: 'https://www.linkedin.com/in/paula-monrroy-8924ba245/',
            periodo: '3° período',
            cargo: 'Diretora de Administrativo-Financeiro',
        },{
            nome: 'Marina Fló',
            foto: 'IMG/Historia/marina.jpeg',
            linkedin: 'https://www.linkedin.com/in/marina-fl%C3%B3-424715237/',
            periodo: '5° período',
            cargo: 'Diretora de Recursos Humanos',
        },{
            nome: 'Maurício Dessimoni',
            foto: 'IMG/Historia/mauricio.jpeg',
            linkedin: 'https://www.linkedin.com/in/maur%C3%ADcio-dessimoni-056065279/',
            periodo: '3° período',
            cargo: 'Diretor de Comercial',
        }
    ]

    const membros = [
        {
            nome: 'Giovanna Layoun',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/giovanna-layoun-578a51214',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Natália Bicudo Porto',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/nat%C3%A1lia-bicudo-porto-85aa33265',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Djalma Nogueira Pinheiro Neto',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/djalma-nogueira-pinheiro-neto-5a90482a0',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Flora Vaisman Pimenta',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/flora-vaisman-pimenta-636853272/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Paula Monrroy',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/paula-monrroy-8924ba245',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Giulia Bortoleto de Iudicibus',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'http://linkedin.com/in/giulia-bortoleto-de-iudicibus-a497a6203',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Sofia Vilutis',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/sofia-vilutis-67771a237',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Maria Eduarda de Souza Alves',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/maria-eduarda-alves-823341272/ ',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Cecília Frederico De Mio ',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/cecília-frederico-de-mio-95a7a0292',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Maria Eduarda Sitta Midea',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/maria-eduarda-midea-bb7748269/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Letícia Hespanhol Lima',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/let%C3%ADcia-hespanhol-lima-395723270',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Gabriel Jeszensky Pitta',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/gabriel-jeszensky-pitta-273b06212',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Nicolas Levi Dutra',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/nicolas-levi-796470204',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Clara Junqueira Moses',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/clara-junqueira-moses-184a3b278',
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

    const renderizarMembros = (membros) => {
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
                        <div className="empresa">{membro.cargo}</div>
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
                <div className="wrap">{renderizarMembros(membros)}</div>
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