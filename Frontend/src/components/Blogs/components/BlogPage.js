// BlogPage.js
import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TypewriterEffect from './AnimatedLetters';
import { Books } from '../data/Books';
import BookComponent from './BookComponent';
import { PrevArrow, NextArrow } from './../subComponents/CustomArrows'; // Import the custom arrows
import Map from "./Map.js"
const MainContainer = styled(motion.div)`
  background-color: white;
  font-family:Poppins !important;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 4rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Heading = styled(motion.div)`
  padding-left: 2rem;
  padding-top: 2rem;
  font-size: 4rem;
  font-family: 'Times New Roman', serif;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

const SliderContainer = styled(Slider)`
  width: 75%;
  margin: 0 auto;
  padding: 0 50px; // Ensure space for arrows
`;

const Line=styled.div`
height:1px;
width:10%;
background-color:black;
margin-left:1rem;
margin-right:1rem;


`

const EbookContainer = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.25,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, transform: 'translateY(50px)' },
  show: { opacity: 1, transform: 'translateY(0)' },
};

const BlogPage = () => {
  const [isEbooksVisible, setIsEbooksVisible] = useState(false);
  const [isEbooksSliderVisible, setIsEbooksSliderVisible] = useState(false);
  const [hasEbooksTextRendered, setHasEbooksTextRendered] = useState(false);
  const ebooksRef = useRef(null);

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }), []);

  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const checkVisibility = useCallback(() => {
    if (ebooksRef.current) {
      const rect = ebooksRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsEbooksVisible(isInView);
      if (isInView) {
        setIsEbooksSliderVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = debounce(checkVisibility, 100);
    window.addEventListener('scroll', handleScroll);
    checkVisibility();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [checkVisibility, debounce]);

  return (
    <MainContainer
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <Container>
        <Center>
          <Heading
            variants={headingVariants}
            initial="hidden"
            animate="show"
          >
            <TypewriterEffect text="Eco Insights.." />
          </Heading>
        </Center>
      </Container>

      <Container>
        <Center>
          <SliderContainer {...settings}>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </SliderContainer>
        </Center>
      </Container>

      <Container ref={ebooksRef}>
        <Center>
          <Heading
            variants={headingVariants}
            initial="hidden"
            animate={isEbooksVisible ? 'show' : 'hidden'}
          >
            {isEbooksVisible && !hasEbooksTextRendered && (
              <TypewriterEffect text="Eco-Books.." onComplete={() => setHasEbooksTextRendered(true)} />
            )}
            
          </Heading>
        </Center>
      </Container>

      <Container>
        <Center>
          {isEbooksSliderVisible && (
            <EbookContainer variants={containerVariants} initial="hidden" animate="show">
              <SliderContainer {...settings}>
                {Books.map((book) => (
                  <BookComponent key={book.id} book={book} />
                ))}
              </SliderContainer>
            </EbookContainer>
          )}
        </Center>
      </Container>
      <Map/>
    </MainContainer>
  );
};

export default BlogPage;
