import React, { useState } from "react";
import "../App.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListIcon from "@material-ui/icons/List";
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="Sidebar">
      <div className="Sidebar__Header">
        <div className="my__image">
          <img src={require("../assets/Photo.gif").default} alt="" />
        </div>

        <div className="my__title">
          <h4>adarsh pandey</h4>
          <p>web developer / software engineer</p>
        </div>

        <div className="menu__list" onClick={showSidebar}>
          <ListIcon />
        </div>
      </div>
      <ul className={ sidebar ? "SidebarList" : "SidebarList__toggle"}>
        <NavLink to="/" className="row link__router" exact activeClassName="active">
            <div id="icon"><HomeIcon/></div>
            <div id="title">home</div>
            <div id="right-arrow">
              <ChevronRightIcon />
            </div>
        </NavLink>
        <NavLink to="/projects" className="row link__router" exact activeClassName="active">
              <div id="icon"><DashboardIcon/></div>
              <div id="title">projects</div>
              <div id="right-arrow">
                <ChevronRightIcon />
              </div>
        </NavLink>
        <NavLink to="/socials" className="row link__router" exact activeClassName="active">
            <div id="icon"><MailIcon/></div>
            <div id="title">socials</div>
            <div id="right-arrow">
              <ChevronRightIcon />
            </div>
        </NavLink>
        <NavLink to="/resume" className="row link__router" exact activeClassName="active">
            <div id="icon"><DescriptionIcon/></div>
            <div id="title">résumé</div>
            <div id="right-arrow">
              <ChevronRightIcon />
            </div>
        </NavLink>
        <NavLink to="/blogs" className="row link__router" exact activeClassName="active">
            <div id="icon"><BookIcon/></div>
            <div id="title">blogs</div>
            <div id="right-arrow">
              <ChevronRightIcon />
            </div>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
