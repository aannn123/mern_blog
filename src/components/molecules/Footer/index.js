import React from 'react'
import { ICFacebook, ICInstagram, ICLinkedin, ICLogo, ICTiktok, ICTwitter, ICYoutube } from '../../../assets'
import './footer.scss'

const Icon = ({ img }) => {
    return (
        <div className='icon-wrapper'>
            <img src={img} className="icon-medsos" alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <img className='logo' src={ICLogo} alt="logo" />
                </div>
                <div className='social-wrapper'>
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICLinkedin} />
                    <Icon img={ICTiktok} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICYoutube} />
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer