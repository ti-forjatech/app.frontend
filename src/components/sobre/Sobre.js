import React from 'react';
import vector_forjatech from './vector_forjatech.svg'
import setaDir from './seta_dir.svg'
import './sobre.css';

export default function Sobre(props) {
    const setPage = props.setPage
    const pages = [
        {
            pageNumber: 1,
            pageTitle: 'Sobre',
            content: `Somos a forjaTech. Empresa de TI, focada no desenvolvimento de aplicações web e websites personalizados. \n Nós oferecemos soluções digitais para profissionais autônomos, MEI, micro e pequenas empresas. \n Nosso objetivo é, apresentar ferramentas que agilizam os processos de negócio de nossos clientes e com isso, possibilitam uma tomada de decisão mais assertiva.`,
            footer: '"Suas ideias são a nossa matéria prima mais valiosa."'
        },
        {
            pageNumber: 2,
            pageTitle: '',
            content: `No ano de 2020, demos início as nossas atividades. Quando a busca por digitalização cresceu exponencialmente devido a pandemia. \n Esta demanda continuará crescendo e o mercado precisa de mão de obra técnica qualificada para o serviço.`,
            footer: '"Estamos aqui para ajudar nossos clientes a ganhar competitividade no digital."'
        },
        {
            pageNumber: 3,
            pageTitle: '',
            content: `Atuamos no município de Saquarema, atendendo portanto às empresas locais que precisam de consultoria de sistemas de informação web baseados em nuvem e websites. \n Nossas atividades focam nas necessidades dos clientes. \n Estes, revelam quais são as dores dos seus negócios e juntos, faremos análises, projetos, construção e testes, de soluções que pode agregar um alto valor aos seus empreendimentos.`,
            footer: '"Se você vencer, saberemos que estamos no caminho certo!"'
        },
        {
            pageNumber: 4,
            pageTitle: '',
            content: `Com o avanço tecnológico que presenciamos nos últimos anos, é importante ressaltar a importância da área de TI para os diversos empreendimentos. \n Trazendo uma visão técnica para o negócio dos nossos clientes, nossa proposta é guiar os setores de comércio e serviços locais por estratégias eficientes de gestão de dados. \n Estas estratégias, permitem 👉🏽`,
            footer: '“Desenvolver um sistema ou website, é na sua maior parte técnica. Mas, é também arte em seus momentos.”'
        },
        {
            pageNumber: 5,
            pageTitle: '',
            content: 'Atender melhor seus clientes. \n Aumentar o alcance da empresa. \n Atrair clientela nova. \n Diminuir o custo de operações. \n Coletar e organizar dados do negócio. \n Visualizar processos.',
            footer: 'projetos_'
        },
    ]

    const paragraphMaker = (content, index) => {
        return <p className="paragraph" key={index}>{content}</p>;
    }

    const imageMaker = (src, className, alt) => {
        return <img className={className} src={src} alt={alt} />
    }

    const blockItemMaker = (content, index) => {
        return (
            <li className="blockItem" key={index}>
                <div className="blockItemContainer">
                    <p className="blockItemText">
                        {content}
                    </p>
                </div>
            </li>
        )
    }

    const blockMaker = (content) => {
        const items = content.map((item, index) => {
            return blockItemMaker(item, index)
        })
        return <ul className="blackBlock">{items}</ul>
    }

    const footerMaker = (footerText, pageNumber) => {
        if(footerText !== '' && footerText !== 'projetos_'){
            let sentenceText = 'sentenceText'

            if(pageNumber >= 3){
                sentenceText = 'sentenceText_dark_bg'
            }

            return (
            <p className="actionSentence" key={pageNumber}>
                <span className={sentenceText}>
                    {footerText}
                </span>
            </p>
            )
        } else if(footerText === 'projetos_'){
            return (
            <p className="actionSentence_no_bg" key={pageNumber}>
                <button className="projectsButton" onClick={() =>{setPage('projetos')}}>
                    <img className="logoButton" src={vector_forjatech} alt="Logo" />
                </button>
            </p>
            )
        }
    }

    const template = (pageNumber, pageTitle, paragraphs, footer, page_index, pageImage='', setaDir_temp={setaDir}) => {
        let paragraphs_temp = undefined
        let block = undefined
        let footer_temp = undefined
        if(typeof paragraphs == 'object'){
            if(pageNumber < 5){
                paragraphs_temp = paragraphs.map( (paragraph, index) => {
                    return paragraphMaker(paragraph, index)
                })
            }

            if(pageNumber === 2){
                pageImage = imageMaker(vector_forjatech, "pageImage", "ForjaTech logo.")
            }

            if(pageNumber === 5){
                block = blockMaker(paragraphs)
            }

            if(footer !== ''){
                footer_temp = footerMaker(footer, pageNumber)
            }

            setaDir_temp = imageMaker(setaDir, "setaDir", "Seta para a direita. Indicativo de para deslizar a pagina.")

        } else if(typeof paragraphs == 'string'){
            if(paragraphs === 'valores'){
                block = blockMaker(paragraphs)
            }

            paragraphs_temp = paragraphs
        }
        
        return (
        <div id={pageNumber} className="page" key={page_index}>
            <div className="top">
                {pageTitle}
                <svg className="seta_dir" width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.09586 17.2572L10.2995 10.7602C10.5216 10.5282 10.6977 10.2525 10.8179 9.94906C10.9381 9.6456 11 9.3203 11 8.99177C11 8.66324 10.9381 8.33793 10.8179 8.03448C10.6977 7.73102 10.5216 7.45537 10.2995 7.2233L4.09586 0.726378C2.58686 -0.82887 0 0.274855 0 2.50739V15.4761C0 17.7338 2.58686 18.8375 4.09586 17.2572Z" />
                </svg>
            </div>
            <div className="middle">
                <div className='paragraphs'>
                    {paragraphs_temp}
                </div>
                {pageImage}
                {block}
            </div>
            <div className="bottom">
                {footer_temp}
            </div>
        </div>
        )
    }

    const pages_templates = pages.map((page, index) => {
        let temp_template = undefined
        if(typeof page.content == 'string'){
            const paragraphs = page.content.split('\n')
            if(page.content.length > 50) {
                temp_template = template(page.pageNumber, page.pageTitle, paragraphs, page.footer, index)
            } else {
                temp_template = template(page.pageNumber, page.pageTitle, paragraphs, page.footer, index)
            }
        }
        return temp_template
    })


    return (
        <section className="sobre">
            <div className="topBar"></div>
            <div className="topBgBar">
                <div className="square"></div>
            </div>
            <div className="bottomBgBar"></div>
            <div className="container">{pages_templates}</div>
        </section>
    );
}