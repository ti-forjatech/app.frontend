import React from 'react';
import './skills.css';

export default function Skills(){
    return (
        <section className="skills">
            <div className="container">
                <h1 className="sectionTitle">Resumo Técnico</h1>
                <div className="titleUnderline"></div>
                <p className="resume">
                As principais habilidades, técnicas e ferramentas, que nos permitem realizar nosso trabalho no dia-a-dia.
                </p>
                <h2 className="subtitle">Geral</h2>
                <ul>
                    <li>Gestão de processos</li>
                    <li>Gestão de TI</li>
                    <li>Método de desenvolvimento de software</li>
                </ul>
                <h2 className="subtitle">Programação</h2>
                <ul>
                    <li>Python 3.8 e Javascript ES6+</li>
                    <li>Programação OO e Funcional</li>
                    <li>Paradigmas Imperativo e declarativo</li>
                    <li>Padrões de Arquitetura e Projeto</li>
                </ul>
                <h2 className="subtitle">Backend</h2>
                <ul>
                    <li>Flask ou Node.Js</li>
                    <li>Banco de dados MySQL</li>
                </ul>
                <h2 className="subtitle">Frontend</h2>
                <ul>
                    <li>Html5 + Sass + JsVanilla.</li>
                    <li>React.Js</li>
                </ul>
                <h2 className="subtitle">Nuvem e produção</h2>
                <ul>
                    <li>AWS Ec2</li>
                    <li>GIT/Github</li>
                </ul>
                <h2 className="subtitle">Bibliotecas</h2>
                <ul>
                    <li>Libs do Python e do Node.</li>
                    <li>Framer-motion, Three.js e React-three-fiber.</li>
                </ul>
            </div>
        </section>
    )
}