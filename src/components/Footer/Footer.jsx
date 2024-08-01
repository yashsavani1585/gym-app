import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Logo from "../../assets/logo.png"
function Footer() {
    return (
        <div className='footer-container'>
            <hr />
            <div className='footer'>
                <div className='social-media'>
                    <img src={Github}></img>
                    <img src={Instagram}></img>
                    <img src={Linkedin}></img>

                </div>
                <div className='logo-f'>
                    <img src={Logo}></img>
                </div>
            </div>
            <div className='blur plan-blur-f-1'></div>
            <div className='blur plan-blur-f-2'></div>
        </div>



    )
}

export default Footer
