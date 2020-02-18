import React from 'react'


const Footer = () => 

  <div className="Footer">
    <p style={{textAlign: 'left'}} className="FooterContent"><i>Challenge Accepted </i> © Copyright 2020</p>

    <button className="ui blue inverted animated button" onClick={() =>  window.location.href='/resources'}>
      <div className="visible content">Resources</div>
      <div className="hidden content"><i aria-hidden="true" className="check icon"></i></div>
    </button>
  </div> 


export default Footer