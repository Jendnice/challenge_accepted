import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div>
        <div>
        <Container className="container">

          <div className="ele">
            <h2>The power is in</h2>
          </div>

          <div className="ele1">
            <h2>your hands . . .</h2>
          </div>

          <div className="ele2">
            <h2>what will you do with it?</h2>
          </div>

        <img src='https://i.pinimg.com/originals/e3/47/20/e3472086f5e52efcffa84c781684d53b.gif' alt="earth spinning" className='worldGif'></img>

        </Container>
        <br/>
          <button className="ui blue inverted animated button" onClick={() =>  window.location.href='/powers'}>
            <div className="visible content">I'm ready</div>
            <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i></div>
          </button>
        </div>
      </div>
    )
  }

}

export default Home



