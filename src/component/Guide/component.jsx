import './style.css'

import Thousand2 from '../../assets/Thousand.svg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../Modal/component';

function Guide() {
  const {t} = useTranslation()

  const [OpenModal, SetOpenModal] = useState(false)

  return (
    <section className="call-to-action">
        <div className="container flex">
            <div className="content flex">
                <h2>{t('guide.title')}</h2>
                <p>{t('guide.paragraph')}</p>
                <button onClick={()=> SetOpenModal(true)}>{t('guide.button')}</button>
            </div>

            <img src={Thousand2} alt="" />
        </div>
        {OpenModal && <Modal CloseModal={SetOpenModal}/>}
    </section>
  )
}

export default Guide;