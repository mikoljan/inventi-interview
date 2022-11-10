import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: []
  },
  reducers: {
    initPosts: (state, action) => {
      if(Array.isArray(action.payload))
        state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(function( post ) {
        return post.id !== action.payload;
      });
    }
  }
});

// Action creators are generated for each case reducer function
export const { initPosts, deletePost } = postsSlice.actions;

export default postsSlice.reducer;