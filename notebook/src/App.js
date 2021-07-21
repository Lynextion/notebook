import './App.css'
import Header from './header'
import Body from './body'
import Notes from './notes'
import axios from 'axios'
import {useState,useEffect} from 'react'

const App = () => {
  const [notes,setNotes] = useState([]);
  const [updateNotes,setUpdateNotes] = useState("");
  


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