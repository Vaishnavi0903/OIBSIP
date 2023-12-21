import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () =>
{
    return (
       <section id="skills">
             <span className="skillTitle">What I Do</span>
             <span className="skillDesc">I am a skilled and passionate developer knowing programming languages like HTML,CSS,JavaScript,C++,Python,Java and 
             having good knowledge of ReactJs and ReactNative.Also I have intrest in Machine Learning.tyudhcubv cvbhjs vbhdsgci hcgbj
             hcdkx bhcjxd bhcdxl bhfcdxkm yui </span>
             <div className="skillBars">
                  <div className="skillBar">
                    <img className="skillBarImg" src={UIDesign} alt=""/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text</p>
                    </div>
                  </div>
                  <div className="skillBar">
                    <img className="skillBarImg" src={WebDesign} alt=""/>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>This is a demo text</p>
                    </div>
                  </div>
                  <div className="skillBar">
                    <img className="skillBarImg" src={AppDesign} alt=""/>
                    <div className="skillBarText">
                        <h2>Application Design</h2>
                        <p>This is a demo text</p>
                    </div>
                  </div>
             </div>
       </section>
    );
}

export default Skills;