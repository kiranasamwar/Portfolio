import React from "react";
import './Works.css';

import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import Fiverr from '../../img/fiverr.png';
import Amezon from '../../img/amazon.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-scroll'


const Works = () => { 
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="works">
            {/* Left Side*/}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : '' }}>Works for All these</span>
                <span>Brands & Clients</span>
                <sapn>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    perferendis natus dignissimos, maxime magni sint non dolorum
                    <br />
                    perferendis natus dignissimos, maxime magni sint non dolorum
                    <br />
                    perferendis natus dignissimos, maxime magni sint non dolorum
                </sapn>
                <Link spy={true} to='Contact' smooth={true}>
                <button className="button s-button">Hire me</button>
                </Link>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>

            </div>
            {/* Right Side*/}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{  rotate: 0 }}
                    viewport={{margin: '-40px'}}
                    transition = {{ duration: 3.5 , type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amezon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/*Background Circles*/}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yelllowCircle"></div>
            </div>
        </div>
    )
}


export default Works