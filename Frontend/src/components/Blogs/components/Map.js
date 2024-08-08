import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Popup from "./Popup.js";
import ReactDOM from "react-dom";
import "./Map.css";

const Box=styled.div`
height:100vh;
width:100vw;
background-color:blue;
`
function Map()
{
  const [buttonPopup,setButtonPopup]=useState(false);
  return(

    <div >
      <main className="Map">

        <button  className="Map-btn" onClick={()=>setButtonPopup(true)}><div className="openMap-btn"></div></button>

      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        
      </Popup>
    </div>
  )
}
export default Map;
