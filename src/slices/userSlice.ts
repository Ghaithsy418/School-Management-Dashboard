import { RootState } from "@/store";
import { UserTypes } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

interface UserDataTypes {
  token: string;
  user: UserTypes;
}

const initialUser = {
  email: "",
  id: 0,
  lastName: "",
  middleName: "",
  name: "",
  phoneNumber: "",
  role: "",
};

const initialState = {
  token: Cookies.get("token") || "",
  user: Cookies.get("userData")
    ? JSON.parse(Cookies.get("userData")!)
    : initialUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserDataTypes>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    clearAll(state) {
      state.token = "";
      state.user = initialState.user;
    },
  },
});

export const { setUserData, clearAll } = userSlice.actions;

export default userSlice.reducer;

export const useUser = () => useSelector((state: RootState) => state.user);
