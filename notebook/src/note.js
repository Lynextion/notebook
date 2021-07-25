
const Note = ({id,title,updateNotes}) => {


    const getText = (e)=>{
        updateNotes(e)
    
    }
    
    return(
        <button  className="titles" onClick={(e)=>getText(id)} >{title}</button>

    )
}


export default Note;