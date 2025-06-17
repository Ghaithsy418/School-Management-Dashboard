import { createContext, ReactNode, useContext, useReducer } from "react";

interface StateTypes {
  ui: number;
  email: string;
}

interface UiTypes {
  ui: number;
  email: string;
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
        payload: unknown;
      },
    ]
  >;
}

const initialState = {
  ui: 1,
  email: "",
};

const reducer = function (
  state: StateTypes,
  action: { type: string; payload: unknown },
) {
  switch (action.type) {
    case "changeUi":
      return {
        ...state,
        ui: action.payload as number,
      };
    case "changeEmail":
      return {
        ...state,
        email: action.payload as string,
      };
    default:
      throw new Error("Something went Wrong!");
  }
};

const context = createContext<UiTypes>({
  ...initialState,
  dispatch: () => {},
});

export default function LoginProvider({ children }: { children: ReactNode }) {
  const [{ ui, email }, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={{ ui, email, dispatch }}>
      {children}
    </context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLoginUi() {
  const loginUi = useContext(context);
  if (loginUi === undefined) throw new Error("loginUi shouldn't be used here");
  return loginUi;
}
