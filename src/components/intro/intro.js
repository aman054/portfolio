import React from 'react'
import './intro.css';
import bg from '../../assete/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assete/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'> Aman yadav</span> <br/>Web developer</span>
            <p className='introPara'> I am a skilled web developer with experience in creating <br/>
            visually appealing and user friendly Website.</p>
            <Link><button className='btn'> <img src={btnImg} alt='HireMe' className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro;