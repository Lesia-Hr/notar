import React from 'react';

import Calculator from "../components/Calculator/Calculator.js";

function CalculatorPage () {
    return (
        <div className="overlay main-backgraund-img main-height">
            <div className="container">
                <h2 style={{color: "white", fontSize:"40px"}}>Калькулятор договору оренди рухомого майна</h2>
                <p className="about-calculator">При внесенні всих даних до зазначених нижче рядків, фізична особа може отримати загальну вартість укладання договору оренди рухомого майна, що включає до себе суму сплаченого державного мита залежно від терміну оренди і вартості рухомого майна та нотаріальних послуг.</p>
                <Calculator />
            </div> 
        </div>
    )
}

export default CalculatorPage;