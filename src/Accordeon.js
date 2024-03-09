import React from 'react'

const box=[
    {name:"content 1",description:"lorem ipsum dolor sit amet",key:1,checked:false},
    {name:"content 2",description:"lorem ipsum dolor sit amet",key:2,checked:false},
    {name:"content 3",description:"lorem ipsum dolor sit amet",key:3,checked:false}
 ]

 const contentName={
    padding:"30px 0",
    background:"lightblue",
    width:"70%",
    fontSize:"25px",
    cursor:"pointer"
 }
 const Content={
    backgroundColor:"tomato",
    overflow:"hidden",
    fontSize:"20px",
    transition:"height 0.7s",
    width:"70%",
 }

const Accordeon = () => {
    const [content,setContent]=React.useState(box);

    function handleClick(key){
      setContent(content.map(it=>{
        if(key===it.key){
          return {...it,checked:!it.checked}
        }
        return it
      }))
    }
    return (
        <div>
        {content.map((item)=>{
          return (<div key={item.key}>
            <div style={contentName} onClick={()=>handleClick(item.key)}>{item.name}</div>
            <div style={{...Content,height:item.checked?"100px":"0"}} >{item.description}</div>
          </div>)
        })}
        </div>
    )
}

export default Accordeon