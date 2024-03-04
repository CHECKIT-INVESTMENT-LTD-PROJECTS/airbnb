import React from 'react';

import star from "../images/Star 1.png"

function Card(prop) {
    const props =prop.card
    let badgeText

    if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    return (
        <div>

            <div className="Card--div">
                {/*{props.openSpots > 0 ? <div className="card--badge">{props.openSpots}</div> :*/}
                {/*    <div className="card--badge-sold-out">SOLD OUT</div>}*/}

                {badgeText && <div className="card--badge">{badgeText}</div>}

                <img src={`./images/${props.coverImg}`} className="Card--image" alt={props.title}/>
            </div>
            <p className="Card-p"><img src={star} alt="Star" className="Card-p--1"/>
                <span className="Card-p--2">{props.stats.rating}</span><span
                    className="Card-p--3"> ({props.stats.reviewCount}) {props.location}</span>
            </p>
            <p className="Card-p1">{props.title}</p>
            <p className="Card-p2"><span className="Card-p2-span">From ${props.price}</span> / person</p>


        </div>
    )
}

export default Card;