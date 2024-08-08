import React, { useState } from 'react';
import { Map, Marker, Popup } from 'react-map-gl';
import sustainableData from './sustainable_data.json';
import 'mapbox-gl/dist/mapbox-gl.css';

const Token = 'pk.eyJ1IjoibWFuaXNoYTE1LTA3IiwiYSI6ImNseXRxdzI1cTA1bHQybnNsaHF6amhrMGwifQ.nuBgZY9qA5yQdkrJWrBE8Q';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const mapStyle = {
    width: '100vh',
    height: '100vw'
  };

  return (
    <div id='map' style={mapStyle}>
      <Map
        mapboxAccessToken={Token}
        initialViewState={{
          longitude: 10.4515,
          latitude: 51.1657,
          zoom: 2
        }}
        style={{ position:'absolute', 
           top:'0%',
           left:'0%',
           height:'100%',
           width:'100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {sustainableData.countries.map((country) => (
          <Marker
            key={country.country}
            longitude={country.longitude}
            latitude={country.latitude}
            onClick={() => {
              setSelectedCountry(country);
              
            }}
          />
        ))}

        {selectedCountry && (
          <Popup
            longitude={selectedCountry.longitude}
            latitude={selectedCountry.latitude}
            onClose={() => {
              setSelectedCountry(null);
              console.log('deselected');
            }}
            closeOnClick={false}
          >
            <div>
              <h2>{selectedCountry.country}</h2>
              <p><strong>Financial Contribution:</strong> {selectedCountry.financial_contribution.amount} ({selectedCountry.financial_contribution.year})</p>
              <h3>Policy Initiatives</h3>
              {selectedCountry.policy_initiatives.map((initiative, index) => (
                <div key={index}>
                  <p><strong>{initiative.initiative}</strong></p>
                  <p>{initiative.description}</p>
                  <p><em>Impact:</em> {initiative.impact}</p>
                </div>
              ))}
              <h3>SDG Progress</h3>
              {Object.keys(selectedCountry.sdg_progress).map((sdgKey, index) => (
                <div key={index}>
                  {sdgKey !== 'details' && <p><strong>{sdgKey}:</strong> {selectedCountry.sdg_progress[sdgKey]}</p>}
                </div>
              ))}
              {selectedCountry.sdg_progress.details.map((detail, index) => (
                <div key={index}>
                  <p><strong>{detail.sdg}:</strong> {detail.progress}</p>
                </div>
              ))}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}