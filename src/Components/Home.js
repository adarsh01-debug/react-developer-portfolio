import React from 'react';
import '../App.css';
import Typewriter from 'typewriter-effect';
import ParticlesBackground from '../ParticlesBackground';

function Home() {
    return (
        <div className="home">
            <div id="particles-js"> 
                <ParticlesBackground/>
            </div>
            <div className="intro">
                <h1>your friendly neighborhood</h1>
                <h1 style={{color: "#4F46E5"}}>
                    <Typewriter options={{loop: true}} onInit={(typerwriter) =>{
                        typerwriter
                        .typeString("developer")
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("engineer")
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("programmer")
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("encoder")
                        .pauseFor(3000)
                        .deleteAll()
                        .start();
                    }}/>
                </h1>
            </div>
            <div className="about">
                <p>i am a web developer / software engineer (wannabe). i blog tech, and have keen interest in space and cosmos (gonna write about it too someday). my personality tags can be justified with words like <span>cinephile</span>, <span>binge-watcher</span>, <span>bad cook</span>, on some days <span>bibliophile</span> and on other days <span>lazy programmer</span>.</p>
            </div>
        </div>
    )
}

export default Home
