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


import React, { Component } from 'react';
import PowersContainer from './containers/PowersContainer';
// import PowerShow from './components/powers/PowerShow'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/powers" component={PowersContainer} />  
                {/* <Route exact path="/powers/:id" render={(props) => <PowerShow {...props} powers={this.state.powers} /> } /> */}
              </Switch>
            </div>
      </Router>

    )
  }

}

export default App

            // <Route exact path="/pets" component={PetList} />
            // <Route exact path="/pets/:id" render={ props => <PetShow {...props} pets={ this.state.pets } />} />


      