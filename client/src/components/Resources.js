import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import './Home.css'

class Resources extends Component {

  render() {
    return (
      <div>
        <div>
        <Container className="container">

          <div className="intro1">
            <h2>References &</h2>
          </div>

          <div className="intro2">
            <h2>Additional Resources:</h2>
          </div>

          <div className="intro3">
            <div className="links">
                <a href={'https://climatekids.nasa.gov/climate-change-meaning/'}>ClimateKids - NASA (climate change)</a><br />
                <a href={'https://windexchange.energy.gov/'}>WINDExchange</a> <br />
                <a href={'https://www.energy.gov/eere/wind/advantages-and-challenges-wind-energy'}>Energy.gov</a><br />
                <a href={'https://www.c2es.org/content/wildfires-and-climate-change/'}>Center for Climate and Energy Solutions</a><br />
                <a href={'https://climatekids.nasa.gov/ocean/'}>ClimateKids - NASA (ocean)</a><br />
                <a href={'https://smokeybear.com/en/smokey-for-kids/preventing-wildfires'}>Smokey Bear</a><br />
                <a href={'https://www.greenmatters.com/p/how-plastic-straws-affect-ocean-turtles'}>Green Matters</a><br />
                <a href={'https://www.chasingcoral.com/2018/05/23/reef-safe-sunscreen-need-know/'}>Chasing Coral</a><br /><br />
                <br />
                <a href={'https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions.aspx'}>WWF - Species Adoptions</a><br />
                <a href={'https://www.amazon.com/Boy-Who-Harnessed-Wind-Electricity/dp/0061730335'}><i>The Boy Who Harnessed the Wind</i> (Amazon)</a><br />
                <a href={'https://www.wwf.org.au/get-involved/bushfire-emergency#gs.x3a0vo'}>WWF - Bushfire Emergency</a><br />
            </div>
          </div>

          <img src='https://djnw5a0wszky0.cloudfront.net/inkfactorywp/wp-content/uploads/2018/04/01.gif' alt="happy earth" className='happyEarth'></img>

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

export default Resources