import React, { useState } from 'react';
import { authMethods } from '../firebase/authMethods';

export const firebaseAuth = React.createContext();
const AuthContext = (props) => {
  const initState = { firstName: '', lastName: '', email: '', password: '' };
  const [inputs, setInputs] = useState(initState);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    console.log('--sign up--');
    console.log({ inputs });
    authMethods.signup(inputs.email, inputs.password, setToken);
    console.log(token);
  };
  const handleSignin = () => {
    console.log('--sign in--');
    authMethods.signin(inputs.email, inputs.password, setToken);
    console.log(token);
  };

  const handleSignout = () => {
    authMethods.signout(setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        //replaced test with handleSignup
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        handleSignout,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthContext;
