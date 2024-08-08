// import React ,{useState} from 'react'
// import './Home.css'
// import Boxes from './components/Boxes'
// import News from './components/news'


// export default function Main({mode}) {
//   const [showmore, setShowmore] = useState(false);
//   const handleShowMore = () => {
//     setShowmore(!showmore);
//   };
//   return (
//     <div>
//       <div className='homepage-backgroundimage'>
//       {/* <div> */}

//         <div className="title">
//           <div className="left">
//             WEBCYCLE - <br />
//             Make Future <br />
//             Sustainable
//           </div>
//           <div className="right">
//             “There must be a better way to make the things we want, <br />a way that doesn’t spoil the sky, or the rain or the land.”
//           </div>
//         </div>
//         </div>

//       <div className='home-container'>
//         <div className="sustainability">
//           <strong> <p className='susp'>Sustainable Development</p></strong>
//           <div className="content"> Sustainable development is an approach to growth and human development that aims to meet the needs of the present without compromising the ability of future generations to meet their own needs.  The aim is to have a society where living conditions and resources meet human needs without undermining planetary integrity</div>
//           <strong><p className='susp'>Why ?</p></strong>
//           <div className="content">
//             Sustainable development practices help countries and businesses grow in ways that adapt to the challenges posed by climate change. This protects important natural resources for our current and future generations and allows communities to thrive. Governments around the world realize this and are starting to implement regulations that support sustainable development and hold private companies accountable for their actions. 
//           </div>

// {/* newanimation */}
// <Boxes/>

// {/* newanimation */}   
//         </div>
//         <div className="latest">
//           <div className="latestnews">Trending</div>
//           <div className="allnews">
//             <News id="plastic" info="Plastic industry among leading contributors to economy, provides huge job opportunities: Govt" link="https://economictimes.indiatimes.com/industry/indl-goods/svs/paper-/-wood-/-glass/-plastic/-marbles/plastic-industry-among-leading-contributors-to-economy-provides-huge-job-opportunities-govt/articleshow/111494421.cms" />
//             <News id="climateimage" info="Climate change: Cos need some big changes on compliances India Inc's environmental ..." link="https://economictimes.indiatimes.com/news/economy/indicators/climate-change-cos-need-some-big-changes-on-compliances/articleshow/110746000.cms" />
//             <News id="solarcooking" info="Amid rising temperature Will India embrace Solar cooking again? As temperatures in ...." link="https://economictimes.indiatimes.com/magazines/panache/amid-rising-temperatures-will-india-embrace-solar-cooking-once-again/articleshow/110634850.cms" />
//             </div>

//             {!showmore && (<button className="show-more-homepage" onClick={handleShowMore}>
//           {showmore ? 'Show Less' : 'Show More'}
//         </button>
//     )}

//           {showmore && (<div className='allnews' id='next-part'>
//           <News id="logicladder" info="Climate tech firm LogicLadder raises $2.5 million in funding from Big Capital, Rainmatter  ..." link="https://economictimes.indiatimes.com/tech/funding/climate-tech-firm-logicladder-raises-2-5-million-in-funding-from-big-capital-rainmatter/articleshow/110669815.cms" />
//             <News id="aiandgrow" info="How AI and data can bring another green revolution in India. India faces environmental challenges ..." link="https://economictimes.indiatimes.com/news/economy/agriculture/how-ai-and-data-can-bring-another-green-revolution-in-india/articleshow/109946518.cms" />
//             <News id="greenjobs" info="Future of green jobs holds immense promise in India: Ramesh Alluri Reddy, TeamLease Degree.." link="https://economictimes.indiatimes.com/small-biz/sustainability/future-of-green-jobs-holds-immense-promise-in-india-ramesh-alluri-reddy-teamlease-degree-apprenticeship/articleshow/110520680.cms" />
//             <News id="profitandsustain" info="Climate tech firm LogicLadder raises $2.5 million in funding from Big Capital, Rainmatter..." link="https://economictimes.indiatimes.com/jobs/c-suite/can-leaders-show-profitability-and-sustainability-together/articleshow/110416682.cms" />
//             <News id="effi" info="Will AI Help or Hurt Sustainability? Yes AI has the potential to help address societal problems" link="https://www.google.co.in/url?sa=t&source=web&rct=j&opi=89978449&url=https://sloanreview.mit.edu/article/will-ai-help-or-hurt-sustainability-yes/&ved=2ahUKEwjT7faTl6GHAxWbyzgGHVQ3DAEQxfQBKAB6BAgHEAE&usg=AOvVaw0AxyRXKwTreLkVDjR2UmV4" />
//             <News id="windmill" info="DS Group launches #SaveTheFuture campaign on 'World Environment Day’ The campaign will run.." link="https://economictimes.indiatimes.com/small-biz/sustainability/ds-group-launches-savethefuture-campaign-on-world-environment-day/articleshow/110759481.cms" />

//             <button className="show-more-homepage" id='showless-homepage' onClick={handleShowMore}>
//               Show Less
//             </button>
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import './Home.css';
import Boxes from './components/Boxes';
import News from './components/news';
import TypewriterEffect from './components/typewriter';

export default function Home({ mode }) {
  const [showmore, setShowmore] = useState(false);
  const handleShowMore = () => {
    setShowmore(!showmore);
  };

  return (
    <div className={`homepage-main-container ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <div className='homepage-backgroundimage'>
        <div className="title">
          <div className="left">
            WEBCYCLE -
            <br />
            {/* Make Future <br /> */}
            <TypewriterEffect text="Make Future" breaktext="Sustainable" />
            {/* Sustainable */}
            {/* <TypewriterEffect text="Make Future Sustainble"/> */}
          </div>
          <div className="right">
            “There must be a better way to make the things we want, <br />a way that doesn’t spoil the sky, or the rain or the land.”
          </div>
        </div>
      </div>

      <div className='home-container'>
        <div className="sustainability">
          <strong><p className='susp'>Sustainable Development</p></strong>
          <div className="content"> Sustainable development is an approach to growth and human development that aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. The aim is to have a society where living conditions and resources meet human needs without undermining planetary integrity</div>
          <strong><p className='susp'>Why ?</p></strong>
          <div className="content">
            Sustainable development practices help countries and businesses grow in ways that adapt to the challenges posed by climate change. This protects important natural resources for our current and future generations and allows communities to thrive. Governments around the world realize this and are starting to implement regulations that support sustainable development and hold private companies accountable for their actions.
          </div>

          {/* newanimation */}
          <Boxes />

          {/* newanimation */}
        </div>
        <div className="latest">
          <div className="latestnews">Trending</div>
          <div className="allnews">
            <News id="plastic" info="Plastic industry among leading contributors to economy, provides huge job opportunities: Govt" link="https://economictimes.indiatimes.com/industry/indl-goods/svs/paper-/-wood-/-glass/-plastic/-marbles/plastic-industry-among-leading-contributors-to-economy-provides-huge-job-opportunities-govt/articleshow/111494421.cms" />
            <News id="climateimage" info="Climate change: Cos need some big changes on compliances India Inc's environmental ..." link="https://economictimes.indiatimes.com/news/economy/indicators/climate-change-cos-need-some-big-changes-on-compliances/articleshow/110746000.cms" />
            <News id="solarcooking" info="Amid rising temperature Will India embrace Solar cooking again? As temperatures in ...." link="https://economictimes.indiatimes.com/magazines/panache/amid-rising-temperatures-will-india-embrace-solar-cooking-once-again/articleshow/110634850.cms" />
          </div>

          {!showmore && (
            <button className="show-more-homepage" onClick={handleShowMore}>
              {showmore ? 'Show Less' : 'Show More'}
            </button>
          )}

          {showmore && (
            <div className='allnews' id='next-part'>
              <News id="logicladder" info="Climate tech firm LogicLadder raises $2.5 million in funding from Big Capital, Rainmatter  ..." link="https://economictimes.indiatimes.com/tech/funding/climate-tech-firm-logicladder-raises-2-5-million-in-funding-from-big-capital-rainmatter/articleshow/110669815.cms" />
              <News id="aiandgrow" info="How AI and data can bring another green revolution in India. India faces environmental challenges ..." link="https://economictimes.indiatimes.com/news/economy/agriculture/how-ai-and-data-can-bring-another-green-revolution-in-india/articleshow/109946518.cms" />
              <News id="greenjobs" info="Future of green jobs holds immense promise in India: Ramesh Alluri Reddy, TeamLease Degree.." link="https://economictimes.indiatimes.com/small-biz/sustainability/future-of-green-jobs-holds-immense-promise-in-india-ramesh-alluri-reddy-teamlease-degree-apprenticeship/articleshow/110520680.cms" />
              <News id="profitandsustain" info="Climate tech firm LogicLadder raises $2.5 million in funding from Big Capital, Rainmatter..." link="https://economictimes.indiatimes.com/jobs/c-suite/can-leaders-show-profitability-and-sustainability-together/articleshow/110416682.cms" />
              <News id="effi" info="Will AI Help or Hurt Sustainability? Yes AI has the potential to help address societal problems" link="https://www.google.co.in/url?sa=t&source=web&rct=j&opi=89978449&url=https://sloanreview.mit.edu/article/will-ai-help-or-hurt-sustainability-yes/&ved=2ahUKEwjT7faTl6GHAxWbyzgGHVQ3DAEQxfQBKAB6BAgHEAE&usg=AOvVaw0AxyRXKwTreLkVDjR2UmV4" />
              <News id="windmill" info="DS Group launches #SaveTheFuture campaign on 'World Environment Day’ The campaign will run.." link="https://economictimes.indiatimes.com/small-biz/sustainability/ds-group-launches-savethefuture-campaign-on-world-environment-day/articleshow/110759481.cms" />

              <button className="show-more-homepage" id='showless-homepage' onClick={handleShowMore}>
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
