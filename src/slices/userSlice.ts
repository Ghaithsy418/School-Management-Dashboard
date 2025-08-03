import { RootState } from "@/store";
import { UserTypes } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

interface UserDataTypes {
  token: string;
  user: UserTypes;
  detectTheme: boolean;
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
  detectTheme: document.documentElement.classList.contains("dark"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserDataTypes>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setDetectTheme(state, action: PayloadAction<boolean>) {
      state.detectTheme = action.payload;
    },
    clearAll(state) {
      state.token = "";
      state.user = initialState.user;
    },
  },
});

export const { setUserData, clearAll, setDetectTheme } = userSlice.actions;

export default userSlice.reducer;

export const useUser = () => useSelector((state: RootState) => state.user);
