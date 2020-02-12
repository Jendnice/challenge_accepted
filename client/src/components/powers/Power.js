import React, { Component } from 'react';
import ChallengesContainer from '../../containers/ChallengesContainer'

class Power extends Component {


  render() {
    const { power } = this.props

    return (
      <div>
        <li>
          {power.name} <br />
          {power.description} <br />
          {power.info} <br />
          <ChallengesContainer power={power}/>
        </li>
      </div>
    )
  }
}

export default Power