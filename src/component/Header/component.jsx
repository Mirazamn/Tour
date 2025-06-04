import './style.css'

import Modal from '../Modal/component';
import DropdownBtn from '../Dropdown/component';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../../assets/Logo.svg'

import { RiMenu3Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";


function Header() {
  const { t, i18n } = useTranslation();
  const [OpenModal, SetOpenModal] = useState(false)
  const [right, setRight] = useState(false)

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
        <div className="container flex">
            <img src={Logo} alt="" />
            <RiMenu3Line onClick={()=> setRight(true)} className='menu'/>

            <ul className={right ? 'right': 'flex'}>
              <div className="top flex">
                <span className='exit flex' onClick={()=> setRight(false)}> <HiXMark /> </span>

                
              </div>

                


                <li><span>{t('header.home')}</span></li>
                <li>{t('header.destinations')}</li>
                <li>{t('header.about')}</li>
                <li>{t('header.partner')}</li>
                
                <div className="btn flex">
                    <DropdownBtn/> 
                    <button onClick={() => SetOpenModal(true)} className='register'>{t('header.contactus')}</button>
                </div>
            </ul>
        </div>
        {OpenModal && <Modal CloseModal={SetOpenModal}/>}
    </header>
  )
}

export default Header;