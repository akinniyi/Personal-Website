import styled from 'styled-components'

const MainTitle = styled.h1`
  color: #fff;  
  font-size: 2.5em;
  font-weight:100;
  margin:0;
  text-align: center;
  @media only screen
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font-size: 1.5em;
  }
`;

export default MainTitle