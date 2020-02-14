import React, { Component } from 'react'
// import '../App.css'
// import { Card } from 'semantic-ui-react'

class Challenge extends Component {

  render() {
    const { challenge } = this.props

    return (
      // <Card>
      <div>
        <li>
          {challenge.name} <br />
          {challenge.description} <br />
          Completed? {`${challenge.completed}`} <br />
        </li>
      </div>
      // </Card >
    )
  }

}

export default Challenge