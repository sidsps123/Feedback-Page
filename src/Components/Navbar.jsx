import React from 'react';
import './Navbar.css';
import creat from './creat.png';
import Toggle from './Toggle/Toggle.jsx';
import Search from './search.png';
function Navbar(){
    return(
        <div id='ma'>
         <div id='top'>
             <div id='left'>
             <ul>
             <img src={creat} alt='' />
               <li>
                   <select name="Home" id="home">
                  <option value="home">Home</option>
                  <option>Option1</option>
                  </select>
                </li>
                <li>
                   <select name="Explore" id="explore">
                  <option value="explore">Explore</option>
                  <option>Option1</option>
                  </select>
                </li>
                <li>
                   <select name="Activity" id="activity">
                  <option value="activity">Activity</option>
                  <option>Option1</option>
                  </select>
                </li>
                <li>
                   <select name="Community" id="Community">
                  <option value="community">Community</option>
                  <option>Option1</option>
                  </select>
                </li>
                <li>
                   <select name="Pages" id="pages">
                  <option value="pages">Pages</option>
                  <option>Option1</option>
                  </select>
                </li>
                <li>
                   <select name="Contact" id="contact">
                  <option value="contact">Contact</option>
                  <option>Option1</option>
                  </select>
                </li>
           </ul>
             </div>
             <div id='right'>
               <div><img src={Search}/></div>
                <div id='w'>Wallet Connect</div>
                <div><Toggle /></div>
             </div>
         </div>
        </div>
    )
}
export default Navbar;