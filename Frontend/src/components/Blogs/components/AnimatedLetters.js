import React from 'react';
import styled from 'styled-components';

const TypewriterContainer = styled.div`
  overflow: hidden; /* Ensures the text is cut off */
  white-space: nowrap; /* Prevents text from wrapping */
  border-right: 0.15em solid orange; /* Cursor effect */
  animation: type 2s steps(40, end), blink-caret 0.75s step-end infinite;
  font-size: 2rem;
font-family:Poppins !important;;

  @keyframes type {
    from { width: 0; }
    to { width:13rem; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: orange; }
  }
`;

const TypewriterEffect = ({ text }) => {
  return <TypewriterContainer>{text}</TypewriterContainer>;
};

export default TypewriterEffect;
