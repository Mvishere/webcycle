import React, { useEffect } from 'react';
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import '../Home.css';


//     return (
// <div className="boxes">
//     <div className="images" id={props.id}></div>
//     <div className="imgrelatedinfo">{props.title}<br />{props.text}
//         <br />
//         <div className="knoww">
//             <a href={props.link} className='know-more'>Know More</a></div>
//     </div>
// </div>



const itemsData = [
  {
    id: 1,
    title: '#1 POVERTY',
    description: 'End poverty in all its forms everywhere',
    imageid: 'poverty',
    knowlink: 'https://sdgs.un.org/goals/goal1'
  },
  {
    id: 2,
    title: '#2 INDUSTRY',
    description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
    imageid: 'industry',
    knowlink: 'https://sdgs.un.org/goals/goal9'
  },
  {
    id: 3,
    title: '#3 HUNGER',
    description: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
    imageid: 'hunger',
    knowlink: 'https://sdgs.un.org/goals/goal2'
  },
  {
    id: 4,
    title: "#4 EDUCATION",
    description: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
    imageid: 'edu',
    knowlink: 'https://sdgs.un.org/goals/goal4'
  },
  {
    id: 5,
    title: "#5 SANITATION",
    description: 'Ensure availability and sustainable management of water and sanitation for all',
    imageid: 'sanity',
    knowlink: 'https://sdgs.un.org/goals/goal6'
  },
  {
    id: 6,
    title: "#6 CLIMATE",
    description: 'Take urgent action to combat climate change and its impacts.',
    imageid: 'climate',
    knowlink: 'https://sdgs.un.org/goals/goal13'
  },
  {
    id: 7,
    title: "#7 AQUATIC LIFE",
    description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
    imageid: 'waterbody',
    knowlink: 'https://sdgs.un.org/goals/goal14'
  },
  {
    id: 8,
    title: "#8 HEALTH",
    description: 'Ensure healthy lives and promote well-being for all at all ages',
    imageid: 'health',
    knowlink: 'https://sdgs.un.org/goals/goal3'
  },


]
const Boxes = () => {

  // new    -----------
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };



  const responsive = {
    largeDesktop: {
      // min 1024
      breakpoint: { max: 3000, min: 1250 },
      items: 3,
      slidesToSlide: 1,
    },
    mediumDesktop: {
      // 1150
      breakpoint: { max: 1250, min: 960 },
      items: 2,
      slidesToSlide: 1,
    },
    // tablet: {
    // 768
    //   breakpoint: { max: 1024, min: 960 },
    //   items: 2,
    //   slidesToSlide: 1,
    // },
    mobile: {
      breakpoint: { max: 960, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };




  return (
    <section className="allgoals">
      <h2 className="line-title">Our Goals</h2>
      <Carousel

        className="custom-carousel"
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        // autoPlay={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        customTransition="all 1s cubic-bezier(0.25, 0.8, 0.5, 1)"
        // customTransition="all 0.5 ease-in-out"
        // transitionDuration={500}
        transitionDuration={1000}
        containerClass="carousel-container"
        deviceType='superLargeDesktop'
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {itemsData.map((item) => (
          <div
            key={item.id}
            className={`goal ${activeItem === item.id ? 'active' : ''}`}
            id={item.imageid}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="goal-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="knoww">
                <a href={item.knowlink} className='know-more'>Know More</a></div>

            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Boxes;