import React from 'react';
import '../App.css';
import ParticlesBackground from '../ParticlesBackground';
import Typewriter from 'typewriter-effect';

function Blogs() {
    return (
        <div className="blogs">
            <div id="particles-js"> 
                <ParticlesBackground/>
            </div>
            <h2>
                <Typewriter options={{loop: true}} onInit={(typerwriter) =>{
                    typerwriter
                    .typeString("blogs comming soon!")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("see you later!")
                    .pauseFor(3000)
                    .deleteAll()
                    .start();
                    }}/>
            </h2>
        </div>
    )
}

export default Blogs
