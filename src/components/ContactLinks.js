import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import styled from 'styled-components';
import SvgEmail from '../images/SvgEmail';
import SvgInstagram from '../images/SvgInstagram';

const Icon = styled.i`
  text-align: center;
  fill:palevioletred;
  display:inline-block;
  background-color:transparent;
  width:20px;
  max-height:20px;
  float:left;
  background-size: cover;
  border-radius:5px;
  padding:1px 8px;
  margin:0;
  float: left;
  @media only screen
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    padding:0.5px 6px;
    border-radius:4px;
  }
  Svg{
      width:100%;
      path{
        fill:palevioletred;
      }
  }
`;
const Wrapper = styled.span`
  font-size: 12px;
  opacity:0.6;
  color: palevioletred;
  display:inline-block;
  background-color:transparent;
  margin:0;
  text-decoration:none;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
  cursor:pointer;
  :hover{
    opacity:1;
  }
  @media only screen
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font-size: 10px;
  }
`;
const Link = styled.a`
  font-size: 15px;
  color: palevioletred;
  display:inline-block;
  background-color:transparent;
  margin:0 5px;
  text-decoration:none;
  @media only screen
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font-size: 12px;
  }
`;

class ContactLinks extends Component {
    
    render() {
      return (
        <div>
            <Wrapper>
                <Icon><SvgEmail/></Icon>
                <Link href="mailto:akinara@live.com">akinara@live.com</Link>
            </Wrapper>&nbsp;&nbsp;
            <Wrapper>
                <Icon><SvgInstagram/></Icon>
                <Link target="_blank" href="https://instagram.com/thisniyi">instagram.com/thisniyi</Link>
            </Wrapper>
        </div>
      );
    }
  }
  
  export default ContactLinks;