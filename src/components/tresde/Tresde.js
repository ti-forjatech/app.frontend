import React, { useState } from 'react';
import Honeycomb from './Honeycomb';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import './style/tresde.css';

export default function Tresde() {
    const [planeScale, setPlaneScale] = useState(6)
    const [greetingsScale, setGreetingsScale] = useState(0)

    window.addEventListener('scroll', (e) => {
        if(planeScale >= 0){
            setPlaneScale(e.srcElement.scrollingElement.scrollTop * -.02 + 6)
        } else {
            setPlaneScale(0)
        }

        if(greetingsScale < 6){
            setGreetingsScale(e.srcElement.scrollingElement.scrollTop * 0.1)
        }
        
        if(greetingsScale > 6){
            setGreetingsScale(6)
        }
    })

    return (
        <section className="tresde_hero">
            <Canvas>
                <fog attach="fog" args={["#000000", 10, 12]} />
                <PerspectiveCamera far={1000} near={-100} aspect={1} onUpdate={(c) => c.updateProjectionMatrix()} fov={90} position={[0,0,0-6]}>
                        <ambientLight color={'#FFFF00'} intensity={1}/>
                        <pointLight position={[0, 0, -.5]} intensity={.5} color={'#FFFF00'} decay={.5} shadow={PerspectiveCamera}/>
                        <Honeycomb greetingsScale={greetingsScale} planeScale={planeScale} id={1} position={[0,0,0]} animDuration={1000} scale={6.6}/>
                </PerspectiveCamera>
            </Canvas>
        </section>
    )
}
