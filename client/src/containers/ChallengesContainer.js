import React, { Component } from 'react'
import Challenges from '../components/challenges/Challenges'
import { connect } from 'react-redux'
import { fetchChallenges } from '../actions/index'


class ChallengesContainer extends Component {

  componentDidMount() {
    this.props.fetchChallenges()
  }

  render() {
    return (
      <div>
        <Challenges 
        challenges={this.props.challenges}
        powerId={this.props.powerId}
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChallenges: () => dispatch(fetchChallenges())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer)