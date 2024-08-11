import React from 'react'
import './skills.css';
import UIDesign from '../../assete/ui-design.png';
import WebDesign from '../../assete/web-design.png';
import graphicDesign from '../../assete/graphic-design.png';

const Skills = () => { 
  return (
    <section id='skills'>
        <span className='skillsTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in visually 
        appealing and user friendly Website. I have a strong understanding of design and a keen eye for detail.
        I an proficient in HTML, CSS, JavaScript, Php, MySQL, Wordpress and Graphic desisn as well as design software such as adobe photoshop and Figma. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src= {UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I blend artistry with user-centricity to create seamless, intuitive digital experiences.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Transforming ideas into visually captivating and user-friendly websites. here, designs
                         are crafted to leave a lasting impression and drive engagement.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={graphicDesign} alt='GraphicDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Graphic Design</h2>
                    <p>From eye-catching logos to stunning visuals. here, graphic designs brings your brand 
                        to life with creativity and attention to detail.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;