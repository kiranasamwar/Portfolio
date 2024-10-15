import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png';
import Card from "../Card/Card";
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'


const Services = () => {
    const transition = { duration: 1, type: "spring" }
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="services" id="Services">
            {/* Left Side*/}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : '' }}>My Awesome</span>
                <span>Services</span>
                <sapn>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam incidunt et sunt est quos eos recusandae obcaecati,
                    at <br />perferendis natus dignissimos, maxime magni sint non dolorum
                    veritatis esse. Pariatur, amet.
                </sapn>
                <a href={Resume} download >
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>

            </div>
            {/* Right Side*/}
            <div className="cards">
                <motion.div
                    whileInView={{ left: "14rem" }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        details={'I am prepared for committed to absorbing the new knowledge and skills'}
                    />
                </motion.div>
                {/*Second Card*/}
                <div style={{ left: "-4rem", top: "12rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        details={"Html, Javascript, Css, React, Vs Code, Git, Bootstrap "}
                    />
                </div>
                {/*Third Card*/}
                <div style={{ left: "12rem", top: '19rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        details={"Crafting intuitive digital experiences for user satisfaction and engagement."}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}


export default Services