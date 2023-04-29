import React from 'react';
import Tresde from '../tresde/Tresde';
import './hero.css'

export default function Hero() {
    return (
        <div className="hero">
            {/* <p className="slogan"></p>
            <p className="subfrase">Nosso trabalho é desenvolver soluções que podem potencializar o seu negócio.</p> */}

            <div className="heroContent">
                {/* <div className="heroFilter"></div> */}
                <Tresde/>
            </div>
        </div>
    );
}