import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const moveSlice = createSlice({
  name: "move",
  initialState: {
    move: 0,
  },
  reducers: {
    setMove: (state, action) => {
      state.move = action.payload;
    },
  },
});

export const { setMove } = moveSlice.actions;

export default configureStore({
  reducer: {
    move: moveSlice.reducer,
  },
});
