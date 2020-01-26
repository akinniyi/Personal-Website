import React, { Component } from 'react';
import Paragraph from '../components/Paragraph';
import BlogCard from '../components/BlogCard/BlogCard';
import MainTitle from '../components/MainTitle';
import MainHeader from '../components/MainHeader';
import SubTitle from '../components/SubTitle';
import MainSection from '../components/MainSection';
import ContactLinks from '../components/ContactLinks';
import HyperLink from '../components/HyperLink';
import Hr from '../components/Hr';


class About extends Component {
  render() {
    return (
      <div>
        <MainHeader>
          <MainTitle/>
        </MainHeader>
        <MainSection>
          <BlogCard>
            <SubTitle>ABOUT ME</SubTitle>
            <ContactLinks/>
            <Paragraph>
            Software developer for an amazing Brooklyn based company helping people move around. I'm also a budding photographer. I enjoy working with, learning from and hanging around beautiful, kind and fantastic friends. 
            They have and continue to improve my life. For this, I'm very grateful to the people that have and continue to support me.<br/>
            If you like this website and would like to inspect, copy or review my code, please checkout (pun intended😉) the source on github.
            </Paragraph>
            <HyperLink target="_blank" href="https://github.com/akinniyi/akinniyi.com.git">VIEW SOURCE ON GITHUB</HyperLink>
          </BlogCard>
        </MainSection>
      </div>
    );
  }
}

export default About;
