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


class Writing extends Component {
  render() {
    return (
      <div>
        <MainHeader>
          <MainTitle/>
        </MainHeader>
        <MainSection>
          <BlogCard>
            <SubTitle>WE SHOULD ALL BE AGNOSTIC</SubTitle>
            <ContactLinks/>
            <Paragraph>
              I grew up under the umbrella of two different religious backgrounds. My maternal family is methodist (christain) while Islam is the religoin of my paternal family. 
              Growing up, I prayed 5 times a day as a muslim, attend Sunday school programmes and celebrate chrismas with with my grandma.
              Growing up this way gave me a very unique privilege that no a lot of people have. I was unintentionally trained to learn the ability to hold two seemingly 
              contrasting ideas and views concurrently. There’s a quote from the famous american writer, F. Scott Fitzgerald, regarding opposing ideas and intelligence:
              “The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.”
              <br/><br/>He went on to cite, as an example, the ability to see that things are hopeless and yet be determined to make them otherwise. 
              That, I think is even more profound than the original statement. It means in the face of despair and sadness, we can still be optimistic about a 
              better future if we develop this ability.
              Agnosticism, according to wikipedia, is the view that the existence of God, of the divine or supernatural is unknown or unknowable.
              I never understood, and I still don’t understand how atheists and very religious people are so certain about their belief about the existence of God. 
              I still wonder why they can’t just get along with the idea that there’s a possibility of either. Our universe is a very complex and beautiful system such that, 
              it’s very hard to think it all came from random luck. Even if you disagree with the beauty and complexity of the universe, every object, good or bad, must be created, 
              in order to exist. At the same time, it’s almost impossible that of all the 4000+ religions in the world, only one is the truth and guarantees your ticket to the 
              utopia afterlife. 
              This is why I believe no one is right and we should all be agnostic. Being agnostic acknowledges our infallible nature as humans and allows us to listen properly 
              and understand other people’s ideas and views and frees us from the shackles of our cognitive biases.
              But we shouldn't just be agnostic about religion. We should also be agnostic about social, economic and political issues we are so certain of our convictions 
              but which have no rigorous, time tested scientific evidence to back up.
              I believe we will greatly reduce the self inflicted pains and sufferings in our world and evolve into better humans as we start to see the world through the 
              eyes of “the other”.
            </Paragraph>
            <br/>
            <a target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Hi, I think everyone should read this." data-via="aracreatives" data-related="aracreatives" data-show-count="false">Tweet</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </BlogCard>
        </MainSection>
      </div>
    );
  }
}

export default Writing;
