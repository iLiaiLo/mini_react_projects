import React from "react";
import {IoCloseCircleSharp} from "react-icons/io5";
import './SideNav.css'

const SideNav = () => {
    const [toggle,setToggle]=React.useState(false);
  return (
    <div>
        <div className="navi" onClick={()=>setToggle(p=>!p)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container" style={{left:toggle?0:"-200px"}}>
        <IoCloseCircleSharp onClick={()=>setToggle(p=>!p)} className="icon"/>
        <ul className="Navigation">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Other</li>
        </ul>
        </div>
      </div>
  )
}

export default SideNav