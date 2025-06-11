import './style.css'

import { FaStar } from "react-icons/fa";
import TestimonialsSvg from '../../assets/Testimonials.svg'
import { useTranslation } from 'react-i18next';

function Testimonials() {
  const {t} = useTranslation()

  return (
    <section className="testimonials">
        <div className="container flex">
            <div className="content">
                <h2>{t("testimonials.title")}</h2>
                <div className="raiting flex">
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                </div>
                <p>{t("testimonials.quote")}</p>
                <h4>{t("testimonials.name")}</h4>
                <h6>{t("testimonials.position")}</h6>
            </div>

            <img src={TestimonialsSvg} alt="" />
        </div>
    </section>
  )
}

export default Testimonials;