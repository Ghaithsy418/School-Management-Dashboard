import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  ui: "",
  commentId: 0,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    changeUi(state, action: PayloadAction<string>) {
      state.ui = action.payload;
    },
    setCommentId(state, action: PayloadAction<number>) {
      state.commentId = action.payload;
    },
  },
});

export default commentsSlice.reducer;

export const { changeUi, setCommentId } = commentsSlice.actions;

export const useComments = () =>
  useSelector((state: RootState) => state.comments);
