import React, { Component } from 'react'
import Power from './Power'
import './card.css'


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
      <div className="grid-container">
        {this.renderPowers()}
      </div>
    )
  }
}

export default Powers

