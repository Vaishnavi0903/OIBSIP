import React from "react";
import './intro.css'
import bg from '../../assets/myimg2.png'
import { Link } from "react-scroll";
import hireMe from '../../assets/hireme.png'

const Intro = () =>
{
    return (
        <section id="intro">
            <div className="introContent">
                 <span className="hello">Hello,</span>
                 <span className="introText">I'm <span className="introName">Vaishnavi</span><br/>
                 FullStack Developer
                 </span>
                 <p className="introPara">I am a skilled full stack developer with experience of creating <br/>amazing web designs.</p>
                 <Link><button className="btn"><img src={hireMe} alt="" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    );
}

export default Intro;