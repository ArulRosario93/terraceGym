import React from "react";
import img2 from "../../assets/image2.png"
import tick from "../../assets/tick.png";
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";

import "./Reasons.css";

const Reasons = () => {

    const lists = [
        {
            what: 'OVER 140+ EXPERT COACHS'
        },{
            what: 'TRAIN SMARTER AND FASTER THAN BEFORE'
        },{
            what: '1 FREE PROGRAM FOR NEW MEMBER'
        },{
            what: 'RELIABLE PARTNERS'
        }
    ]

    return(
        <div className="Reasons">
            <div className="left-r">
                <div className="rightMain">
                    <img className="picRIght" src={img2}/>
                </div>
            </div>
            <div className="someReasons">
                <h5 className="callitHead">Some Reasons</h5>
                <h4>WHY CHOOSE US?</h4>
                {
                    lists.map((item, i) => {
                        return(
                            <div className="callitWhy" key={i}>
                                <div className="tick">
                                    <img src={tick} alt="tick"/>
                                </div>
                                <h3>{item.what}</h3>
                            </div>
                        )
                    })
                }
                <div className="partners">
                    <h4>Our Partners</h4>
                    <div className="logos">
                        <img src={nb} alt="adidas"/>
                        <img src={nike} alt="nike"/>
                        <img src={adidas} alt="nb"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons;