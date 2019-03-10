import React, { Component } from 'react';
import './App.css';
import Paragraph from './components/Paragraph';
import BlogCard from './components/BlogCard/BlogCard';
import MainTitle from './components/MainTitle';
import MainHeader from './components/MainHeader';
import SubTitle from './components/SubTitle';
import MainSection from './components/MainSection';
import ContactLinks from './components/ContactLinks';
import Hr from './components/Hr';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader>
          <MainTitle>"Say ‘what’ again, I dare you, I double dare you 
           motherfucker, say what one more Goddamn time!"
          </MainTitle>
        </MainHeader>
        <MainSection>
          <BlogCard>
            <SubTitle style={{"paddingBottom":"20px"}}>HI, I'M NIYI - A SUCKER FOR TARANTINO MOVIES</SubTitle>
            <ContactLinks/>
            
            <Paragraph style={{"padding":"50px"}}><Hr/>
              I also design interfaces, write enterprise level websites 
              and take pictures for fun.
            </Paragraph>
            <Button>VIEW SOURCE ON GITHUB</Button>
          </BlogCard>
        </MainSection>
      </div>
    );
  }
}

export default App;
