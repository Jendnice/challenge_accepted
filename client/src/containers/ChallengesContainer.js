import React, { Component } from 'react'
import Challenges from '../components/challenges/Challenges'
import { connect } from 'react-redux'
// import { fetchPowers } from '../actions/index'


class ChallengesContainer extends Component {

  // componentDidMount() {
  //   // console.log(this.props)
  //   this.props.fetchPowers()
  // }

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