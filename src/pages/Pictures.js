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


class Pictures extends Component {
  render() {
    return (
      <div>
        <MainHeader>
          <MainTitle/>
        </MainHeader>
        <MainSection>
          <BlogCard>
            <SubTitle>PHOTOGRAPHY</SubTitle>
            <ContactLinks/>
            <Paragraph>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/man-thinking-deep-in-thoughts.jpg"/>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/man-smoking.jpg"/>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/DSCF1841.jpg"/>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/DSC00887.jpg"/>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/DSCF1161.jpg"/>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/DSCF1839.jpg"/>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/DSCF1880.jpg"/>
                <img width="100%" src="https://storage.googleapis.com/photographybyniyi/bike-riding.jpg"/>
            </Paragraph>
          </BlogCard>
        </MainSection>
      </div>
    );
  }
}

export default Pictures;
