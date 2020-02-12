import React, { Component } from 'react'
import Powers from '../components/powers/Powers'
import { connect } from 'react-redux'

class PowersContainer extends Component {

  render() {
    return (
      <div>
        <Powers powers={this.props.powers} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    powers: state.powers 
  }
}


export default connect(mapStateToProps)(PowersContainer)