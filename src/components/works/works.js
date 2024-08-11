import React from "react";
import './works.css';
import Portfolo1 from '../../assete/portfolio-1.jpg';
import Portfolo2 from '../../assete/portfolio-2.jpg';
import Portfolo3 from '../../assete/portfolio-3.jpg';
import Portfolo4 from '../../assete/portfolio-4.jpg';

const Works =() =>{
    return (
        <section id ='works'>
            <h2 className="worksTitle"> My project</h2>
            <span className='worksDesc'> Explore my projects showcasing meticulously crafted websites that
             blend creativity with functionality. Each project reflects my
             dedication to delivering exceptional user experiences and innovative design solutions.</span>
            <p className="worksTitles">1- Dental Care website (Full Stack): 
              Developed a Dental care website, with the help of HTML, CSS, JavaScript, PHP, MySQL. <a href="https://dentalcare.lovestoblog.com"> Link</a></p>
            <p className="worksTitles">2- Grocery store website: Mini Market (Front End)
              Created a front-end website with dynamic effects. <a href="https://minimarket.lovestoblog.com"> Link</a></p>
            <h6 className="worksTitle">My certificate</h6>
             <div className="worksImgs">
                <img src={Portfolo1} alt="" className="worksImg"/>
                <img src={Portfolo2} alt="" className="worksImg"/>
                <img src={Portfolo3} alt="" className="worksImg"/>
                <img src={Portfolo4} alt="" className="worksImg"/>
               
             </div>
             
        </section>
    );
}
export default Works;