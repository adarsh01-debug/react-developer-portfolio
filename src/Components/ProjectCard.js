import React from 'react';
import './projectCard.css';
import LinkIcon from '@material-ui/icons/Link';

function ProjectCard() {

    const projectsData = [
        {
            title: "React Messenger App",
            description: "Realtime Chat Application",
            link: "https://github.com/adarsh01-debug/react-messenger-app",
            icon: require('../assets/react.png').default
        },
        {
            title: "Covid-19 Tracker",
            description: "Data Visualiser for Covid-19 trends",
            link: "https://github.com/adarsh01-debug/react-covid-19-tracker",
            icon: require('../assets/covid.png').default
        },
        {
            title: "Nerd Bot",
            description: "Telegram bot made using python libraries",
            link: "https://github.com/adarsh01-debug/NerdBot",
            icon: require('../assets/bot.png').default
        },
        {
            title: "React Movie Finder",
            description: "Find all about your favorite movie",
            link: "https://github.com/adarsh01-debug/react-movie-finder",
            icon: require('../assets/movie.png').default
        },
    ]

    return (
        <div className="card">
            {
                projectsData.map((value, key) => {
                    return (
                        <div className="card__body" key={key}>
                            <div className="card__title">
                                <img src={value.icon} alt="" />
                                <p>{value.title}</p>
                            </div>

                            <div className="card__desc">
                                <p>{value.description}</p>
                            </div>

                            <div className="card__source">
                                <a href={value.link} target="_blank" rel="noreferrer">View Source</a>
                                <LinkIcon/>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ProjectCard
