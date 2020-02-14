import React, { Component } from 'react';
import ChallengesContainer from '../../containers/ChallengesContainer'
import { Card, Image } from 'semantic-ui-react'
import './card.css'

class Power extends Component {

  assignPhoto = () => {
    if (this.props.power.id === 1) {
      // return 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    return 'https://media2.giphy.com/media/QEPlRzgYGwODC/giphy.gif'
    } else if 
      (this.props.power.id === 2 ) {
      return 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    } else if 
      (this.props.power.id === 3 ) {
      // return 'https://images.unsplash.com/photo-1496867557017-559adb93b339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      return 'https://media.giphy.com/media/3MbRNvfnMyUJeKGlsw/giphy.gif'
    } else if 
      (this.props.power.id === 4 ) {
      return 'https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    } else if 
      (this.props.power.id === 5 ) {
      return 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  }


  render() {
    // const { power } = this.props

    return (
      <Card className={`item${this.props.power.id}`}>
      <div key={this.props.power.id} className="PowerCard">
        <Card.Content>
              <Image
                className="image"
                src={this.assignPhoto()}
              />
            <Card.Header> {this.props.power.name} </Card.Header><br />
            <Card.Description>{this.props.power.description} <br />
            {this.props.power.info} </Card.Description> <br /> 
            <ChallengesContainer powerId={this.props.power.id}/>
        </Card.Content>
      </div>
      </Card>
    )
  }
}

export default Power


