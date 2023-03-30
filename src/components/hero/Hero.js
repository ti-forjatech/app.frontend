import React from 'react';
import bg from './hero_bg_forjatech.png'
import './hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <p className="slogan">Desenvolvimento de software personalizado</p>
            <p className="subfrase">Nosso trabalho é desenvolver soluções que podem potencializar o seu negócio.</p>
            
            {/* <p className="subfrase">Gostaria de saber mais?</p>
            <div className="btnOrganizer">
                <button className="btn cta">Confira!</button>
            </div> */}

            <div className="heroContent">
            {/** Importar e Inserir aqui o conteudo do hero */}
                <div className="heroFilter"></div>
                <div className="heroImage">

                </div>
            </div>
        </div>
    );
}