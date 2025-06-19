/* eslint-disable react-refresh/only-export-components */
import { UserTypes } from "@/utils/types";
import Cookies from "js-cookie";
import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  ReactNode,
} from "react";

interface UserDataTypes {
  token: string;
  user?: UserTypes;
}

interface contextTypes {
  dispatch: Dispatch<{ type: string; payload: UserDataTypes }>;
  token: string;
  user: UserTypes;
}

const user = {
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
  user: Cookies.get("userData") ? JSON.parse(Cookies.get("userData")!) : user,
};

const reducer = function (
  state: UserDataTypes,
  action: { type: string; payload: UserDataTypes },
) {
  switch (action.type) {
    case "setUserData":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "clearAll":
      return {
        ...state,
        token: "",
        user: initialState.user,
      };
    default:
      throw new Error("something went wrong!");
  }
};

const userContext = createContext<contextTypes>({
  token: Cookies.get("token") || "",
  user: Cookies.get("userData") ? JSON.parse(Cookies.get("userData")!) : user,
  dispatch: () => {},
});

function UserProvider({ children }: { children: ReactNode }) {
  const [{ token, user }, dispatch] = useReducer(reducer, initialState);
  return (
    <userContext.Provider value={{ dispatch, token, user }}>
      {children}
    </userContext.Provider>
  );
}

function useUser() {
  const context = useContext(userContext);
  if (context === undefined)
    throw new Error("User Context shouldn't be used here");
  return context;
}

export { useUser, UserProvider };
