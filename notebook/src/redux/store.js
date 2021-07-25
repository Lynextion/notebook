import {configureStore} from "@reduxjs/toolkit";
import  setNote from "./setText";
import setTitle from "./setText";
import setId from "./setText";


export default configureStore({
reducer:{
    setText:setNote,
    setTitle:setTitle,
    setId:setId
}

})