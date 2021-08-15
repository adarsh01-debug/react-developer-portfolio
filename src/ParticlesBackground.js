import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './config/particles-config';
import './App.css';

export default function ParticlesBackground() {
    return (
        <Particles width="90%" height="90%" params={particlesConfig}></Particles>
    );
}