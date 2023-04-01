import React from 'react';
import './footer.css';
import curriculo from './Thyéz - curriculo.pdf'

export default function Footer(){
    return (
        <section className="footer">
            <div className="container">
                <p className="credit">Site desenvolvido por <a href={curriculo} target="blanc">forjaTech</a></p>
            </div>
            <p className="subfooter">forjatech | 2020 - 2023</p>
        </section>
    )
}