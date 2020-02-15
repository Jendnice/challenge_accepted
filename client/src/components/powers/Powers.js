import React, { Component } from 'react';
import Power from './Power'
import './card.css'
// import { Grid, Card } from 'semantic-ui-react';

class Powers extends Component {

  renderPowers = () => { 
    return this.props.powers.map(power => {
      return (
      <Power
        key={power.id}
        power={power}
      />
      )
    })
  }

  render() {
    return(
      // <ul>
      <div className="grid-container">
        {this.renderPowers()}
      </div>
      // </ul>
    )
  }
}

export default Powers





