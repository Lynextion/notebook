import {useEffect, useState} from 'react'
import Markdown from 'markdown-to-jsx'


const Body =({notes}) => {
    const [text,setText] = useState("");
    const [title,setTitle] = useState(""); 
    const [tempTitle,setTempTitle] = useState("");
    const [tempText,setTempText] = useState("");
    const [id,setId] = useState('');
    
    
    const handlechange = (e) => {
        setTitle(e.target.value);
    }

    const handleChange = (e) => {
        setText(e.target.value);
       
    }

    //Don't forget to deletese these
 

    return(
        
        <div style={{width:"100%"}}>
      
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
                  value={text}
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