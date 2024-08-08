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

function Recycle_content(){
    return(
        <>
        <Title>
        Understanding Recycling: Converting Waste into Resources







</Title>
        <Paragraph>
        Recycle is the process of converting waste into new, usable products. This involves:

Collection: Gathering recyclable materials.
Sorting: Separating materials by type and removing contaminants.
Processing: Breaking down materials into raw forms.
Manufacturing: Creating new products from these raw materials.
Recycling conserves natural resources, reduces pollution, and minimizes landfill waste.






</Paragraph>
        
        </>
    );
} ;
export default Recycle_content;
