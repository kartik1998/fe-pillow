import React from 'react';
export const firebaseAuth = React.createContext();
const AuthContext = (props) => {
  return (
    <firebaseAuth.Provider
      value={{
        test: 'context is working',
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthContext;
