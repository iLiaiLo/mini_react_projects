
import './App.css'
import ResponsiveNavbar from './ResponsiveNavbar';
import SideNav from './SideNav';
import BulbOnOff from './BulbOnOff';
import CollapsableSection from './CollapsableSection';
import SkillBar from './SkillBar';
import Accordeon from './Accordeon';
import { useState } from 'react';

const ProjectNames=[
  {name:"Responsive navbar"},
  {name:"Side nav"},
  {name:"Accordion"},
  {name:"Bulb on/off"},
  {name:"Collapsable section"},
  {name:"Skill bar"}
]

function App() {

  const [projectName,setProjectName]=useState("")

  return (
   <div className='MainContent'>
    <div className="menu">
      <h2>My mini React projects</h2>
      <ul>
        {
          ProjectNames.map((item)=>{
            return <li onClick={()=>setProjectName(item.name)}>{item.name}</li>
          })
        }
      </ul>
    </div>
    <div className="projectsContainer">
      {projectName==="Responsive navbar" && <ResponsiveNavbar />}
      {projectName==="Side nav" && <SideNav />}
      {projectName==="Accordion" && <Accordeon />}
      {projectName==="Bulb on/off" && <BulbOnOff />}
      {projectName==="Collapsable section" && <CollapsableSection />}
      {projectName==="Skill bar" && <SkillBar />}
    </div>
   </div>
  );
}

export default App;
