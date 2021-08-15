import React, { useState } from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListIcon from "@material-ui/icons/List";

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
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === value.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
              <div id="right-arrow">
                <ChevronRightIcon />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
