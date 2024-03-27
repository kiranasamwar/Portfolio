import React  from "react";
import './Intro.css'

import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glasessimoji from '../../img/glassesimoji.png'
import Flotingdiv from "../FlotingDiv/FlotingDiv";


const Intro = ()=>{
    return(
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! Am</span>
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
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt=''/>
                <img src={Linkedin} alt=''/>
                <img src={Instagram} alt=''/>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=''/>
            <img src={Vector2} alt=''/>
            <img src={boy} alt=''/>
            <img src={Glasessimoji} alt=""/>
            <div style={{top:'-4%', left: '68%'}}>
                <Flotingdiv image={Crown} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top:'18rem', left:'orem'}}>
                <Flotingdiv image={Thumbup} txt1="Best Design"/>
            </div>
            {/* blur divs*/}
            <div className="blur" style={{background: "rgb (238 210 258)"}}>
            </div>
            <div className="blur" 
            style={{
                background:'#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'

              }}
              ></div>
        </div>
    </div>
    )
}

export default Intro