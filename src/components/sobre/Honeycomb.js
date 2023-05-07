import React from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d"
import model from '../tresde/honeycomb.gltf'

export default function Honeycomb(props) {
    const { nodes, materials } = useGLTF(model);
    return (
        <motion.group dispose={null}>
            <motion.mesh name={`Honeycomb_logo1`}
            castShadow
            receiveShadow
            geometry={nodes.honeycomb.geometry}
            material={materials.pintura_basica}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1}
            animate={{rotateY:360, rotateX:360, rotateZ:360}}
            transition={{duration:2000, repeat: Infinity, ease: 'linear'}}
            />

            <motion.mesh name={`Honeycomb_logo2`}
            castShadow
            receiveShadow
            geometry={nodes.honeycomb.geometry}
            material={materials.pintura_basica}
            rotation={[Math.PI / 2, 0, 0]}
            scale={.6}
            animate={{rotateY:-360, rotateX:-360, rotateZ:-360}}
            transition={{duration:1000, repeat: Infinity, ease: 'linear'}}
            />
            <motion.mesh name={`Honeycomb_logo3`}
            castShadow
            receiveShadow
            geometry={nodes.honeycomb.geometry}
            material={materials.pintura_basica}
            rotation={[Math.PI / 2, 0, 0]}
            scale={.2}
            animate={{rotateY:0, rotateX:0, rotateZ:360}}
            transition={{duration:500, repeat: Infinity, ease: 'linear'}}
            />
        </motion.group>
    )
}

useGLTF.preload("../tresde/honeycomb.gltf");