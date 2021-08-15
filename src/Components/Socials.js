import React from 'react'
import ParticlesBackground from '../ParticlesBackground';
import SocialsData from './SocialsData';

function Socials() {
    return (
        <div className="socials">
            <div id="particles-js"> 
                <ParticlesBackground/>
            </div>
            <div>
                <SocialsData/>
            </div>
        </div>
    )
}

export default Socials
