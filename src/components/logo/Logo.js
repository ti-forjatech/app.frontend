import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from "@react-three/drei";
import './logo.css'
import Honeycomb from './Honeycomb';
import { motion } from 'framer-motion-3d';

export default function Logo() {
    return (
        <div className="logoWrapper">
            <motion.div className="logoContainer"
            initial={{opacity:0, transform:'translateX(-200px)'}}
            animate={{opacity:1, transform:'translateX(0px)'}}
            transition={{delay:1.5, type: 'spring', duration: 1, bounce:true, stiffness:128}}
            >
                <Canvas>
                    <OrthographicCamera makeDefault position={[0,0,10]} zoom={20} far={-1} near={1000}>
                        <ambientLight />
                        <pointLight position={[0,.5,0]} intensity={3} color={'#FFF'} decay={1} shadow={OrthographicCamera}/>
                        <Honeycomb/>
                    </OrthographicCamera>
                </Canvas>

                <motion.p className="logoText"
                initial={{transform:'translateY(-50px)'}}
                animate={{transform:'translateY(0px)'}}
                transition={{delay:2, type:'spring', duration:1, bounce:true, stiffness:128}}>
                    forja<span className="logoTextBold">Tech</span>
                </motion.p>
                
            </motion.div>
        </div>
    );
}