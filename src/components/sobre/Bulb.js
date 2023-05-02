import React from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d"
import model from './bulb.gltf'

export default function Honeycomb(props) {
    const { nodes, materials } = useGLTF(model);
    return (
        <motion.group dispose={null}>
            <motion.mesh name="Bulb model"
            castShadow
            receiveShadow
            geometry={nodes.Bulbo.geometry}
            material={materials.Materiais}
            rotation={[0, -Math.PI / 2, 2* (Math.PI / 2)]}
            scale={1}
            animate={{rotateX:360, rotateY:360, rotateZ:360, type:"spring", swiftness:1000}}
            transition={{duration:500, ease:"linear", repeat: Infinity}}
            />
        </motion.group>
    )
}

useGLTF.preload("./bulb.gltf");