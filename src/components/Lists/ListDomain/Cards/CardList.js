import React from 'react'
import "./style.css"

const CardList = ({Domain, Price}) => {
  return (
    <div id='CardList'>
        <div id='CardInfo2'>
            <h1>{Domain}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div id='CardPrice'>
            <h1>${Price}</h1>
            <button>Register</button>
        </div>
    </div>
  )
}

export default CardList