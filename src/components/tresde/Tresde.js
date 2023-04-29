import React from 'react';
import Honeycomb from './Honeycomb'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import './style/tresde.css'

export default function Tresde() {
    return (
        <section className="tresde_hero">
            <Canvas>
                <PerspectiveCamera far={500} near={0.5} manual aspect={1} onUpdate={(c) => c.updateProjectionMatrix()} fov={90} >
                        <ambientLight />
                        <pointLight position={[0, -.5, -.5]} intensity={3} color={'#FFFF00'} decay={1} shadow={PerspectiveCamera}/>
                        <Honeycomb id={1} position={[0,0,0]} animDuration={50} scale={3.5}/>
                </PerspectiveCamera>
            </Canvas>
        </section>
    )
}
