import React from 'react'
import { useInView } from 'react-intersection-observer';

export default function ProgramBoxes(props) {

  return (
    // <div className='program-hover-content'>
    //   <div className="programname">{props.program_title} </div>
    //   <div className="programinfo">
    //         <div className="program-related-image" id={props.id}></div>
    //     <div className="program-related-para">{props.program_info}
    //     <br/>
    //     <div className="join">
    //       <a className="joinbtn" href={props.joinlink}>Join Now</a>
    //   </div>
    //     </div>
    //   </div>
    
    // </div>

    <div className="program">
      <div className="programinfo">
        <h3 className="programname">{props.program_title}</h3>
        <p className='program-related-para'>{props.program_info}</p>
        <a href={props.join_link} className="joinbtn">
          <span>Join Now</span>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg> 
        </a>
      </div>
      <div className="program-image" id={props.id}></div>
    </div>
  )
}
