import './style.css'

import { useState } from 'react';

import Thousand from '../../assets/Thousand-02.svg'
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/component';

function CTA() {
  const {t} = useTranslation()
  const [OpenModal, SetOpenModal] = useState(false)

  return (
    <section className="call-to-action">
        <div className="container flex">
            <img src={Thousand} alt="" />

            <div className="content flex">
                <h2>{t('cta.title')}</h2>
                <p>{t('cta.paragraph')}</p>
                <button onClick={()=> SetOpenModal(true)} >{t('cta.button')}</button>
            </div>
        </div>
        {OpenModal && <Modal CloseModal={SetOpenModal}/>}
    </section>
  )
}

export default CTA;