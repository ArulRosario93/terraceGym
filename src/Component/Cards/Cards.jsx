import React from "react";
import './Cards.css';
import tick from "../../assets/tick.png";

const Cards = () => {

    const lists = [
        {
            price: '$ 25',
            plan: 'BASIC PLAN'
        },
        {
            price: '$ 30',
            plan: 'PREMIUM PLAN'
        },
        {
            price: '$ 45',
            plan: 'PRO PLAN'
        }
    ];

    const plan1 = [{
        plan: '2 hours of excercises'
    },{
        plan: 'Free consultaion to coaches'
    },{
        plan: 'Access to The Community'
    }]

    const plan2 = [{
        plan: '5 hour of excercises'
    },{
        plan: 'Free consultaion to coaches'
    },{
        plan: 'Access to minibar'
    }]

    const plan3 = [{
        plan: '8 hours of excercises'
    },{
        plan: 'Consultation of Private Coach'
    },{
        plan: 'Free Fitness Merchandises'
    }]
 
    return(
        <div className="Cards">
            <h2>READY TO START YOUR JOURNEY NOW WITH US</h2>
            <div className="letGo">
                    {
                        lists.map((items, i) => {
                            return(
                                <div className="Card">
                                    <div className="topLeft"><img /></div>
                                    <h3>{items.plan}</h3>
                                    <h1>{items.price}</h1>
                                    {
                                        plan1.map((item,i) => {
                                            return(
                                                <div className="flexy">
                                                    <div className="imgOfTick">
                                                        <img src={tick} alt="tick"/>
                                                    </div>
                                                    <h4>{item.plan}</h4>
                                                </div>
                                            )
                                        })
                                    }
                                    <h5>See more benefits</h5><br />
                                    <div className="btn"><b>Join Now</b></div>
                                </div>
                            )})    
                    }

            </div>
        </div>
    )
}

export default Cards;