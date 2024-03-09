import React from 'react'
import {FaBars} from "react-icons/fa";
import './ResponsiveNavbar.css';

const ResponsiveNavbar = () => {
    const [tog,setTog]=React.useState(false);
    return (
        <div>
          <ul className="navigation">
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>other</li>
            <li className="subNav" onClick={()=>setTog(p=>!p)}>
             <FaBars />
            </li>
            
          </ul>
          <div className="dropdown" style={{display:tog?"block":"none"}}>
              <div>content 1</div>
              <div>content 2</div>
              <div>content 3</div>
            </div>
          
        </div>
    )
}

export default ResponsiveNavbar