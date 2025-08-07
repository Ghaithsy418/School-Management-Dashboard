import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const initialState = {
  ui: "withoutTrash",
};

const complaintsSlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    changeUi(state, action: PayloadAction<string>) {
      state.ui = action.payload;
    },
  },
});

export default complaintsSlice.reducer;

export const { changeUi } = complaintsSlice.actions;

export const useComplaints = () =>
  useSelector((state: RootState) => state.complaints);
