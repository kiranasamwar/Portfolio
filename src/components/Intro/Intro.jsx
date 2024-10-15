import React from "react";
import './Intro.css'

import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glasessimoji from '../../img/glassesimoji.png';
import Flotingdiv from "../FlotingDiv/FlotingDiv";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Resume from './resume.pdf';



const Intro = () => {
    const transition = { duration: 2, type: "spring" }
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : '' }}>Hy! Am</span>
                    <span>Kiran Asamwar</span>
                    <span>As a fresher frontend developer,
                        I am passionate about crafting
                        engaging user experiences through
                        clean and efficient code. With
                        a keen eye for detail and a drive
                        for continuous learning, I am eager
                        to contribute to innovative projects
                        and grow within the dynamic field of
                        web development.</span>
                </div>
                <div className="btn-conatiners">
                    <Link spy={true} to='Contact' smooth={true}>
                        <button className="button i-button" >Hire me</button>
                    </Link>
                    <a href={Resume} download >
                        <button className="button s-button">Download CV</button>
                    </a>
                </div>
                <div className="i-icons">
                    {/* GitHub */}
                    <a href="https://github.com/kiranasamwar" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="GitHub" />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/kiran-asamwar-8754b5157/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/asamwar_kiran_/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>

            </div>
            <div className="i-right">
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={boy} alt='' />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={Glasessimoji}
                    alt="" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}
                    className="floting-div"
                >
                    <Flotingdiv image={Crown} txt1="Web" txt2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: 'orem' }}
                    className="floting-div"
                >
                    <Flotingdiv image={Thumbup} txt1="Best Design" />
                </motion.div>
                {/* blur divs*/}
                <div className="blur" style={{ background: "rgb (238 210 258)" }}>
                </div>
                <div className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem'

                    }}
                ></div>
            </div>
        </div>
    )
}

export default Intro