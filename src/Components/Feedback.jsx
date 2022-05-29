import React, {useRef} from 'react';
import {useState} from 'react';
import image from './image.png';
import './Feedback.css';
import emailjs from '@emailjs/browser';
function Feedback(){
    const form=useRef();
    const [done,setDone]=useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z1e1wje', 'template_98vhzeo', form.current, 'EN_emD3-8M9JtwnZv')
          .then((result) => {
              console.log(result.text);
            setDone(true);
            }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div id='m'>
            <div id='lefti'>
             <img src={image} alt=""/>
            </div>
            <div id='righti'>
                <div><h3>Share Your Feedback</h3></div>
                <p>We would love to hear your thoughts or feedback on how we can improve your<br></br> experience using
                creat</p>
                <form ref={form} onSubmit={sendEmail}>
                <div id='inp'>
                 <input type="text" name='user_name' className='full' placeholder='Your Full Name' />
                <input type="email" name="user_email" className='full' placeholder='Your Email Address' />
                <label for="subjects">Select a Subject</label>
                <select name="Subject" id="subjects">
                  <option value="physics">Physics</option>
                  <option value="maths">Maths</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="english">English</option> 
                </select>
                <textarea className='user' name="feedback" rows="4" cols="50">
                   Feedback
                </textarea>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                   If available, please include the creat url that demonstrates the comment or bug you are reporting
                </textarea>
                 <input  type="submit" value="Send Message" className="button" />
                  <span>{done&&<div>Thanks for Contacting Me!</div>}</span>
                 </div>
                </form>
            </div>
        </div>
    )
}
export default Feedback;