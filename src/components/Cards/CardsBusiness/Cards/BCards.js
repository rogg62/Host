import React from 'react'
import "./style.css"

const BCards = ({titleB, paragrafB}) => {
  return (
    <div id='bCard'>
        <div id='bCardImage'></div>
        <div id='bCardTitle'>
            <h1>{titleB}</h1>
            <p>{paragrafB}</p>
        </div>
    </div>
  )
}

export default BCards