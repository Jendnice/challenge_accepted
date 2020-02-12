import React, { Component } from 'react';
import Power from './Power'

class Powers extends Component {

  renderPowers = () => { 
    return this.props.powers.map(power => {
      return (
      <Power
        key={power.id}
        power={power}
      />)
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