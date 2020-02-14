import React, { Component } from 'react'
import './accordion.css'
import { Accordion, Label, Message } from 'semantic-ui-react'

import _ from 'lodash'

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
    
    const AccordionExampleShorthand = () => (
      <Accordion defaultActiveIndex={1} panels={panels} />
    )

    return (

      <div>
        {AccordionExampleShorthand()}
      </div>




      // <div>
      //   <li>
      //     {challenge.name} <br />
      //     {challenge.description} <br />
      //     Completed? {`${challenge.completed}`} <br />
      //   </li>
      // </div>


  //     <div class="accordion ui">
  //       <div class="title">
  //   <i aria-hidden="true" class="dropdown icon"></i>
  //   <div class="ui blue label">Challenge Me</div>
  // </div>
  // <div class="content">
  //   <div class="ui info message">
  //     <div class="content">
  //       <div class="header">{challenge.name}</div>
  //       <p>
  //         {challenge.description}
  //       </p>
  //     </div>
  //   </div>
  // </div>
  // </div>

    )
  }

}

export default Challenge






// <div class="accordion ui">
//   <div class="title">
//     <i aria-hidden="true" class="dropdown icon"></i>
//     <div class="ui blue label">Challenge Me</div>
//   </div>
//   <div class="content">
//     <div class="ui info message">
//       <div class="content">
//         <div class="header">{challenge.name}</div>
//         <p>
//           {challenge.description}
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="active title">
//     <i aria-hidden="true" class="dropdown icon"></i>
//     <div class="ui blue label">Aut sunt veniam ut.</div>
//   </div>
//   <div class="content active">
//     <div class="ui info message">
//       <div class="content">
//         <div class="header">Nostrum corrupti eum fugiat aperiam quod quod aspernatur.</div>
//         <p>
//           Atque deserunt illum. Nobis nobis alias nostrum rem voluptatibus fugit odio aut. Maxime
//           qui aperiam neque voluptas. Ad autem quibusdam aut. Commodi quam eveniet voluptatibus qui
//           repellat ullam accusantium eos in. Ut ut aut quas et quaerat ratione nisi.
//         </p>
//       </div>
//     </div>
//   </div>
//   <div class="title">
//     <i aria-hidden="true" class="dropdown icon"></i>
//     <div class="ui blue label">Maxime consequatur dolores dolor quos.</div>
//   </div>
//   <div class="content">
//     <div class="ui info message">
//       <div class="content">
//         <div class="header">
//           Earum molestiae provident ad dolorem adipisci nihil dignissimos error fuga.
//         </div>
//         <p>
//           Esse maiores natus possimus provident veniam animi. Doloribus commodi deserunt natus iure
//           dolorem maxime. Ut ratione quia accusantium. Alias excepturi soluta et id placeat.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>








