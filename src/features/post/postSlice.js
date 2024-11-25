import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: (() => {
    try {
      const storedData = localStorage.getItem("data");
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Failed to parse array from localStorage");
      return [];
    }
  })(),
  loading: false,
  error: null,
};
export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      // Add the new post to the posts array
      state.posts.push(action.payload);

      // Log the current posts array before stringifying
      console.log("Posts before stringifying:", state.posts);

      // Ensure the array is properly stringified
      const stringifiedData = JSON.stringify(state.posts);

      // Check if stringification is correct
      console.log("Stringified Data:", stringifiedData);

      // Save to localStorage
      localStorage.setItem("data", stringifiedData);
    },
  },
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
