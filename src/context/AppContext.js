import { createContext, useReducer } from "react";

// Creates AppReducer
const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 3600,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 22, name: "holiday", cost: 400 },
    { id: 44, name: "car service", cost: 60 },
    { id: 88, name: "house remodeling", cost: 2300 },
  ],
};

// Below we create the context Object calling createContext
// and exports AppContext
export const AppContext = createContext();

// Below we create the App Provider, that is a component that wraps
// the components which we want to pass the state to.

// exports AppProvider
export const AppProvider = (props) => {
  // We use the useReducer hook to actually store the global state.
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
