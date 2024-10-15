import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

import './Contact.css';

const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_iykk7h5', 'template_57x8eod', form.current, {
                publicKey: 'd0vJxVkphYjtRgxga',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='contact-form' id="Contact">
            <div className='w-left'>
                <div className='awesome'>
                    <span className='get ' style={{ color: darkMode ? "white" : '' }}>Get in touch</span>
                    <span className='get1 '>Contact me</span>
                    <div
                        className='blur s-blur1'
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>

            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name' />
                    <input type='email' name='user-email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message' rows='5' />
                    <input type='submit' value="Send" className='button' />
                    <span>{done && "Thanks for Contacting me!"}</span>
                    <div
                        className='blur c-blur1'
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
