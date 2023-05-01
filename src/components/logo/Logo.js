import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from "@react-three/drei";
import './logo.css'
import Honeycomb from './Honeycomb';

export default function Logo() {
    return (
        <div className="logoWrapper">
            <div className="logoContainer">
                <Canvas>
                    <OrthographicCamera makeDefault position={[0,0,10]} zoom={20} far={-1} near={1000}>
                        <ambientLight />
                        <pointLight position={[0,.5,0]} intensity={3} color={'#FFF'} decay={1} shadow={OrthographicCamera}/>
                        <Honeycomb/>
                    </OrthographicCamera>
                </Canvas>
                <p className="logoText">forja<span className="logoTextBold">Tech</span></p>
            </div>
        </div>
    );
}