import React from 'react';
import './skills.css';
import { motion } from 'framer-motion';

export default function Skills(){

    const container = {
        hidden:{opacity:0},
        show:{opacity:1,
        transition: {
            staggerChildren:.08,
            type: 'spring'
        }}
    }
    const item = {
        hidden: {opacity:0, transform: 'translateX(-100px)'},
        show: {opacity:1, transform: 'translateX(0px)'}
    }

    return (
        <section className="skills">
            <motion.div className="container" variants={container} initial="hidden" whileInView="show" viewport={{once: true}}>
                <motion.h1 className="sectionTitle" variants={item}>Resumo Técnico</motion.h1>
                <motion.div className="titleUnderline" variants={item}></motion.div>
                <motion.p className="resume" variants={item}>
                As principais habilidades, técnicas e ferramentas, que nos permitem realizar nosso trabalho no dia-a-dia.
                </motion.p>
                <motion.h2 className="subtitle" variants={item}>Geral</motion.h2>
                <motion.ul variants={item}>
                    <li>Gestão de processos</li>
                    <li>Gestão de TI</li>
                    <li>Método de desenvolvimento de software</li>
                </motion.ul>
                <motion.h2 className="subtitle" variants={item}>Programação</motion.h2>
                <motion.ul  variants={item}>
                    <li>Python 3.8 e Javascript ES6+</li>
                    <li>Programação OO e Funcional</li>
                    <li>Paradigmas Imperativo e declarativo</li>
                    <li>Padrões de Arquitetura e Projeto</li>
                </motion.ul>
                <motion.h2 className="subtitle"  variants={item}>Backend</motion.h2>
                <motion.ul  variants={item}>
                    <li>Flask ou Node.Js</li>
                    <li>Banco de dados MySQL</li>
                </motion.ul>
                <motion.h2 className="subtitle" variants={item}>Frontend</motion.h2>
                <motion.ul variants={item}>
                    <li>Html5 + Sass + JsVanilla.</li>
                    <li>React.Js</li>
                </motion.ul>
                <motion.h2 className="subtitle" variants={item}>Nuvem e produção</motion.h2>
                <motion.ul variants={item}>
                    <li>AWS Ec2</li>
                    <li>GIT/Github</li>
                </motion.ul>
                <motion.h2 className="subtitle" variants={item}>Bibliotecas</motion.h2>
                <motion.ul variants={item}>
                    <li>Libs do Python e do Node.</li>
                    <li>Framer-motion, Three.js e React-three-fiber e muito mais...</li>
                </motion.ul>
            </motion.div>
        </section>
    )
}