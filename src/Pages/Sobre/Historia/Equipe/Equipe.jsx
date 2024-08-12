import './Equipe.css'

const Equipe = () => {

    // Links para o linkedin devem começar com https://www.linkedin
    const presidente = [
        {
            nome: 'Rodrigo Bezerra',
            foto: 'IMG/Historia/Rodrigo02.JPG',
            linkedin: 'https://www.linkedin.com/in/rodrigo-bezerra-959492236',
            periodo: '6° período',
            cargo: 'Presidente',
        },{
            nome: 'Nicholas Guth',
            foto: 'IMG/Historia/Nicholas02.JPG',
            linkedin: 'https://www.linkedin.com/in/nicholas-guth-57912b26b/',
            periodo: '4° período',
            cargo: 'Vice-Presidente',
        }
    ]

    const diretores = [
        {
            nome: 'Maria Luisa Carvalho',
            foto: 'IMG/Historia/MariaLuisa.JPG',
            linkedin: 'https://www.linkedin.com/in/maria-luisa-carvalho-842170266/',
            periodo: '4° período',
            cargo: 'Diretora de Projetos',
        },{
            nome: 'Letícia Hespanhol Lima',
            foto: 'IMG/Historia/Leticia.JPG',
            linkedin: 'https://www.linkedin.com/in/let%C3%ADcia-hespanhol-lima-395723270/',
            periodo: '4° período',
            cargo: 'Diretora de Marketing',
        },{
            nome: 'Paula Monrroy',
            foto: 'IMG/Historia/paula.jpeg',
            linkedin: 'https://www.linkedin.com/in/paula-monrroy-8924ba245/',
            periodo: '4° período',
            cargo: 'Diretora de Administrativo-Financeiro',
        },{
            nome: 'Laura Freitas',
            foto: 'IMG/Historia/Laura.JPG',
            linkedin: 'https://www.linkedin.com/in/laura-freitas-45b984272/',
            periodo: '4° período',
            cargo: 'Diretora de Recursos Humanos',
        },{
            nome: 'Maurício Dessimoni',
            foto: 'IMG/Historia/Mauricio02.JPG',
            linkedin: 'https://www.linkedin.com/in/maur%C3%ADcio-dessimoni-056065279/',
            periodo: '4° período',
            cargo: 'Diretor de Comercial',
        }
    ]

    const membros = [
        {
            nome: 'Tiago Henrique Santos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/tiago-henrique-santos-87a375210/',
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
            nome: 'Isadora Maués Marangoni',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/isadora-mau%C3%A9s-marangoni-545933287/',
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
            nome: 'Alexandre Fridman Berezovsky',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/alexandre-fridman-berezovsky-a46150275/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Lucas Jeff dos Santos',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/lucas-jeff-dos-santos-b02961269/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Fernando Heilmann',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/fernando-heilmann-2a912627a/',
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
            nome: 'Francisco Sena Rebouças Pachoal ',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/francisco-sena-rebou%C3%A7as-paschoal-887892279/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'André Marques de Souza Pereira',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/andr%C3%A9-marques-de-carvalho-pereira-a93232260/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Vinicius Conezza',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/vinicius-conezza/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Davi Rosenthal',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/davi-rosenthal-6839a82b0/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Helena Franco Fernandes',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/helena-franco-fernandes-79104a302/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Isabel Leite',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/isabel-leite-506279311/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'João Manoel Lopes',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-manoel-lopes-b81b181b2/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'João Marcos Linonati Sampaio',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-marcos-libonati-sampaio-92886a2b6/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'João Pedro Beber',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-beber-1286972b6/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Julia Lima',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/julia-lima-6b5a91211/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Leandro Nakano',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/leandro-nakano-36939b272/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Manoela Guerra',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/manoela-guerra-91651b266/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Marcela Scatena',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/marcela-scatena-43848a287/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'Maria Clara Arrivabene Bragatto',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/maria-clara-arrivabene-bragatto-570b70314/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Maria Clara Cirulli',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/maria-clara-cirulli-338319227/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Pedro Serzedo',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/pedro-serzedo-b3b3332b6/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Ramires Moraes Cerqueira da Cruz',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/ramires-moraes-cerqueira-da-cruz-984652182/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Renata Smith',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/renata-smith-99b724308/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Valentina Hajjar Hoschmann',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/valentina-roschmann-aa539a302/',
            periodo: '2° período',
            cargo: 'membro',
        },
        {
            nome: 'Julie Branquinho Laeber',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/julie-braquinho-laeber-b08829321/edit/forms/next-action/after-connect-update-profile/',
            periodo: '4° período',
            cargo: 'membro',
        },
        {
            nome: 'André de Castro Mogames',
            foto: 'IMG/Historia/unknown.png',
            linkedin: 'https://www.linkedin.com/in/andr%C3%A9-mogames-506826321/',
            periodo: '4° período',
            cargo: 'membro',
        },
        
        
    ]

    const equipeAntiga = [
        {
            nome: 'Fernanda Gonçalves Oldani',
            periodo: '2020 - 2022',
            linkedin: 'https://www.linkedin.com/in/fernanda-gon%C3%A7alves-oldani-632b401b5/',
            empresa: 'Hospital Albert Einstein',
        },
        {
            nome: 'Agatha Neiva',
            periodo: '2021 - 2023',
            linkedin: 'https://www.linkedin.com/in/agathaneiva',
            empresa: 'PNA',
        },
        {
            nome: 'Luiza Balby',
            periodo: '2021 - 2022',
            linkedin: 'https://www.linkedin.com/in/luiza-balby/',
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
            <div className='tituloEquipe'>Equipe Atual do Cejur FGV</div>
            <div className='membros-atuais'>
                <div className='cargos'>Presidência</div>
                <div className="wrap comFoto">{renderizarEquipeAtual(presidente)}</div>
                <div className='cargos'>Diretoria</div>
                <div className="wrap comFoto">{renderizarEquipeAtual(diretores)}</div>
                <div className='cargos'>Membros</div>
                <div className="wrap">{renderizarMembros(membros)}</div>
            </div>
        </div>
        <div>
            <div className='tituloEquipe'>Ex-membros do Cejur FGV</div>
            <div className='wrap'>
                {renderizarEquipeAntiga(equipeAntiga)}
            </div>
        </div>
    </div>


    )
}

export default Equipe