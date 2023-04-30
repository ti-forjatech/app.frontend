import React from 'react';
import Honeycomb from './Honeycomb'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import './style/tresde.css'

export default function Tresde() {
    return (
        <section className="tresde_hero">
            <Canvas>
                <fog attach="fog" args={["#000000", 5, 12]} />
                <PerspectiveCamera far={1000} near={-100} aspect={1} onUpdate={(c) => c.updateProjectionMatrix()} fov={90} position={[0,0,0-6]}>
                        <ambientLight />
                        <pointLight position={[0, 0, 0]} intensity={30} color={'#FFFF00'} decay={1} shadow={PerspectiveCamera}/>
                        <Honeycomb id={1} position={[0,0,0]} animDuration={1000} scale={6.5}/>
                </PerspectiveCamera>
            </Canvas>
        </section>
    )
}
