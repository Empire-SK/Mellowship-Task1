import React from 'react'
import hoomans from '../assets/hoomans.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import x from '../assets/x.png'
import telegram from '../assets/telegram.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={hoomans} alt="" class='footer-left' />
            <div className="footer-right">
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={x} alt="" />
                <img src={telegram} alt="" />
            </div>

        </div>
    )
}

export default Footer