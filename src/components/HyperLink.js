import styled from 'styled-components'

const HyperLink = styled.a`
  display:inline-block;
  background-color:#0600ff;
  color:#fff;
  padding:12px 40px;
  border-radius:10px;
  border:none;
  font-weight:600;
  font-family:Roboto;
  letter-spacing:1.2px;
  cursor:pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
  text-decoration:none;
  :hover{
    -webkit-box-shadow: 13px 10px 27px -16px rgba(97,97,97,1);
    -moz-box-shadow: 13px 10px 27px -16px rgba(97,97,97,1);
    box-shadow: 13px 10px 27px -16px rgba(97,97,97,1);
  }
`;

export default HyperLink