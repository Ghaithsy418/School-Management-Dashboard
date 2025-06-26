/* eslint-disable react-refresh/only-export-components */
import {
  ActionDispatch,
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";

const initialState = {
  ui: "",
  className: "",
  studentId: 0,
  teacherId: 0,
};

interface StateTypes {
  ui: string;
  className: string;
  studentId: number;
  teacherId: number;
}

interface ContextTypes {
  ui: string;
  className: string;
  studentId: number;
  teacherId: number;
  dispatch: ActionDispatch<
    [
      action: {
        type: string;
        payload: unknown;
      },
    ]
  >;
}

function reducer(
  state: StateTypes,
  action: { type: string; payload: unknown },
) {
  switch (action.type) {
    case "changeUi":
      return {
        ...state,
        ui: action.payload as string,
      };
    case "changeClassName":
      return {
        ...state,
        className: action.payload as string,
      };
    case "changeStudentId":
      return {
        ...state,
        studentId: action.payload as number,
      };
    case "changeTeacherId":
      return {
        ...state,
        teacherId: action.payload as number,
      };
    case "resetAll":
      return {
        ...state,
        ui: "",
        className: "",
        studentId: 0,
        teacherId: 0,
      };
    default:
      throw new Error("Something went wrong with classes ui");
  }
}

const classesContext = createContext<ContextTypes>({
  ...initialState,
  dispatch: () => {},
});

function ClassesProvider({ children }: { children: ReactNode }) {
  const [{ ui, className, studentId, teacherId }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <classesContext.Provider
      value={{
        ui,
        className,
        studentId,
        teacherId,
        dispatch,
      }}
    >
      {children}
    </classesContext.Provider>
  );
}

export const useClassesUi = function () {
  const context = useContext(classesContext);
  if (!context) throw new Error("Classes Context can't be used here!");

  return context;
};

export default ClassesProvider;
