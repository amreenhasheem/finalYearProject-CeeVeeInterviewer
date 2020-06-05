import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Details from "./components/Details";
import FinalPage from "./components/FinalPage";
import ResumeForm from "./components/ResumeForm";
import ResumeScreeningResult from "./components/ResumeScreeningResult";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => <HomePage />;

const Login = () => <LoginPage />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route path="/details" component={Details} />
            <Route path="/finalpage" component={FinalPage} />
            <Route path="/resumeform" component={ResumeForm} />
            <Route
              path="/resumescreeningresult"
              component={ResumeScreeningResult}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
