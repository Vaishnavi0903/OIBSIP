import React from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'


const Contact=()=>
{
    return(
        <section id="contactPage">
            <div id="clients">
                 <h1 className="clientTitle">My Clients</h1>
                 <p className="clientDesc">I have had the opportunity to work with a diverse group of companies.Some of the notable 
                 companies I have worked with includes </p>
                 <div className="clientImgs">
                    <img src={Walmart} alt="ClientImg" className="clientImg"/>
                    <img src={Adobe} alt="ClientImg" className="clientImg"/>
                    <img src={Microsoft} alt="ClientImg" className="clientImg"/>
                    <img src={Facebook} alt="ClientImg" className="clientImg"/>
                 </div>
            </div>
            <div id="contact">
                 <h1 className="contactTitle">Contact Me</h1>
                 <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                 <form action="" className="contactForm">
                        <input type="text" className="name" placeholder="Your Name"/>
                        <input type="email" className="email" placeholder="Your Email"/>
                        <textarea name="message" rows="5" className="msg" placeholder="Your Message"/>
                        <button  type="submit" className="submitBtn" value="send">Submit</button>
                        <div className="links">
                              <img className="link" src={FacebookIcon} alt=""/>
                              <img className="link" src={TwitterIcon} alt=""/>
                              <img className="link" src={YouTubeIcon} alt=""/>
                              <img className="link" src={InstagramIcon} alt=""/>
                        </div>
                 </form>
            </div>
        </section>
    )
}

export default Contact