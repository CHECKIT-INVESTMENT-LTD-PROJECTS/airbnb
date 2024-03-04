import React from 'react';
import HeroLogo from '../images/Group 77.png'
function Hero(){
    return (
        <div>
            <div className="Hero--div">
                <img src={HeroLogo} className="Hero--image" alt="Hero map"/>
            </div>

            <h1 className="Hero--h1">Online Experiences</h1>
            <p className="Hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero;