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

function Reuse_content(){
    return(
        <>
        <Title>Exploring the Principle of Reuse








</Title>
        <Paragraph>
        
Reuse involves finding new ways to use items rather than discarding them after a single use. It emphasizes extending the lifecycle of products and materials through various practices:

Repurposing: Transforming items for new uses or creative projects, like turning old jars into storage containers.
Repairing: Fixing damaged items instead of throwing them away, such as mending clothes or fixing appliances.

         </Paragraph>
        
        </>
    );
} ;
export default Reuse_content;
