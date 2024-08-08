// CustomArrows.js
import React from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  &:hover {
    color: white; // Ensure the color remains white on hover
    background-color: rgba(0, 0, 0, 0.5); // Ensure the background color remains the same on hover
  }
`;

const CustomArrow = ({ className, style, onClick, icon }) => (
  <Arrow className={className} style={{ ...style }} onClick={onClick}>
    {icon}
  </Arrow>
);

export const PrevArrow = (props) => <CustomArrow {...props} icon="❮" style={{ left: '-50px' }} />;
export const NextArrow = (props) => <CustomArrow {...props} icon="❯" style={{ right: '-50px' }} />;
