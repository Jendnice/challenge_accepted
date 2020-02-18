import React from 'react'
import { Container } from 'semantic-ui-react'
import './Home.css'


const Home = () =>

      <div>
        <div>
        <Container className="container">

          <div className="intro1">
            <h2>The power is in</h2>
          </div>

          <div className="intro2">
            <h2>your hands . . .</h2>
          </div>

          <div className="intro3">
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

export default Home

