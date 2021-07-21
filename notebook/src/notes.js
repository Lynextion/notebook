import {useState, useEffect} from 'react'
import axios from 'axios';


const Notes = ({notes,updateNotes})=>{

const [id,setId] = useState(0);

const OpenRightMenu = (e)=>{
   document.getElementsByClassName('nav')[0].style.display = 'flex'
   document.getElementsByClassName('Sidenav')[0].style.width = '5%'
   document.getElementsByClassName('Sidenav')[0].style.height = '100%'
   e.target.style.display = 'none'
   
    }
const closeRightMenu = ()=>{
    document.getElementsByClassName('nav')[0].style.display = 'none'
    document.getElementsByClassName('nav-button')[0].style.display = 'block'
    document.getElementsByClassName('Sidenav')[0].style.width = '1%'
    document.getElementsByClassName('Sidenav')[0].style.height = '3'
}

const getText = (e)=>{
    console.log(e)
    updateNotes(e)


}


return (
    <div className="Sidenav" style={{  width: "1%" ,height: "3%"}}>
        <button className="nav-button" onClick={OpenRightMenu} style={{display:'flex'}} >&#9776;</button>   
        <div className="nav" style={{  display:"none", width: "10%" ,height: "100%"}} >
            <div className="Sidenav-content">
                <button className="titles" onClick={(e)=>getText(notes.map((e) => e.id))}  >{notes.map((e) => e.title)}</button>
            </div>
            <div style={{ display:"flex" ,position:"absolute" }}>
                <button onClick={closeRightMenu} style= {{ height:"10%"}} >Close &times;</button>   
            </div>
    </div>
    
    </div>
)
}


export default Notes