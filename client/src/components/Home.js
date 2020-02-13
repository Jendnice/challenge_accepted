import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'
// import { Button } from 'semantic-ui-react'

export class Home extends Component {

  render() {
    return (
      <div>
        <h1>Challenge Accepted!</h1>
        <div>
        <Container className="container">
        <h3>The power is in your hands . . .</h3>

        <img src="https://cdn.shopify.com/s/files/1/1810/5253/articles/source.gif?v=1512068907"alt="animated rocket"></img>


        <h3><i>what will you do with it?</i></h3>

        </Container>
 
        <button class="ui blue inverted animated button">
        <div class="visible content">I'm ready</div>
        <div class="hidden content"><i aria-hidden="true" class="arrow right icon"></i></div>
        </button>
        </div>
      </div>
    )
  }

}

export default Home



