import React from 'react';
import '../App.css';
import ParticlesBackground from '../ParticlesBackground';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className="projects">
            <div id="particles-js"> 
                <ParticlesBackground/>
            </div>
            <div>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Projects
