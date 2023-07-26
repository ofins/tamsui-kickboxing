import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/Footer.css'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer--container">
            <div className="sec-A">
                <div className="logo">
                    <img src="./images/logo-main.jpg" alt="logo" />
                </div>
                <div className="contact">
                    <div className="address">
                        <FontAwesomeIcon style={{ color: 'white' }} icon={faLocationDot} />
                        <h3 >新北市淡水區沙崙路201巷30號</h3>
                    </div>
                    <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
                        <h3>TamsuiKB@gmail.com</h3>
                    </div>
                </div>
                <div className="social-icons">
                    <a href='https://www.instagram.com/tamsui_kickboxing/' target='_blank'>
                        <img src="./svg/line.png" alt="line-icon" />
                    </a>
                    <a href='https://www.facebook.com/TamsuiKB' target='_blank'><img src="./svg/fb.png" alt="facebook-icon" /></a>
                    <a href='https://www.instagram.com/tamsui_kickboxing/' target='_blank'><img src="./svg/insta.png" alt="square-instagram-icon" /></a>
                </div>
            </div>
            <div className="sec-B">
                <p>@ 功夫門人 2023. All Rights Reserved</p>
                <p>Terms and Services</p>
                <p>Design by <span className='studioName'>jackwang.Studio</span></p>
            </div>
        </div>
    )
}

export default Footer