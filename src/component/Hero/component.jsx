import './style.css'
import { useState } from 'react';

import HeroImg from '../../assets/hero-img.svg'
import Modal from '../Modal/component';

import { useTranslation } from 'react-i18next';

function Hero() {
    const [OpenModal, SetOpenModal] = useState(false)
    const {t} = useTranslation()

  return (
    <section className="hero">
        <div className="container flex">
            <div className="content">
                <h2>{t('hero.title')}</h2>
                <h5>{t('hero.subtitle')}</h5>
                <hr />

                <div className="input flex">
                    <input type="text" placeholder={t('hero.location')}/>

                    <input type="text" placeholder={t('hero.activity')}/>

                    <div className="date flex">
                        <label htmlFor="ReachDate">{t('hero.reach')}</label>
                        <input id='ReachDate' type="date" placeholder={t('hero.grade')}/>
                    </div>

                    <div className="date flex">
                        <label htmlFor="endDate">{t('hero.arrive')}</label>
                        <input id='endDate' type="date" placeholder={t('hero.date')}/>
                    </div>
                </div>
                <button onClick={()=> SetOpenModal(true)}>{t('hero.explore')}</button>
            </div>
            <img src={HeroImg} alt="" />
        </div>

        {OpenModal && <Modal CloseModal={SetOpenModal}/>}
    </section>
  )
}

export default Hero;