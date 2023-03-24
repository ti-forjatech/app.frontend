import React from 'react';
import vector_forjatech from './vector_forjatech.svg'
import './sobre.css';

export default function Sobre() {
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
            content: `Com o avanço tecnológico que presenciamos nos últimos anos, é importante ressaltar a importância da área de TI para os diversos empreendimentos. \n Trazendo uma visão técnica para o negócio dos nossos clientes, nossa proposta é guiar os setores de comércio e serviços locais por estratégias eficientes de gestão de dados. \n Estas estratégias, permitem -> `,
            footer: '“Desenvolver um sistema ou website, é na sua maior parte técnica. Mas, é também arte em seus momentos.”'
        },
        {
            pageNumber: 5,
            pageTitle: '',
            content: 'Pagina 5',
            footer: 'Footer'
        },
    ]

    const paragraphMaker = (content, index) => {
        return <p className="paragraph" key={index}>{content}</p>;
    }

    const imageMaker = (src) => {
        return <img className="pageImage" src={src} alt="ForjaTech logo." />
    }

    const template = (pageNumber, pageTitle, content, footer, pageImage='') => { 
        let paragraphs = undefined
        if(typeof content == 'object'){
            paragraphs = content.map( (paragraph) => {
                return paragraphMaker(paragraph)
            })

            if(pageNumber === 2){
                pageImage = imageMaker(vector_forjatech)
            }
        } else if(typeof content == 'string'){
            return content
        }

        if(pageNumber === 5){
                
        }
        
        return (
        <div id={pageNumber} className="page" key={pageTitle}>
            <div className="top">
                {pageTitle}
            </div>
            <div className="middle">
                {paragraphs}
                {pageImage}
            </div>
            <div className="bottom">
                <p className="actionSentence">
                    {footer}
                </p>
            </div>
        </div>
        )
    }

    const pages_templates = pages.map((page) => {
        let temp_template = undefined
        if(typeof page.content == 'string' && page.content.length > 50) {
            const paragraphs = page.content.split('\n')
            temp_template = template(page.pageNumber, page.pageTitle, paragraphs, page.footer)
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