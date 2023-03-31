import React from 'react';
import './projetos_.css';

export default function Projetos(props) {
    const setPage = props.setPage;
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
                <button className="projectButton">Projetos comerciais</button>
                <button className="projectButton">Projetos pessoais</button>
                <button className="projectButton">Laboratório</button>
            </div>
        </section>
    )
}