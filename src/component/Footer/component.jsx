import './style.css'

import Logo from '../../assets/Logo.svg'

import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <div className="container flex">
            <div className="about flex">
                <img src={Logo} alt="" />
                <p>Plan and book your perfect trip with <br /> 
                expert advice, travel tips destination <br />
                information from us</p>
                <h6>©2020 Thousand Sunny. All rights reserved</h6>
            </div>

            <ul className='flex'>
                <h4>Destinations</h4>
                <li>Africa</li>
                <li>Antarctica</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>America</li>
            </ul>

            <ul className='flex'>
                <h4>Interests</h4>
                <li>Adventure Travel</li>
                <li>Art And Culture</li>
                <li>Wildlife And Nature</li>
                <li>Family Holidays</li>
                <li>Food And Drink</li>
            </ul>

            <ul className="flex">
                <h4>Contact Us</h4>
                <div className="flex">
                    <a href="https://x.com/"><RiTwitterXLine className='icon'/></a>
                    <a href="https://www.facebook.com/"><FaFacebookF className='icon'/></a>
                    <a href="https://www.instagram.com/"><FaInstagram className='icon'/></a>
                    <a href="https://www.linkedin.com/"><FaLinkedinIn className='icon'/></a>
                    <a href="https://www.youtube.com/"><FaYoutube className='icon'/></a>
                </div>
            </ul>

            <h6 className='rights'>©2020 Thousand Sunny. All rights reserved</h6>
        </div>
    </footer>
  )
}

export default Footer;