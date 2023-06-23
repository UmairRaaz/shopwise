import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer'>
            <p>ShopWise made by Umair</p>
            <div className="links">
                <a href="https://github.com/UmairRaaz" target="_blank" rel="noopener noreferrer">
                    <BsGithub />
                </a>
                <a href="https://twitter.com/umairraaz" target="_blank" rel="noopener noreferrer">
                    <BsTwitter />
                </a>
                <a href="https://www.linkedin.com/in/umairaligopang/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer