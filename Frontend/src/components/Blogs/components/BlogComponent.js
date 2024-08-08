import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(motion.a)`
font-family:Poppins !important;
  background-color: #ebfadc;
  width: 80%;
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: black;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color:rgba(219, 245, 193);
    transition: all 0.3s ease;
    -webkit-box-shadow: 0 0 10px #fff;
        box-shadow: 0 0 10px #fff;
  }
 
   @media (max-width: 700px) {
      width:90%;

  }
       @media(max-width: 1000){
    width:30%;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center center;
  border: 0.1px white solid;
  border-radius: 0.2rem;
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Image img={imgSrc} />
        <Title>{name}</Title>

        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
