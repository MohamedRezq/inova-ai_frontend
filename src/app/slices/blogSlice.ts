import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface BlogState {
  title: string;
}

// Define the initial state using that type
const initialState = {
  title: "Title",
} as BlogState;

export const blogSlice = createSlice({
  name: "blog",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
});

export const { } = blogSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTitle = (state: RootState) => state.blogs.title;

export default blogSlice.reducer;
