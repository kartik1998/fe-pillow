import React, { useState } from 'react';
import { authMethods } from '../firebase/authMethods';

export const firebaseAuth = React.createContext();

const AuthContext = (props) => {
  const initState = { email: '', password: '' };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = (cb) => {
    // middle man between firebase and signup
    console.log('handleSignup');
    // calling signup from firebase server
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken, cb);
  };
  const handleSignin = () => {
    //changed to handleSingin
    console.log('handleSignin!!!!');
    // made signup signin
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
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
        errors,
        handleSignout,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthContext;
