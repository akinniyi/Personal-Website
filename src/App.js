import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './pages/About';
import styled from 'styled-components';
import RecipeBook from './pages/RecipeBook';
import Writing from './pages/Writing';
import Pictures from './pages/Pictures';

const Nav = styled.nav`
  position:fixed;
  left:0;
  top:0;
  height:100%;
  overflow: scroll;
  width:100vw;
  background-color:#fff;
  z-index:10;
`;
const Ul = styled.ul`
  list-style-type: none;
  padding:0;
`;
const List = styled.li`
  @media only screen
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font-size: 10px;
  }
  .link{
    padding:50px 20px;
    text-decoration:none;
    display: inline-block;
    text-transform:uppercase;
    font-weight:800;
    font-size: 45px;
    color:#57616E;
    :active,:visited{
        opacity:0.7;

    }
  }
`;
const VerticalMenu = styled.span`
  top:50%;
  left:10px;
  transform: translate(-50%,-0%);
  position:fixed;
  cursor:pointer;
  :after{
    position: absolute;
    content:"MENU";
    padding:12px;
    font-size: 14px;
    display:inline-block;
    word-break: break-all;
    text-align:center;
    width:14px;
    line-height:1.9em;
    background-color:#fff;
    color:#57616E;
    border-radius:20px;
  }
`;
const FloatingActionMenu = styled.span`
  bottom:20px;
  left:20px;
  position:fixed;
  cursor:pointer;
  color:#0600ff;
  background-color:#fff;
  padding:20px;
  border-radius:100px;
  -webkit-box-shadow: 21px 20px 83px -11px rgba(82,82,82,0.95);
  -moz-box-shadow: 21px 20px 83px -11px rgba(82,82,82,0.95);
  box-shadow: 21px 20px 83px -11px rgba(82,82,82,0.95);
`;
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        showNav:false,
    }
  }
  showNavigation = () => {
      let showNav = this.state.showNav;
      this.setState({showNav:!showNav});
  }
  render() {
    return (
      <div className="App">
        <Router>
        {this.state.showNav &&
          <Nav>
            <Ul>
              <List>
                  <small>I am...</small>
                </List>
                <List>
                  <Link onClick={(e)=>this.setState({showNav:false})} className="link" to="/Writing/">Writing</Link>
                </List>
                <List>
                    <Link onClick={(e)=>this.setState({showNav:false})} className="link" to="/RecipeBook/">Making a RecipeBook</Link>
                </List>
                <List>
                    <Link onClick={(e)=>this.setState({showNav:false})} className="link" to="/Pictures/">Taking Pictures</Link>
                </List>
                <List>
                    <Link onClick={(e)=>this.setState({showNav:false})} className="link" to="/">Describing Myself</Link>
                </List>
                <List>
                    <span onClick={(e)=>this.setState({showNav:false})} className="link">Close</span>
                </List>
            </Ul>
          </Nav>
        } 
          <MediaQuery query="(min-width: 992px)">
            <VerticalMenu onClick={this.showNavigation} />
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)">
            <FloatingActionMenu className={"fa fa-bars"} onClick={this.showNavigation} />
          </MediaQuery>
          <Route path="/Pictures/" exact component={Pictures} />
          <Route path="/Writing/" exact component={Writing} />
          <Route path="/RecipeBook/" exact component={RecipeBook} />
          <Route path="/" exact component={About}/>
          
        </Router>
      </div>
    );
  }
}
export default App;
