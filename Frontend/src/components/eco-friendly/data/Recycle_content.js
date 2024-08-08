import React from "react";
import styled from "styled-components";
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem; /* Adjust the size as needed */
  text-align: left; /* Center align the text */
  font-family: Poppins;
   @media(max-width:768px){
   font-size:1.2rem;
   }
`;

const Paragraph = styled.p`
  font-family: Poppins;
  font-size: 0.9rem; /* Adjust the size as needed */
  line-height: 1.8; /* Adjust line height for better readability */
  margin-bottom: 15px; /* Adjust margin as needed */
  text-align: left; /* Align text to the left or center as needed */
  @media(max-width:768px){
   font-size:0.7rem;
   }
`;

function ThreeR_content(){
    return(
        <>
        <Title>Understanding the 3Rs: Reduce, Reuse, Recycle</Title>
        <Paragraph>
        The 3Rs—Reduce, Reuse, and Recycle—are vital principles for promoting environmental sustainability. They focus on minimizing waste, conserving resources, and decreasing pollution. By integrating these practices into our daily routines, we contribute to a more sustainable future and help protect our planet for generations to come.
        </Paragraph>
        
        </>
    );
} ;
export default ThreeR_content;