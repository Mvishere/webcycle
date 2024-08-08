import React from 'react'
import "./Popup.css";
import App from "./MyMap"
function Popup(props) {
  return(props.trigger)? (
    <div className='popup'>
        <div className='popup-inner'>
          <App/>
        <button className='close-btn' onClick={()=>props.setTrigger(false)}>
            <div className="closeMap-btn">

            </div>
        </button>
        {props.children}
        </div>
    </div>
  ):"";
}

export default Popup