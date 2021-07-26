import {setNote , setTitle,setId} from './redux/setText';
import {useDispatch, useSelector} from "react-redux"



const Body =({addNote,saveNote}) => {
    
    const {note} = useSelector((state) => state.setText);
    const {title} = useSelector((state) => state.setTitle);
    const {id} = useSelector((state) => state.setId);
    const dispatch = useDispatch();
   
    
    console.log(note)
    
    const handlechange = (e) => {
        dispatch(setTitle(e.target.value));
    }
    const handleChange = (e) => {
        dispatch(setNote(e.target.value))
    }

    const onSave = () => {
        saveNote({title,note,id})
       
    }

    const onCreate = () => {
        addNote()
        dispatch(setTitle(""))
        dispatch(setNote(""))
        dispatch(setId(0));
    }

    return(
        
        <div style={{width:"100%"}}>
        <button className="button button--hyperion" onClick={() => onSave()} style={{ position: "absolute",right: 0 }} ><span><span>Save</span></span></button>
        <button className="button button--hyperion" onClick={() => onCreate()} style={{position:"absolute",right: "119px",top:0 }}><span><span>Create New</span></span></button>
        <textarea
            rows='2'
            cols='100'
            name="Title"
            onChange={handlechange}
            value={title}
            placeholder="Enter a title"
            
            style={{
                border: 'none',
                resize: 'none',
                outline: 'none',
                backgroundColor:"#D3D3D3",
            }}
        />  
          <hr></hr>
      
        <div className="body">
          
            <textarea
                  rows='2'
                  cols='100'
                  name="Text"
                  onChange={handleChange}
                  value={note}
                  placeholder="Write your notes"
                  style={{
                      border: 'none',
                      resize: 'none',
                      width: '100%',
                      height: '100%',
                      outline:"none",
                      backgroundColor:"#D3D3D3",
                  }}
            />
        </div>
      </div>
    )

}


export default Body;