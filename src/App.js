import React from 'react';
import Navbar from './Components/Navbar';
import Feedback from './Components/Feedback';
import Nav from './Components/Nav';
import './App.css';
import { themeContext } from './context.js';
import {useContext} from 'react';
function App(){
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;  
  return(
      <div id='mai' style={{
        background:darkMode?'black':'white',
        color:darkMode?'white':'black'
    }}>
        <div id='nm'>
        <Navbar />
        <Navbar />
        <Nav />
        </div>
        <Feedback />
      </div>
    )
}
export default App;