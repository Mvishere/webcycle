import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ThreeRContent from "../data/Recycle_content";
import ThreeRContent1 from "../data/Recycle_content1";
import ReduceContent from "../data/Reduce_content";
import ReuseContent from "../data/Reuse_content";
import RecycleContent from "../data/Recycle_content3";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1.875rem; /* 30px */
  background-color: #ebfadc;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;

    .Slider2 {
      margin-top: 2rem;
      width: 90% !important;
      height: 30% !important;
    }
    .Img {
      height: 50%;
    }
  }

  .Slider2 {
    padding:1rem;
    height: 50%;
    z-index: 2;
    border-radius: 2rem;
    background-color: white;
    width: 40%;
    .slick-dots {
      display: none;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .Img {
    width: 50% !important;
  }
`;

const SliderContainer = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center; /* Center align slider items */
    align-items: center; /* Center align vertically */
  }

  .slick-prev,
  .slick-next {
    display: none !important; /* Hide arrows */
  }

  .slick-dots {
    bottom: -10px; /* Adjust dots position if needed */
  }
`;


const fadeInBounce = {
  hidden: {
    opacity: 0,
    y: 3.125, /* 50px */
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

const staggeredEntrance = {
  hidden: {
    opacity: 0,
    y: 3.125 /* 50px */
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
};


const AnimatedImage = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  padding: 1rem; /* Reduced padding for better centering */

  img {
    max-width: 100%;
    height: auto;
    max-height: 100%; /* Ensure the image does not exceed the container's height */
    object-fit: contain; /* Maintain aspect ratio */
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-right: 0;
  }
`;


function Recycle() {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300, /* 500ms */
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, /* 4000ms */
    beforeChange: (current, next) => {
      if (slider1Ref.current && slider2Ref.current) {
        slider1Ref.current.slickGoTo(next);
        slider2Ref.current.slickGoTo(next);
      }
    },
    prevArrow: <div />, // Render an empty div for the previous arrow
    nextArrow: <div />  // Render an empty div for the next arrow
  };

  return (
    <MainContainer>
      <SliderContainer className="Img">
        <Slider {...settings} ref={slider1Ref}>
          <div>
            <motion.div variants={fadeInBounce} initial="hidden" animate="visible">
              <AnimatedImage>
                <img src="/Images/ThreeR.png" alt="Three R" />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={fadeInBounce} initial="hidden" animate="visible">
              <AnimatedImage>
                <img src="/Images/ThreeR1.png" alt="Three R 1" />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={fadeInBounce} initial="hidden" animate="visible">
              <AnimatedImage>
                <img src="/Images/Reduce.png" alt="Reduce" />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={fadeInBounce} initial="hidden" animate="visible">
              <AnimatedImage>
                <img src="/Images/Reuse.png" alt="Reuse" />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={fadeInBounce} initial="hidden" animate="visible">
              <AnimatedImage>
                <img src="/Images/Recycle.png" alt="Recycle" />
              </AnimatedImage>
            </motion.div>
          </div>
        </Slider>
      </SliderContainer>
      <SliderContainer className="Slider2">
        <Slider {...settings} ref={slider2Ref}>
          <div>
            <motion.div variants={staggeredEntrance} initial="hidden" animate="visible">
              <AnimatedImage>
                <ThreeRContent />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={staggeredEntrance} initial="hidden" animate="visible">
              <AnimatedImage>
                <ThreeRContent1 />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={staggeredEntrance} initial="hidden" animate="visible">
              <AnimatedImage>
                <ReduceContent />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={staggeredEntrance} initial="hidden" animate="visible">
              <AnimatedImage>
                <ReuseContent />
              </AnimatedImage>
            </motion.div>
          </div>
          <div>
            <motion.div variants={staggeredEntrance} initial="hidden" animate="visible">
              <AnimatedImage>
                <RecycleContent />
              </AnimatedImage>
            </motion.div>
          </div>
        </Slider>
      </SliderContainer>
    </MainContainer>
  );
}

export default Recycle;
