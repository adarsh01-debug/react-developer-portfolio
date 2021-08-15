import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';

export const SidebarData = [
    {
        title: "home",
        icon: <HomeIcon/>,
        link: "/",
    },
    {
        title: "projects",
        icon: <DashboardIcon/>,
        link: "/projects",
    },
    {
        title: "socials",
        icon: <MailIcon/>,
        link: "/socials",
    },
    {
        title: "résumé",
        icon: <DescriptionIcon/>,
        link: "/resume",
    },
    {
        title: "blogs",
        icon: <BookIcon/>,
        link: "/blogs",
    },
]

