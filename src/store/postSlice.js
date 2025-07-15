import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setAllPosts: (state, action) => {
            state.posts = action.payload;
        },
        // Action to add a new post or update an existing one
        setPost: (state, action) => {
            const newPost = action.payload;
            const existingPostIndex = state.posts.findIndex(post => post.$id === newPost.$id);
            if (existingPostIndex !== -1) {
                state.posts[existingPostIndex] = newPost;
            } else {
                state.posts.push(newPost);
            }
        },
        removePost: (state, action) => {
            const postIdToDelete = action.payload;
            state.posts = state.posts.filter(post => post.$id !== postIdToDelete);
        },
        clearAllPosts: (state) => {
            state.posts = [];
        }
    },
});

export const { setAllPosts, upsertPost, removePost, clearAllPosts } = postSlice.actions;

export default postSlice.reducer;
