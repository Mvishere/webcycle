// src/CarbonFootprintForm.js
import React, { useState } from 'react';
import './Carbonfootprint.css';

const CarbonFootprintForm = ({ onCalculate }) => {
    const [inputs, setInputs] = useState({
        electricity: '',
        gas: '',
        travel: '',
        diet: ''
    });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(inputs);
    };

    return (
        <form className="carbonfootprint-form-container" onSubmit={handleSubmit}>
            <div className="carbonfootprint-form-group">
                <label className="carbonfootprint-form-label">Electricity (kWh)</label>
                <input
                    type="number"
                    name="electricity"
                    className="carbonfootprint-form-control"
                    value={inputs.electricity}
                    onChange={handleChange}
                />
            </div>
            <div className="carbonfootprint-form-group">
                <label className="carbonfootprint-form-label">Gas (therms)</label>
                <input
                    type="number"
                    name="gas"
                    className="carbonfootprint-form-control"
                    value={inputs.gas}
                    onChange={handleChange}
                />
            </div>
            <div className="carbonfootprint-form-group">
                <label className="carbonfootprint-form-label">Travel (miles)</label>
                <input
                    type="number"
                    name="travel"
                    className="carbonfootprint-form-control"
                    value={inputs.travel}
                    onChange={handleChange}
                />
            </div>
            <div className="carbonfootprint-form-group">
                <label className="carbonfootprint-form-label">Diet (kg of CO2 per year)</label>
                <input
                    type="number"
                    name="diet"
                    className="carbonfootprint-form-control"
                    value={inputs.diet}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="carbonfootprint-submit-button">
                Calculate
            </button>
        </form>
    );
};

export default CarbonFootprintForm;