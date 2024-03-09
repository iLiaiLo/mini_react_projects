import React from 'react'
import './BulbOnOff.css'

const BulbOnOff = () => {

    const [checked,setChecked]=React.useState(false)

    function tog(){
        setChecked(ch=>!ch);
    }

  return (
    <div>
    <button className="switch" onClick={tog}>switch</button>
    <div className="wire"></div>
    <div className={checked? "bulbon" : "bulb"}></div>
    {checked?document.body.setAttribute("class","on"):document.body.setAttribute("class","off")}
  </div>
  )
}

export default BulbOnOff