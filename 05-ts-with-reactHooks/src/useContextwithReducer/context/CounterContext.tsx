import {
  ChangeEvent,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

type StateType = {
  count: number;
  text: string;
};

const initState: StateType = {
  count: 0,
  text: "",
};

const enum REDUCER_ACTION_TYPES {
  INCREMENT,
  DECREMENT,
  NEW_TEXT,
}

type ReducerActions = {
  type: REDUCER_ACTION_TYPES;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerActions): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPES.NEW_TEXT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("Invalid action type");
  }
};

// We are going to make the custom hook in which we are going to use useReducer to based on that we return useful functions to manipulate the state

export const useCustomCounterHook = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPES.INCREMENT });
  }, []);
  const decrement = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPES.DECREMENT });
  }, []);
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPES.NEW_TEXT, payload: e.target.value });
  }, []);

  return { state, increment, decrement, handleInputChange };
};

// It's time to create our context which can used to wrap other components to provide props without prop drilling
type UseCustomCounterHookType = ReturnType<typeof useCustomCounterHook>;

const initContextState: UseCustomCounterHookType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCustomCounterHookType>(initContextState);

// Now its time to create context provider so that we can wrap other component in it we make this in such way that other components should wrap init will be the children

type ChildrenType = {
  children?: ReactElement;
};

export const CounterProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCustomCounterHook(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};
type UseTextType = {
  text: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useText = (): UseTextType => {
  const {
    state: { text },
    handleInputChange,
  } = useContext(CounterContext);
  return { text, handleInputChange };
};
