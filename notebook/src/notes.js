import Note from './note'


const Notes = ({notes,updateNotes})=>{


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



return (
    <div className="Sidenav" style={{  width: "1%" ,height: "3%"}}>
        <button className="nav-button" onClick={OpenRightMenu} style={{display:'flex'}} >&#9776;</button>   
        <div className="nav" style={{  display:"none", width: "10%" ,height: "100%"}} >
            <div className="Sidenav-content">
            {notes.map(note =>{
                return(
                <Note 
                    id={note.id}
                    title={note.title} 
                    updateNotes={updateNotes}
                />
                )
                })    
}              
            </div>
            <div style={{ display:"flex" ,position:"absolute" }}>
                <button onClick={closeRightMenu} style= {{ height:"10%"}} >Close &times;</button>   
            </div>
    </div>
    
    </div>
)
}


export default Notes