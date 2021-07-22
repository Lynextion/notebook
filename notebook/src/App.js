import './App.css'
import Header from './header'
import Body from './body'
import Notes from './notes'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {setNote,setTitle} from './redux/setText';
import {useDispatch, useSelector} from "react-redux"

const App = () => {
  const [notes,setNotes] = useState([]);
  const [updateNotes,setUpdateNotes] = useState("");
  
  const dispatch = useDispatch();


  const addNote =(note) =>{
    axios.post('/post-notes', note).then(response =>{
      setNotes(response.data)
    })
  };

  const getNote = () =>{
    axios.get('/get-notes').then(response =>{
      setNotes(response.data)
      console.log(notes)
    })
  };

  const getText = (inf) =>{
    axios.get('/update-notes/'+inf).then(response => {
      setNotes(response.data)
      dispatch(setNote(notes[0].note))
      dispatch(setTitle(notes[0].title))
    })
  }

useEffect(() => {
  getNote()
},[updateNotes])

return (
  <div className="App"> 
    <div className="content">
      <Notes notes={notes} updateNotes={getText}/>
      <Body notes={notes} />
    </div>
  </div>

  );
}




export default App