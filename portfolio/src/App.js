import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/import.scss";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Navbar from "./Components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
