import React, { useState } from "react";
import "./Testimonials.css";
import img1 from "../../assets/t-image1.png";
import img2 from "../../assets/t-image2.jpg";
import img3 from "../../assets/t-image3.jpg";

const Testimonials = () => {

    const info = [
        {
            img: img1,
            name: "JOHN KEVIN ",
            role: 'COACH',
            says: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint'
        },
        {
            img: img2,
            name: 'FRANKLIN ',
            role: 'CUSTOMER',
            says: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint'
        },
        {
            img: img3,
            name: 'MATHEW HENDRICKSON',
            role: 'ENTREPRENEUR', 
            says: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint'
        }
    ]

    return(
        <div className="Testimonials">
            <div className="topLayer">
                <div className="whatSaid">
                    <h3>Testimonials</h3>
                    <h1 style={{fontFamily: "'Cinzel', serif", fontSize: '50px'}}>WHAT THEY</h1>
                    <h1 style={{fontFamily: "'Rosario', sans-serif", marginLeft: '2%', marginTop: '-2%'}}>SAY ABOUT US</h1>
                    <p style={{fontFamily: "'Acme', sans-serif", marginLeft: '5%'}}>I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!</p>
                    <h3 style={{marginLeft: '2%'}}>{info[0].name} - {info[0].role}</h3>
                </div>
                <div className="testimonialsImgs">
                    <div className="border1"></div>
                    <div className="border2"></div>
                    <img src={info[0].img} width="400px"/>
                    {/* <div className="Increment">
                        <span>Left </span>
                        <span>Right</span>
                    </div> */}
                </div>
            </div>
            <div className="bottomLayer">
                <div className="ReadyInTestimonials"><p style={{fontFamily: "'Cinzel', serif", fontSize: '50px'}}>READY TO <span style={{fontFamily: "'Montserrat', sans-serif", fontSize: '40px'}}>LEVEL UP</span> YOUR BODY <span style={{fontFamily: "'Montserrat', sans-serif", fontSize: '40px'}}>WITH US?</span></p></div>
                <form className="inputTestimonials" onSubmit={(e) => {
                    e.preventDefault();
                    alert("Fake bro :_)")
                }}>
                    <div>
                        <input required placeholder="Enter Your Email Address" type="email"/>
                    </div>
                    <input className="SubmitTestimonials" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Testimonials;