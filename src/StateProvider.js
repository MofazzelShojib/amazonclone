import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer
export const StateContext = createContext ();

//this warp our App
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this pull info from data layer
export const useStateValue = () => useContext(StateContext);