import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'



class NotFound extends Component {

    render() {
      return (
        <div>
          <div>
          <Container className="container">

          <div className="ele">
            <h2>That page wasn't found.</h2>
          </div>

          <div className="ele2">
            <h2>Head home below!</h2>
          </div>

          <img src="https://media3.giphy.com/media/4Z7DE87md7MdOGvAAA/giphy.gif" alt="lost robot" className="robotGif"></img>

          </Container>
          <br/>
            <button className="ui blue inverted animated button" onClick={() =>  window.location.href='/'}>
              <div className="visible content">Home</div>
              <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i></div>
            </button>
          </div>
        </div>
      )
    }

}

export default NotFound


