import styled from 'styled-components'

const BlogCard = styled.div`
  background-color: #fff;
  border-radius:50px;
  color:#fff;
  padding:20px 80px 80px 80px;
  width:630px;
  -webkit-box-shadow: 10px 10px 75px -14px rgba(0,0,0,0.15);
  -moz-box-shadow: 10px 10px 75px -14px rgba(0,0,0,0.15);
  box-shadow: 10px 10px 75px -14px rgba(0,0,0,0.15);
  @media only screen
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width:80%;
    padding:5%;
    border-radius:20px;
  }
`;

export default BlogCard