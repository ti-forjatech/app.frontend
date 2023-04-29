import React from 'react';
import Honeycomb from './Honeycomb'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import './style/tresde.css'

export default function Tresde() {
    return (
        <section className="tresde_hero">
            <Canvas>
                <PerspectiveCamera manual aspect={1} onUpdate={(c) => c.updateProjectionMatrix()} fov={90} >
                        <ambientLight castShadow intensity={1}/>
                        <pointLight castShadow position={[10, 10, -10]} intensity={2} />
                        <Honeycomb id={1} position={[0,0,0]} animDuration={500} scale={3.5}/>
                </PerspectiveCamera>
            </Canvas>
        </section>
    )
}
