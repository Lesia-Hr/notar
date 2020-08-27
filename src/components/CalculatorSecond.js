import React, { useState } from 'react';
import NotarSlider from './Slider';
import NotarTextField from './TextField';
import { NOTAR_SERVICES_PRICE, CUSTOMS_PRISE_RENT } from '../config/constants';

function CalculatorSecond() {
    const [ term, setTerm ] = useState(1);
    const [ rentPrice, setRentPrice ] = useState(100);
    const [ total, setTotal ] = useState(0);

    const handleCalc = (value, type) => {
        
        switch(type) {
            case 'term':
                setTerm(value)
                break;
            case 'rentPrice':
                setRentPrice(value)
                break;
            
            default:
                return;
        }

        const total = getTotal();

        setTotal(total);
    };

    
    const handleSliderChangeYear = (event, newValue) => {
        handleCalc(newValue, 'term');
    };
    

    const getTotal = () => {
        const priceRent = localStorage.getItem('NOTAR_STATE_PRISE') || CUSTOMS_PRISE_RENT

        return ( term * 12 * rentPrice ) * priceRent + NOTAR_SERVICES_PRICE;
    };
    
    return (
        <div className = "box-calculator">
            <div className="row-calculator">
                <div className="label-text">Термін оренди нерухомого майна  (р.) </div>
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
                <div className="label-text">Вартість оренди нерухомого майна за 1 місяць (грн)</div>
                 <div className="label-box">
                    <form  noValidate autoComplete="off">
                            <NotarTextField 
                                id="outlined-size-normal"
                                variant="outlined"
                                type="number"
                                min={0}
                                value={rentPrice}
                                onChange={e => handleCalc(e.target.value, 'rentPrice')}
                            />
                        </form>
                </div>
            </div>
            
            <div className="sum"> Загальна Вартість нотаріальних послуг <strong>{total.toFixed(2)}</strong> грн</div>
            {total !== 0 && (
                <div className="total-text">При укладанні договору оренди нерухомого майна на <strong> {term} </strong> роки, при врахуванні щомісячної вартості оренди - <strong>{rentPrice}</strong> гривень державно мито складає <strong>{(total - NOTAR_SERVICES_PRICE).toFixed(2)}</strong> гривень.</div>
            )}
        </div>
    );
}

export default CalculatorSecond;