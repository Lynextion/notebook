import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'text',
  initialState: {
    note: "",
    title:"",
  },
  reducers: {
    setNote: (state, action) => {
      state.note = action.payload
    },
    setTitle: (state, action) => {
      state.title = action.payload
    }
  }
})

export const { setNote, setTitle  } = counterSlice.actions

export default counterSlice.reducer