import styled from 'styled-components'
import pulp from '../images/pulp.png';
const MainHeader = styled.div`
    background-color:#282c34; 
    background-image: linear-gradient(#5a152cb3,#30cf9500),url(${pulp});
    background-size: cover;
    height:280px;
    padding:5%;
    text-align: center;
    width:90%;
`;

export default MainHeader