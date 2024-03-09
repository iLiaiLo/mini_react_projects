import React from 'react'

const collapsable={
    position:"relative",
    padding:"30px 0",
    background:"lightblue",
    width:"70%",
    fontSize:"30px",
    cursor:"pointer"
}
const spanMark={
    position:"absolute",
    left:"80%",
    transition:"transform 0.7s",
    fontSize:"35px"
}
const textContent={
    backgroundColor:"tomato",
    overflow:"auto",
    fontSize:"20px",
    transition:"height 0.7s",
    width:"70%",
    lineHeight:'30px',
    letterSpacing:"1px",
    textIndent:"30px"
}

const CollapsableSection = () => {

  const [tog,setTog]=React.useState(false);
  const [rotated,setRotated]=React.useState(false);

  function handleClick(){
    setTog(p=>!p);
    setRotated(p=>!p);
  }
  return (
    <div>
        <div style={collapsable}
         onClick={handleClick}>content 1
         <span style={{...spanMark,transform:rotated?"rotate(90deg)":"translate(0,-15%)"}}>
          &gt;</span>
         </div>
        <div style={{height:tog?"300px":"0",...textContent}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
  )
}

export default CollapsableSection