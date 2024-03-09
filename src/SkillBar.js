import React from 'react'

const box=[
    {name:"HTML",percent:81},
    {name:"CSS",percent:65},
    {name:"JS",percent:75},
    {name:"React",percent:40},
    {name:"Typescript",percent:20}
 ]
const SkillBar = () => {
    function setBG(num){
        let text=""
        if(num>80 && num<=100){
          text="green";
        }
        else if(num<=80 && num>=50){
          text="dodgerblue";
        }
        else if(num<50 && num>30){
          text="tomato";
        }
        else if(num<=30 && num>0){
          text="red";
        }
        return text;
      }
      
      
      return (
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            {box.map((item)=>{
              return(
                
                <nav key={Math.random()} style={{marginBottom:"20px"}}>
                  
                  <div style={{fontSize:"25px",color:"black",marginBottom:"10px",marginTop:"10px"}}>{item.name}</div>
    
                  <div style={{width:"50vw",height:"50px",position:"relative",backgroundColor:"#e8ebeb"}}>
                    <div style={{width:`${item.percent/2}vw`,height:"50px",position:"absolute",backgroundColor:setBG(item.percent)}}>
                  </div>
                  </div>
                 
    
                </nav>
                
              )
            })}
           
          </div>
      )
}

export default SkillBar