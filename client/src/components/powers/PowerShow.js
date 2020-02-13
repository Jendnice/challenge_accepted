// import React, { Component } from 'react'


// class PowerShow extends Component {  
//   constructor(props) {
//     super(props)

//     debugger 

//     let paramsId = parseInt(this.props.match.params.id, 10)
//     let power = this.props.powers.find( power => power.id === paramsId);

//     this.state = {
//       power: power ? power : { name: 'N/A', description: 'N/A', info: 'N/A', challenges: []}
//     }
//   }

//   render() {

//     const { name, description, info } = this.state.power;
//     return (
//       <div>
//         <h3>{ name }</h3>
//         <p>Description: { description }</p>
//         <p>Info: { info }</p>
//       </div>
//     )
//   }
// }

// export default PowerShow