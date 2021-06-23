import React, {createContext, useReducer} from 'react';
import authReducer from './reducers/authReducer';
import authInitialState from './initialStates/authInitialState';
import contactsReducer from './reducers/contactsReducer';
import contactsInitialState from './initialStates/contactsInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState,
  );
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
