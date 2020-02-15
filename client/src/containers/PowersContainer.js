import React, { Component } from 'react'
import Powers from '../components/powers/Powers'
import { connect } from 'react-redux'
import { fetchPowers } from '../actions/index'
import { Container } from 'semantic-ui-react'

class PowersContainer extends Component {

  componentDidMount() {
    this.props.fetchPowers()
  }

  render() {
    return (
      <div>
      <Container>
        <Powers powers={this.props.powers} />
      </Container>
      <br />
      <button className="ui blue inverted animated button" onClick={() =>  window.location.href='/'}>
      <div className="visible content">Home</div>
      <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i></div>
      </button>
      </div>
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