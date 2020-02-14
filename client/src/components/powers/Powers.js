import React, { Component } from 'react';
import Power from './Power'
import { Card } from 'semantic-ui-react';

class Powers extends Component {

  renderPowers = () => { 
    return this.props.powers.map(power => {
      return (
      <Card.Group>
      <Power
        key={power.id}
        power={power}
      />
      </Card.Group>)
    })
  }

  render() {
    return(
      <ul>
        {this.renderPowers()}
      </ul>
    )
  }
}

export default Powers