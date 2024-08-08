import React from 'react';
import "./Carbonfootprint.css"

const CarbonFootprintResult = ({ footprint }) => {
    return (
        <div className="carbonfootprint-result-container">
            <h3 className="carbonfootprint-result-title">Your Estimated Carbon Footprint</h3>
            <p className="carbonfootprint-result-value">{footprint} kg CO2 per year</p>
        </div>
    );
};

export default CarbonFootprintResult;