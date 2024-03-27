import React from 'react'
import './footer.css'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram.svg'
const Footer = () => {
  return (
    <div className="footer">
        <a href='/' className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </a>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
                <a href="instagram.com"><img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer