import './style.css'

import { FaStar } from "react-icons/fa";
import TestimonialsSvg from '../../assets/Testimonials.svg'

function Testimonials() {
  return (
    <section className="testimonials">
        <div className="container flex">
            <div className="content">
                <h2>Testimonials</h2>
                <div className="raiting flex">
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                </div>
                <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                <h4>Edward Newgate</h4>
                <h6>Founder Circle</h6>
            </div>

            <img src={TestimonialsSvg} alt="" />
        </div>
    </section>
  )
}

export default Testimonials;