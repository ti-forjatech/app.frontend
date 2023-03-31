import Logo from '../logo/Logo';
import Hero from '../hero/Hero';
import React from 'react';
import './inicio.css'

export default function Inicio(props) {
    const setPage = props.setPage
    return (
        <section className="inicio">
            <Logo />
            <Hero />
        </section>
    );
}