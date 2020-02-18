import React, { Component } from 'react';
import Challenge from './Challenge';


class Challenges extends Component {

    render() {
        let challengeList = this.props.challenges.filter(challenge => challenge.power_id === this.props.powerId).map((challenge) => {
            return <Challenge key={challenge.id} challenge={challenge} />
        })

        return (
            <ul>
            {challengeList}
            </ul>
        )   
    }

}


export default Challenges