import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    value: []
  },
  reducers: {

  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer