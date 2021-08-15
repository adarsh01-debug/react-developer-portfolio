import React from 'react';
import ParticlesBackground from '../ParticlesBackground';
import '../App.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';

function Resume() {
    return (
        <div className="resume">
            <div id="particles-js"> 
                <ParticlesBackground/>
            </div>
            <div className="resume__container">
                <div className="resume__title">
                    <h3>résumé - adarshpandey</h3>
                </div>
                <div className="preview">
                    <a href={require('../assets/Resume.pdf').default} target="_blank" rel="noreferrer"><h4><VisibilityIcon/> preview</h4></a>
                </div>
                <div className="download">
                    <a href={require('../assets/Resume.pdf').default} download><h4><GetAppIcon/> download</h4></a>
                </div>
            </div>
        </div>
    )
}

export default Resume
