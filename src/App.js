import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Socials from './Components/Socials';
import Resume from './Components/Resume';
import Blogs from './Components/Blogs';
import DotLoader from "react-spinners/DotLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000)

  }, [])

  return (
    <div className="loading__container">
      { loading ?
        <DotLoader
        size={50}
        color={"#4F46E5"}
        loading={loading}
        />
        :
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
    }
    </div>
  );
}

export default App;
