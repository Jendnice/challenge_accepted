import React from 'react'
import { Link } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'

const NotFound = () => {
    return (
        <div>
            <h1> Oh no! That page wasn't found. </h1><br/ >
            <Divider className="divider"/>
            <h3> Don't worry! You can always head home! </h3> <br />
            <Link to='/'><h2>Home</h2></Link>
       </div>
    )
  }

export default NotFound


