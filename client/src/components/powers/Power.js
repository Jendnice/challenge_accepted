import React, { Component } from 'react';
import ChallengesContainer from '../../containers/ChallengesContainer'
import { Card, Image, Reveal } from 'semantic-ui-react'
import './card.css'

class Power extends Component {

  assignPhoto = () => {
    if (this.props.power.name === "Earth") {
      return 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    } else if 
      (this.props.power.name === "Heart" ) {
      return 'https://media0.giphy.com/media/Ny6tc0CUS0CmQ/source.gif'
    } else if 
      (this.props.power.name === "Wind" ) {
      return 'https://media.giphy.com/media/3MbRNvfnMyUJeKGlsw/giphy.gif'
    } else if 
      (this.props.power.name === "Fire") {
      return 'https://images.unsplash.com/photo-1575329133220-8515b1336ab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    } else if 
      (this.props.power.name === "") {
      return 'https://media2.giphy.com/media/QEPlRzgYGwODC/giphy.gif'
    } else if 
      (this.props.power.name === "Water" ) {
      return 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  }

  assignGif = () => {
    if (this.props.power.name === "Earth") {
      return 'https://media1.giphy.com/media/mm8TIKFMbGErS/giphy.gif'
    } else if 
      (this.props.power.name === "Heart" ) {
      return 'https://media2.giphy.com/media/UDSEv9Y0y9fyM/giphy.gif'
    } else if 
      (this.props.power.name === "Wind" ) {
      return 'https://media1.giphy.com/media/1tlgcpXPoj9JK/giphy.gif'
    } else if 
      (this.props.power.name === "Fire") {
      return 'https://media3.giphy.com/media/CuSsVkCr9vFHW/source.gif'
    } else if 
      (this.props.power.name === "") {
      return 'https://media.giphy.com/media/6KULP1HJan59S/giphy.gif'
    } else if 
      (this.props.power.name === "Water" ) {
      return 'https://media3.giphy.com/media/drFw4AVBHeaoE/source.gif'
    }
  }


  render() {
    const { power } = this.props

    const photoAndGifReveal = () => (
      <Reveal animated='small fade'>
        <Reveal.Content visible>
          <Image className="image" src={this.assignPhoto()} />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image className='captainPlanetGif' src={this.assignGif()} />
        </Reveal.Content>
      </Reveal>
    )

    if (power.name === "") {
     return (
       <div>
       <br/> <br/> <br/> <br/> <br/>
     <Card className={`item${power.name}`}>
      <div key={power.id} className="PowerCard">
        <Card.Content>
              {photoAndGifReveal()}
        </Card.Content>
      </div>
      </Card>
      </div>
     )

    } else 

    return (
      <Card className={`item${power.name}`}>
      <div key={power.id} className="PowerCard">
        <Card.Content >
              {photoAndGifReveal()}
            <Card.Header className={'card_header'}> {power.name} </Card.Header><br />
            <Card.Description className="card_description"><i>{power.description}</i> <br /><br />
            {power.info} </Card.Description>
            <ChallengesContainer powerId={power.id}/>
        </Card.Content>
      </div>
      </Card>
    )
  }
}

export default Power
