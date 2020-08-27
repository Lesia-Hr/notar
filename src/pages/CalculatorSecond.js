import React from 'react';

import CalculatorSecond from "../components/CalculatorSecond";

function CalculatorPageSecond () {
    return (
        <div className="overlay main-backgraund-img main-height">
            <div className="container">
                <h2 style={{color: "white", fontSize:"40px"}}>Калькулятор договору оренди нерухомого майна</h2>
                <p className="about-calculator">При внесенні всих даних до зазначених нижче рядків, особа може отримати загальну вартість укладання договору оренди нерухомого майна, що включає до себе суму сплаченого державного мита залежно від терміну оренди нерухомого майна та нотаріальних послуг.</p>
                <CalculatorSecond />
            </div> 
        </div>
    )
}

export default CalculatorPageSecond;