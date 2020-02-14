import React, { Component } from 'react'
import Powers from '../components/powers/Powers'
import { connect } from 'react-redux'
import { fetchPowers } from '../actions/index'
import { Container } from 'semantic-ui-react';

class PowersContainer extends Component {

  componentDidMount() {
    this.props.fetchPowers()
  }

  render() {
    return (
      <Container>
      <div>
        <Powers powers={this.props.powers} />
      </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    powers: state.powers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPowers: () => dispatch(fetchPowers())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PowersContainer)