import './App.css';
import React, { Component } from 'react';
import PowersContainer from './containers/PowersContainer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react'

class App extends Component {

  render() {

    return (
      <Router>
            <div className="App">
              <Header />
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/home" component={ Home } />
                <Route exact path="/powers" component={ PowersContainer } />
                <Route exact path="/resources" component={Resources} />
                <Route path="*" component={ NotFound } />
              </Switch>
              <br /><br />
              <Divider />
              <Footer />
            </div>
      </Router>
    )

  }

}


export default App