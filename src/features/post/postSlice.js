import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};
export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      state.loading = true;
      state.posts = [...state.posts, action.payload];
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost } = postSlice.actions;

export default postSlice.reducer;
