import React, { Component } from 'react';

class Challenge extends Component {

  render() {
    const { challenge } = this.props

    return (
      <div>
        <li>
          {challenge.name} <br />
          {challenge.description} <br />
          Completed? {`${challenge.completed}`} <br />
        </li>
      </div>
    )
  }

}

export default Challenge