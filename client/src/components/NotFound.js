import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'



class NotFound extends Component {

    render() {
      return (
        <div>
          <div>
          <Container className="container">
  
          <img src="https://media3.giphy.com/media/4Z7DE87md7MdOGvAAA/giphy.gif"alt="lost robot"></img>
  
          <h3>Oh, no! That page wasn't found.</h3>
          <h3>But, don't worry! You can head home below.</h3>
  
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


