import React from "react";
import "./Programs.css";

import dumbell from "../../assets/dumbell.png";
import calories from "../../assets/calories.png";
import flame from "../../assets/flame.svg";
import heart from "../../assets/heart.png";
import RArrow from "../../assets/rightArrow.png";

const Programs = () =>{

    const Programs = [{
        img: dumbell,
        title: 'Strength Traning',
        description: 'In this program, you are trained to improve your strength through many exercises.'
    },
    {   
        img: calories,
        title: 'Strength Traning',
        description: 'In this program, you are trained to improve your strength through many exercises.'
    },
    {    
        img: flame,
        title: 'Strength Traning',
        description: 'In this program, you are trained to improve your strength through many exercises.'
    },
    {
        img: heart,
        title: 'Strength Traning',
        description: 'In this program, you are trained to improve your strength through many exercises.'
    },];

    return(
        <div>
            <div className="pHead">
                <h1>EXPLORE OUR <span className="Pprogram">PROGRAMS</span> TO SHAPE YOU</h1>
                <div className="Programs">
                    {
                        Programs.map((item, i) => {
                            return(
                                    <div className="Program">
                                        <div className="Pimg">
                                            <img alt="dumbell" className="pimg" src={item.img}/>
                                            <h4 style={{textAlign:"left", fontSize: 'larger', fontFamily: "'Mate SC', serif"}}>{item.title}</h4>
                                        </div>
    
                                        <p style={{ fontSize: 'large',fontFamily: "'Barlow Condensed', sans-serif"}}>{item.description}</p>
                                        <div className="joinFlex">
                                            <h4 className="checkOut">Check Out</h4>
                                            <div className="nextImg"><img src={RArrow}/></div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                    </div>
            </div>
        </div>
    )
}

export default Programs;