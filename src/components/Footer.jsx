import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/Footer.css'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {
    return (
        <div className="footer--container">
            <div className="sec-A">
                <div className="logo">
                    <LazyLoadImage src="./images/logo-main.jpg" alt="logo" />
                    <LazyLoadImage id='fuyo' src="./images/fuyo_logo1.png" alt="logo" />
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
                    <a href='https://liff.line.me/1645278921-kWRPP32q/?accountId=qnl8292y' target='_blank'>
                        <LazyLoadImage src="./svg/line.png" alt="line-icon" />
                    </a>
                    <a href='https://www.facebook.com/TamsuiKB' target='_blank'><LazyLoadImage src="./svg/fb.png" alt="facebook-icon" /></a>
                    <a href='https://www.instagram.com/tamsui_kickboxing/' target='_blank'><LazyLoadImage src="./svg/insta.png" alt="square-instagram-icon" /></a>
                </div>
            </div>
            <div className="sec-B">
                <p>&copy; 功夫門人 2023. All Rights Reserved.</p>
                {/* <p>Terms and Services</p> */}
                <p>Design by <a id='studio_link' target='_blank' href='https://www.instagram.com/jackwang.studio' className='studioName'>jackwang.Studio</a></p>
            </div>
            <div className="sec-dummy"></div>
        </div>
    )
}

export default Footer