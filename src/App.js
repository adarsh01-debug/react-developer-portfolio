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
              <Route exact path="/" component={Home}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/socials" component={Socials}/>
              <Route exact path="/resume" component={Resume}/>
              <Route exact path="/blogs" component={Blogs}/>
            </Switch>
          </div>
        </div>
      </Router>
    }
    </div>
  );
}

export default App;
