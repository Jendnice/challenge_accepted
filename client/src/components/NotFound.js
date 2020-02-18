import React from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'


const NotFound = () => 

  <div>
    <Container className="container">

      <div className="intro1">
        <h2>That page wasn't found.</h2>
      </div>

      <div className="intro3">
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
       

export default NotFound