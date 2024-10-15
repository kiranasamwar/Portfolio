import React from 'react'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%', }} className='wave' />
            <div className="f-content">
                <span>Kiranasamwar@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/asamwar_kiran_/" target="_blank" rel="noopener noreferrer">
                        <Insta color="white" size="3rem" />
                    </a>
                    <a href="https://www.facebook.com/assamwer.kiran/" target="_blank" rel="noopener noreferrer">
                        <Facebook color="white" size="3rem" />
                    </a>
                    <a href="https://github.com/kiranasamwar" target="_blank" rel="noopener noreferrer">
                        <Github color="white" size="3rem" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
