import React from "react";
import "./Home.css";
import img from "../../assets/logo.png";
import img2 from "../../assets/hero_image.png";
import {Slide} from 'react-awesome-reveal';
import flame from "../../assets/blackCurve.png";
import CountUp from 'react-countup';


const Home = () => {
    return(
        <div className="Home">
            <div className= "left">
                <div className="navBar">
                    <div className="logo">
                        <img className="img" src={img} alt="logo"/>                    
                    </div>
                    <div className="links">
                        <a>Home</a>
                        <a>Programs</a>
                        <a>Why us</a>
                        <a>Plans</a>
                        <a>Testimonials</a>
                    </div>
                </div>
                <div className="decorative">
                    <h5 className="headCreative"><span className="">WE ARE THE BEST</span> IN THE WORLD</h5>
                </div>
                <div className="bigHead">
                    <h1 className="shape">SHAPE</h1>
                    <h2 className="ShapeYourBody">YOUR IDLE BODY</h2>
                </div>
                <div className="counts">
                    <div className="count1"><CountUp className="numbers" start={0} useEasing duration={1} end={2} /><br /><span>+ Expert Coaches</span></div>
                    <div className="count1"><CountUp className="numbers" start={2} useEasing duration={7} end={3} /><br /><span>+ Members Joined</span></div>
                    <div className="count1"><CountUp className="numbers" start={20} useEasing duration={4} end={15} /><br /><span>+ Fitness Programs</span></div>
                </div>
                <div className="getStarted">
                    <div className="letStart"><h5>Get Started</h5></div>
                    <div className="letStart"><h5>Learn More</h5></div>
                </div>
            </div>
            <div className="right">
                <div className="nowNow">
                    <div className="joinNow"><p>Join Now</p></div>
                </div>
            </div>
            <div className="img2">
                    <img className="heroAhn" src={img2} alt="hero_ahn"/>
            </div>
            <div className="flame">
            <Slide direction="right"> 
                <img className="blackflame" src={flame} alt="blackflame"/>
                <img className="blackflame1" src={flame} alt="blackflame"/>
            </Slide> 
            </div>
            
        </div>
    )
}

export default Home;