import React, {  useState } from 'react';


const Header= ({update})=>{
    var [Title,setTitle] = useState(''); 


    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    console.log(Title);


return (
    <div className="header">
        <div className="save">
            <button onClick>Save</button>


        </div>
        <textarea
            rows='2'
            cols='100'
            name="Title"
            onChange={handleChange}
            value={Title}
            placeholder="Enter a title"
           
        
            style={{
                border: 'none',
                resize: 'none',
                outline: 'none',
            }}
        />

        <hr></hr>
    </div>
);
}



export default Header