import React from 'react';
import './projetos_.css';

export default function Projetos(props) {
    const setPage = props.setPage;
    const msg1 = "Projetos comerciais estarão aqui!"
    const msg2 = "Iniciativas da forjaTech preencherão esta área."
    const msg3 = "Aqui estarão todas as experiencias em andamento e o que estamos aprendendo."

    return (
        <section className="projetos_">
            <div className="topContainer">
                <button className="backButton" onClick={() =>{setPage('landpage')}}>[voltar]</button>
                <h1 className="sectionTitle">Projetos_</h1>
                <div className="dashedBoard">
                    <p>Aqui, apresentaremos alguns projetos, ideias, experiencias e tudo o que aprendemos ou estamos aprendendo.</p>
                </div>
            </div>
            <div className="botContainer">
                <button className="projectButton" onClick={() =>{alert(msg1)}}>Projetos comerciais</button>
                <button className="projectButton" onClick={()=>{alert(msg2)}}>Projetos pessoais</button>
                <button className="projectButton" onClick={()=>{alert(msg3)}}>Laboratório</button>
            </div>
        </section>
    )
}