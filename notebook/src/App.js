import './App.css'
import Body from './body'
import Notes from './notes'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {setNote,setTitle,setId} from './redux/setText';
import {useDispatch, useSelector} from "react-redux"


const App = () => {
  const [notes,setNotes] = useState([]);
  const [updateNotes,setUpdateNotes] = useState([]);
  const {id} = useSelector(state => state.setId);
  const dispatch = useDispatch();


  const addNote =() =>{
    axios.post('/post-notes').then(response =>{
    })
  };

  const getNote = () =>{
    axios.get('/get-notes').then(response =>{
      setNotes(response.data)
      dispatch(setId(response.data[0].id))
      console.log(response.data[0].id)
    })
  };

  const getText = (inf) =>{
    axios.get('/update-notes/'+inf).then(response => {
      dispatch(setNote(response.data[0].note))
      dispatch(setTitle(response.data[0].title))
      dispatch(setId(response.data[0].id))
      console.log(id);
    })
  }

  const saveText = (note) =>{
    axios.post('save-notes',note).then(response =>{
      console.log(response.data)
    })
  }

useEffect(() => {
  getNote()
},[updateNotes])

return (
  <div className="App"> 
    <div className="content">
      <Notes notes={notes} updateNotes={getText}/>
      <Body addNote={addNote} saveNote={saveText} />
    </div>
  </div>

  );
}




export default App