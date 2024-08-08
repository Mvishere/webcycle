import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const Content = styled.div`
  position: absolute;
  right: 8%;
  width: 43%;
  height: max-content;
  display: flex;
  font-size: 0.625rem; /* 10px */
  border-radius: 0.3125rem; /* 5px */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem; /* 20px */
  box-sizing: border-box;
  background-color: white;

  @media (max-width:768px){

  height:max-content;
  width:80%;
  top:40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom:10%;

  }
`;

const Line = styled.div`
  z-index: 10;
`;

const MainContainer = styled.div`
  margin-top: 6.25rem; /* 100px */
  height:140vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding-top: 0%;

  .Line1 {
    height: 100%;
    width: 1.25rem; /* 20px */
    background-color: #102f15;
    position: absolute;
    left: 34%;
  }

  .Line2 {
    height: 100%;
    width: 2.5rem; /* 40px */
    background-color: #102f15;
    position: absolute;
    left: 40%;
    z-index: 0;
  }

  .Line3 {
    height: 13%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #102f15;
    color: white;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSlider = styled(Slider)`
  width: 95vh;
  height: 40vw;
  padding-top: 0%;
  position: absolute;
  left:7%;
  transform: rotate(90deg);
  transform-origin: center center;

  @media (max-width:768px){
  left:auto;
  top:-10rem;
  transform: rotate(0deg);
  width: 100vw; /* Full width on smaller screens */
    height: 60vw; /* Adjusted height for better proportion */
  }

  .slick-slide {
    height: 50rem; /* 800px */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    transition: transform 0.5s ease;
    
  }

  .slick-center {
    transform: scale(1.05);
    margin-top: -6.25rem; /* -100px */
  }

  .slick-dots {
    display: none;
    visibility: hidden;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit:cover;
  transform: rotate(-90deg);

  @media(max-width:768px){
    transform:rotate(0deg);
    }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14.0625rem; /* 225px */
  width: 11.875rem; /* 190px */
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  width: 11.875rem; /* 190px */
  height: 14.0625rem; /* 225px */
  position: relative;
  clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  background-color:green;
  border-color: green;
  border: solid;
`;

const Video = styled(motion.video)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  pointer-events: none;
  transform: rotate(-90deg);
  transform-origin: center center;
  @media(max-width:768px){
    transform:rotate(0deg);
    }
`;

const Title = styled.h2`
  margin-bottom: 1.25rem; /* 20px */
  font-size: 1.3rem;
  text-align: center;
  font-family: Poppins, sans-serif;
`;

const Paragraph = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 0.75rem;
  line-height: 1.8;
  margin-bottom: 0.9375rem; /* 15px */
  text-align: left;
`;

const useSliderSettings = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out',
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSettings({
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 1000,
          cssEase: 'ease-in-out',
        });
      } else {
        setSettings({
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 1000,
          cssEase: 'ease-in-out',
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial settings based on window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return settings;
};

function Renewable() {
  const sliderSettings = useSliderSettings();

  return (
    <MainContainer>
      <StyledSlider {...sliderSettings}>
        <Card>
          <ImageContainer>
            <Video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              autoPlay
              loop
              muted
            >
              <source src="./videos/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              autoPlay
              loop
              muted
            >
              <source src="/videos/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src="/Images/2578196.jpg" alt="Renewable Energy 1" />
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src="/Images/modern-nature-background-with-ecology-concept.png" alt="Renewable Energy 1" />
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src="/Images/renewable-energy-concept-illustration.png" alt="Renewable Energy 1" />
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src="/Images/WhatsApp Image 2024-08-06 at 10.44.05 AM.jpeg" alt="Renewable Energy 1" />
          </ImageContainer>
        </Card>
      </StyledSlider>
      <Content>
        <Title>Key Renewable Energy Sources for a Sustainable Future</Title>
        <Paragraph>
          Renewable energy sources like solar, wind, hydropower, geothermal, biomass, and ocean energy are vital for a sustainable future. Solar panels and wind turbines provide clean electricity, while hydropower and geothermal offer reliable, low-emission energy. Biomass converts organic waste into energy, and ocean energy captures tidal and wave power. These sources reduce emissions, enhance energy security, and promote global sustainability.
        </Paragraph>
      </Content>
    </MainContainer>
  );
}

export default Renewable;
