import { ChangeEvent, ReactNode, useReducer } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPES {
  INCREMENT,
  DECREMENT,
  NEW_TEXT,
}

type ReducerActions = {
  // below need one union literal so we make enum types for this
  type: REDUCER_ACTION_TYPES;
  payload?: string;
};

const reducer = (
  state: typeof initState,
  action: ReducerActions
): typeof initState => {
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

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  //   const [count, setCount] = useState<number>(1);
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPES.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPES.DECREMENT });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: REDUCER_ACTION_TYPES.NEW_TEXT, payload: e.target.value });

  return (
    <div>
      <h1>{children(state.count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input
        type="text"
        name="text"
        id="text"
        value={state.text}
        onChange={handleChange}
      />
      <h2>{state.text}</h2>
    </div>
  );
};
export default Counter;
