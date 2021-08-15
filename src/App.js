import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Socials from './Components/Socials';
import Resume from './Components/Resume';
import Blogs from './Components/Blogs';

function App() {
  return (
    <Router>
      <div className="App">

        <div className="sidebar">
          <Sidebar/>
        </div>

        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/socials">
              <Socials/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
            <Route path="/blogs">
              <Blogs/>
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
