// import React, { Component } from 'react'


// class PowerShow extends Component {  
//   constructor() {
//     super();

//     let paramsId = this.props.match.params.id
//     let power = this.powers.find( power => power.id === paramsId);

//     this.state = {
//       power: power ? power : { name: 'N/A', description: 'N/A', info: 'N/A'}
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