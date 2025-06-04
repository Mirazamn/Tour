import { useState, useEffect } from 'react';
import './style.css'

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/component';

function Features() {
  const {t} = useTranslation()

    const [places, setPlace] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [OpenModal, SetOpenModal] = useState(false)

    useEffect(() => {
        fetch('https://67ceb4c2125cd5af757ba4e6.mockapi.io/api/v1/tasks')
            .then((res) => res.json())
            .then((data) => {
                setPlace(data);
                console.log(data);
            });
    }, []);
    return (
        <section className="features">
            <div className="container">
                <h2 className='flex'>{t('features.title')}<span className='flex' style={{ cursor: 'pointer' }} onClick={() => setShowAll(!showAll)}>{showAll ? <>{t('features.less')} <IoIosArrowDown /> </> : <>{t('features.more')} <IoIosArrowForward /></>} </span></h2>
                <div className="cards flex">
                    {places.slice(0, showAll ? places.length : 4).map((place) => {
                        return (
                            <div onClick={()=> SetOpenModal(true)} style={{ backgroundImage: `url(${place.image})` }} key={place.id} className="card">
                                <div className="content">
                                    <h4>{place.City}</h4>
                                    <h6>{place.Country}</h6>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {OpenModal && <Modal CloseModal={SetOpenModal}/>}
        </section>
    );
}

export default Features;