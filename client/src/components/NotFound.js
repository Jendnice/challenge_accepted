import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'



class NotFound extends Component {
  
    // return (
    //     <div>
    //         <h1> Oh no! That page wasn't found. </h1><br/ >
    //         <h3> Don't worry! You can always head home! </h3> <br />
    //         <Link to='/'><h2>Home</h2></Link>
    //    </div>
    // )

    render() {
      return (
        <div>
          <h1>Challenge Accepted!</h1>
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


