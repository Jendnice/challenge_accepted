// Original code from React:
// 
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { Component } from 'react';
import PowersContainer from './containers/PowersContainer';
// import PowerShow from './components/powers/PowerShow';
import Home from './components/Home';
import NotFound from './components/NotFound';
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
                <Route path="*" component={ NotFound } />

              {/* <Route path="/powers/:id" render={(routeProps) => <PowerShow {...routeProps} powers={this.props.powers} /> } /> */}
             
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


      