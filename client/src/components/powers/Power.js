import React, { Component } from 'react';
import ChallengesContainer from '../../containers/ChallengesContainer'

class Power extends Component {


  render() {
    // const { power } = this.props

    return (
      <div>
        <li>
          {this.props.power.name} <br />
          {this.props.power.description} <br />
          {this.props.power.info} <br />
          <ChallengesContainer powerId={this.props.power.id}/>
        </li>
      </div>
    )
  }
}

export default Power