import React from "react";
import './contact.css';
import HtmCssJs from '../../assete/webdev-icon.png';
import ReactImg from '../../assete/react.png';
import MySql from '../../assete/mysql.png';
import Java from '../../assete/java (1).png';
import GmailIcon from '../../assete/mail-icon.png';
import LinkdinIcon from '../../assete/linkdin-icon.png';
import PhoneIcon from '../../assete/phone-icon.png';
import Naukari from '../../assete/naukari.com-icon.png';
import Github from '../../assete/github-icon.png';
 const Contact = () => {
    return(
       <section id="contactPage">
        <div id="clients">
       <h1 className="contactPageTitle"> My Skills</h1>
       <p className="clientDesc">
       Web developer proficient in HTML, CSS, JavaScript, React, MySql, Php, Wordpress
       and also a good hand in Java programming language. and data structure and algorithm. Skilled in creating dynamic and 
       responsive web applications, with a strong foundation in front-end and back-end development.
        </p>
       <div className="clientImgs">
       <img src={HtmCssJs} alt="Client" className="clientImg"/>
       <img src={ReactImg} alt="Client" className="clientImg"/>
       <img src={MySql} alt="Client" className="clientImg"/>
       <img src={Java} alt="Client" className="clientImg"/>
       </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunity.</span>

          <form className='contactForm' >
            <input type='text' className='name' placeholder='Your Name' name='your_name' />
            <input type='email' className='email' placeholder='Your Email' name='your_email' />
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'/>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className='links'>
              <img src={GmailIcon} alt='Gmail' className='link'/>
              <img src={LinkdinIcon} alt='Linkdin' className='link'/>
              <img src={PhoneIcon} alt='Phone' className='link'/>
              <img src={Naukari} alt='Naukari' className='link'/>
              <img src={Github} alt='Github' className='link'/>
            </div>
          </form>
        </div>
        
         </section>
    );
        
    
 }
 export default Contact;