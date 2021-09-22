import React from 'react';
import { authMethods } from '../firebase/authMethods';

export const firebaseAuth = React.createContext();
const AuthContext = (props) => {
  const initState = { email: '', password: '' };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    console.log('--sign up--');
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };
  const handleSignin = () => {
    console.log('--sign in--');
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
