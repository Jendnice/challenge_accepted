import React, { Component } from 'react'
import './accordion.css'
import _ from 'lodash'
import { Accordion, Label, Message } from 'semantic-ui-react'


class Challenge extends Component {

  render() {
    const { challenge } = this.props

    const panels = _.times(1, (i) => ({
      key: `panel-${i}`,
      title: {
        content: <Label color='blue' content={'Challenge Me'} />,
      },
      content: {
        content: (
          <Message
            info
            header={challenge.name}
            content={challenge.description}
          />
        ),
      },
    }))
    
    const buildAccordion = () => (
      <Accordion defaultActiveIndex={1} panels={panels} />
    )

    return (
      <div>
        {buildAccordion()}
      </div>
    )

  }

}


export default Challenge