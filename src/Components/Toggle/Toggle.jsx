import './Toggle.css';
import { themeContext } from '../../context';
import {useContext} from 'react';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
function Toggle(){
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  const handleClick=()=>{
    theme.dispatch({type:'toggle'})
  }
  return(
        <div id='Toggle' onClick={handleClick}>
             <Sun />
             <Moon />
             <div id='tbutt' 
             style={darkMode?{left:'7px'}:{right:'7px'}}> 
             </div>
        </div>
    )
}
export default Toggle;