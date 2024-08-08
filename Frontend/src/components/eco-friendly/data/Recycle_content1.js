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

function ThreeR_content1(){
    return(
        <>
        <Title>The 3 R's: A Framework for Sustainable Living</Title>
        <Paragraph>
        The 3 R's are a framework for environmental stewardship aimed at minimizing waste and conserving resources. They emphasize making conscious choices to lessen our environmental impact, promote sustainability, and reduce the strain on natural resources. 
        </Paragraph>
        
        </>
    );
} ;
export default ThreeR_content1;