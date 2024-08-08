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

function Reduce_content(){
    return(
        <>
        <Title>Understanding the Principle of Reduce






</Title>
        <Paragraph>
        Reduce focuses on minimizing the amount of waste and resource consumption by making more conscious choices in how we use and dispose of products and resources. It involves:

Limiting Consumption: Buying only what is necessary and avoiding excess.
Efficient Use: Using resources like water and energy more efficiently to lower overall consumption.

        </Paragraph>
        
        </>
    );
} ;
export default Reduce_content;
