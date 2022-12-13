import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

type initialStateType = {
    commentsIsClicked: boolean;
};

const initialState: initialStateType = {
    commentsIsClicked: false
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openComments: (state) => {
      state.commentsIsClicked = true;
    },
    closeComments: (state) => {
      state.commentsIsClicked = false;
    },
  },
});

export const { openComments, closeComments } = uiSlice.actions;

export const selectUi = (state: RootState) => state.ui

export default uiSlice.reducer;
