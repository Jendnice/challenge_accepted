import React, { Component } from 'react'
import Challenges from '../components/challenges/Challenges'
import { connect } from 'react-redux'

class ChallengesContainer extends Component {

  render() {
    return (
      <div>
        <Challenges 
        challenges={this.props.challenges}
        powerId={this.props.power.id}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    challenges: state.challenges
  }
}

export default connect(mapStateToProps)(ChallengesContainer)