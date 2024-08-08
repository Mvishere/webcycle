// src/App.js
import React, { useState } from 'react';
import CarbonFootprintForm from './Carbonfootprintform';
import CarbonFootprintResult from './Carbonfootprintresult';
import './Carbonfootprint.css';

const App = () => {
    const [footprint, setFootprint] = useState(null);

    const calculateFootprint = (inputs) => {
        const { electricity, gas, travel, diet } = inputs;
        const totalFootprint =
            (electricity * 0.233) + // Electricity (kg CO2 per kWh)
            (gas * 5.3) + // Natural gas (kg CO2 per therm)
            (travel * 0.411) + // Travel (kg CO2 per mile)
            parseFloat(diet); // Diet (kg CO2 per year)
        setFootprint(totalFootprint.toFixed(2));
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Carbon Footprint Calculator</h1>
            <CarbonFootprintForm onCalculate={calculateFootprint} />
            {footprint !== null && <CarbonFootprintResult footprint={footprint} />}
        </div>
    );
};

export default App;