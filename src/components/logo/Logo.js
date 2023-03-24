import React from 'react';
import logo_forjatech from './logo_forjatech.svg'
import './logo.css'

export default function Logo() {
    return (
        <div className="logoContainer">
            <img src={logo_forjatech} alt="Logo da forjaTech" />
            <p className="logoText">forja<span className="logoTextBold">Tech</span></p>
        </div>
    );
}