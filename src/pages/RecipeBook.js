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


class RecipeBook extends Component {
  render() {
    return (
      <div>
        <MainHeader>
          <MainTitle/>
        </MainHeader>
        <MainSection>
          <BlogCard>
            <SubTitle>THE NIGERIAN MENU</SubTitle>
            <ContactLinks/>
            <Paragraph>
              <img width="100%" src="https://storage.googleapis.com/thisniyisiteresources/TheNigerianMenuTitle.jpg"/>
              <small style={{"opacity":.4,"fontSize":"10px"}}><a target="_blank" href="https://unsplash.com/@picoftasty">photography by @picoftasty</a></small>
            </Paragraph>
            <Paragraph style={{"padding":"0 50px 50px 50px"}}>
              As a Nigerian and someone who loves to try and expirement with flavors from around the world, I haven't being able to find any cohesive 
              material that properly documents the various delicious dishes from Nigeria. That's why I'm working on this recipe book.<br/> 
              I'm looking for contributors. If you're interested please feel free to reach out to
              me and let's share ideas!
            </Paragraph>
            <HyperLink target="_blank" href="mailto:akinara@live.com">EMAIL ME</HyperLink>
            <br/>
            <a target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Hi, I think everyone should read this." data-via="aracreatives" data-related="aracreatives" data-show-count="false">Tweet</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </BlogCard>
        </MainSection>
      </div>
    );
  }
}
export default RecipeBook;
