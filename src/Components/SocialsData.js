import React from 'react';
import './socialsData.css';

function SocialsData() {

    const socialData = [
        {
            title: "Instagram",
            link: "https://instagram.com/",
            icon: require('../assets/instagram.png').default
        },
        {
            title: "Facebook",
            link: "https://facebook.com/",
            icon: require('../assets/facebook.png').default
        },
        {
            title: "Twitter",
            link: "https://twitter.com/",
            icon: require('../assets/twitter.png').default
        },
        {
            title: "Github",
            link: "https://github.com/adarsh01-debug/",
            icon: require('../assets/github.png').default
        },
        {
            title: "Linkedin",
            link: "https://linkedin.com",
            icon: require('../assets/linkedin.png').default
        },
    ]

    return (
        <div className="social__card">
            {
                socialData.map((value, key) => {
                    return (
                        <div className="social__title" key={key}>
                            <img src={value.icon} alt="" />
                            <a href={value.link} target="_blank" rel="noreferrer">{value.title}</a>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default SocialsData
