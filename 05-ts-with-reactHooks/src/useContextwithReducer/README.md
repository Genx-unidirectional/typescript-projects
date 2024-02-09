### Using context api and making custom hook

--> Main motive of making custom hook is that we want to give access of state to those component who requires it.

-->It is convenient that to make state in custom hook and pass it to those component who require that state.

# useReducer for state management

# CreateContext for creating context

# useContext for passing created context

# Concept learned

-->Creating custom hook for state management

# Logical approach (Like a algorithm)

--> We are going to create the state but usually we create the state using useState but in this project we create the state using useReducer.

--> So when we create the state using useReducer we know that we have to pass the initial state and the reducer function to manipulate that state.

-->But we want to make the access of the state to every component so we need to create context so that we can wrap that component and then use the values it will provide via useContext

--> The [`./CounterContext.tsx`] is responsible for the all the state and props and function which it will provide for [`Counter.tsx`] component.

--> We will wrap the component in the [`./index.tsx`] so that the props are available for all components inside it via context api
