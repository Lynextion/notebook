import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'text',
  initialState: {
    note: "",
    title:"",
    id:0,
  },
  reducers: {
    setNote: (state, action) => {
      state.note = action.payload
    },
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    }
  }
})

export const { setNote, setTitle , setId} = counterSlice.actions

export default counterSlice.reducer