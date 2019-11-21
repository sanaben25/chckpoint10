import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Profiles from './Profiles';
import Jobs from './Jobs';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
 
  render()  {
    return  (
      
      <BrowserRouter>
      
        <div className="container">
          <div className="menu">

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/profiles">Profiles</Link>
              </li>
            </ul>
          </div>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/profiles" component={Profiles} />
          </div>
        </div>
      </BrowserRouter>
     
    );
  }
 
}
 
class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

 
class Contact extends React.Component {
  render( ) {
    return (
      <div>
        <h2>Contact</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
 
        <div className="secondary-route-place">
          <Route
            path={`${this.props.match.url}/:topicId`}
            component={Topic} />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h3>
                Please select a topic.
              </h3>
            }
            />
        </div>
      </div>
    );
  }
}
 
class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}
 
export default App;


