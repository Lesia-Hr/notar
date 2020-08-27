import React, { useState } from 'react';
import NotarSlider from '../Slider';
import NotarTextField from '../TextField';
import { NOTAR_SERVICES_PRICE } from '../../config/constants';
import {CUSTOMS_STATE_PRISE } from '../../config/constants';

import './style.css';

function Calculator() {
    const [ term, setTerm ] = useState(1);
    const [ rentPrice, setRentPrice ] = useState(100);
    const [ realEstatePrice, setRealEstatePrice ] = useState(0);

    const [ total, setTotal ] = useState(0);

    const handleCalc = (value, type) => {

        switch(type) {
            case 'term':
                setTerm(value)
                break;
            case 'rentPrice':
                setRentPrice(value)
                break;
            case 'realEstatePrice':
                setRealEstatePrice(value)
                break;
            default:
                return;
        }

        const total = getTotal();

        setTotal(total);
    };

    const getTotal = () => {
        const statePrice = localStorage.getItem('NOTAR_PRISE_RENT') || CUSTOMS_STATE_PRISE;

        return ( term * 12 * rentPrice ) + (statePrice * realEstatePrice) + NOTAR_SERVICES_PRICE;
    };


    const handleSliderChangeYear = (event, newValue) => {
        handleCalc(newValue, 'term');
    };

    return (
        <div className = "box-calculator">
            <div className="row-calculator">
                <div className="label-text">Термін оренди рухомого майна (р.)</div>
                   <div className="label-box">
                        <NotarSlider
                            defaultValue={3}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="on"
                            step={1}
                            marks
                            min={1}
                            max={15}
                            value={term}
                            onChange={handleSliderChangeYear}
                        />
                </div>
            </div>
            <div className="row-calculator">
                <div className="label-text">Вартість оренди рухомого майна за 1 місяць (грн)</div>
                    <div className="label-box">
                    <form  noValidate autoComplete="off">
                            <NotarTextField 
                                id="outlined-size-normal"
                                variant="outlined"
                                min={0}
                                type="number"
                                value={rentPrice}
                                onChange={e => handleCalc(e.target.value, 'rentPrice')}
                            />
                        </form>
                    </div>
            </div>
            <div className="row-calculator">
                <div className="label-text">Вартість рухомого майна</div>
                   <div className="label-box">
                     <form  noValidate autoComplete="off">
                            <NotarTextField 
                                id="outlined-size-normal"
                                variant="outlined"
                                type="number"
                                min={0}
                                value={realEstatePrice}
                                onChange={e => handleCalc(e.target.value, 'realEstatePrice')}
                            />
                        </form>
                    </div>
            </div>
            <div className="sum">Загальна Вартість нотаріальних послуг <strong> {total.toFixed(2)} </strong> грн</div>

            {total !== 0 && (
                <div className="total-text">При укладанні договору оренди рухомого майна на <strong>{term} </strong> роки, при врахуванні щомісячної вартості оренди - <strong> {rentPrice}</strong> гривень та загальної вартості майна <strong>{realEstatePrice}</strong> гривень, державно мито складає <strong> {(total - NOTAR_SERVICES_PRICE).toFixed(2)}</strong> гривень.</div>
            )}

        </div>
    );
}

export default Calculator;