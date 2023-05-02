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
            animate={{rotateY:360, rotateX:360, rotateZ:360, type:"spring", swiftness:2000}}
            transition={{duration:1000, ease:"linear", repeat: Infinity}}
            />
        </motion.group>
    )
}

useGLTF.preload("../tresde/honeycomb.gltf");