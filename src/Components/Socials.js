import React from 'react'
import ParticlesBackground from '../ParticlesBackground';
import SocialsData from './SocialsData';
import SocialsForm from './SocialsForm';

function Socials() {
    return (
        <div className="socials">
            <div id="particles-js"> 
                <ParticlesBackground/>
            </div>
            <div>
                <SocialsData/>
            </div>
            <div className="social__form">
                <SocialsForm/>
            </div>
        </div>
    )
}

export default Socials
