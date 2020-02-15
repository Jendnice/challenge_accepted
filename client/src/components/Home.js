import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'
// import { Button } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Challenge Accepted!</h1>
        <div>
        <Container className="container">
        <h3>The power is in your hands . . .</h3>

        {/* <img src="https://cdn.shopify.com/s/files/1/1810/5253/articles/source.gif?v=1512068907"alt="animated rocket"></img> */}
        <img src='https://i.pinimg.com/originals/e3/47/20/e3472086f5e52efcffa84c781684d53b.gif' alt="earth spinning"></img>

        <h3><i>what will you do with it?</i></h3>

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



