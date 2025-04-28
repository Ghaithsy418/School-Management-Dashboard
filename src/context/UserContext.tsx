/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  ReactNode,
} from "react";

interface userTypes {
  token: string;
  role: string;
}

interface contextTypes {
  dispatch: Dispatch<{ type: string; payload: userTypes }>;
  token: string;
  role: string;
}

const initialState = {
  token: "",
  role: "manager",
};

const reducer = function (
  state: userTypes,
  action: { type: string; payload: userTypes },
) {
  switch (action.type) {
    case "setAll":
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "setRole":
      return {
        ...state,
        role: action.payload.role,
      };
    default:
      throw new Error("something went wrong!");
  }
};

const userContext = createContext<contextTypes>({
  token: "",
  role: "manager",
  dispatch: () => {},
});

function UserProvider({ children }: { children: ReactNode }) {
  const [{ role, token }, dispatch] = useReducer(reducer, initialState);
  return (
    <userContext.Provider value={{ dispatch, role, token }}>
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
