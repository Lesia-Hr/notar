import React, { useState, useEffect } from 'react';
import './UserPageBox.css';

import { CUSTOMS_PRISE_RENT, CUSTOMS_STATE_PRISE } from '../../config/constants';

function UserPageBox() {
    const [priceRent, setPriceRent] = useState( localStorage.getItem('NOTAR_STATE_PRISE') || CUSTOMS_STATE_PRISE );
    const [statePrice, setStatePrice] = useState( localStorage.getItem('NOTAR_PRISE_RENT') || CUSTOMS_PRISE_RENT );

    useEffect(() => {
      localStorage.setItem('NOTAR_STATE_PRISE', priceRent);
    }, [priceRent]);

    useEffect(() => {
        localStorage.setItem('NOTAR_PRISE_RENT', statePrice);
      }, [statePrice]);
   
    const onPriceRentChange = (e) => setPriceRent(e.target.value); 
    const onStatePriceChange = (e) => setStatePrice(e.target.value); 

    return (
        <div className='user-container'>
            <h3>Налаштування калькулятору по розрахунку державного мита</h3>
            <div className='row '>
                <p className="">Державне мито при укладанні договру оренди нерухомого майна(вираховується від загальної суми оренди майна на вказаний термін) %</p>
                <input className="notar-form-input" value={statePrice} type="number" onChange={onStatePriceChange}></input>
            </div>
            <div className='row'>
                <p>Державне мито при укладанні договру оренди рухомого майна (вираховуються від васртості майна) %</p> 
                <input className="notar-form-input" value={priceRent} type="number" onChange={onPriceRentChange}></input>
            </div>
        </div>
    )
}


export default UserPageBox;