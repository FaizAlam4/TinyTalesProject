import React from 'react'
import './Histogram.css'
function Histogram({data}) {


  return (<>
  <h2>Histogram:</h2>
    <div className='hist'>
    {data.map(([key, val]) => (
        <div
          key={key}
          className="bar"
          style={{ height: `${val}vh`, fontSize:"small"}}
        >{key}: &nbsp;{val}</div>
      
        
      ))}
    
    </div></>
  )
}

export default Histogram
