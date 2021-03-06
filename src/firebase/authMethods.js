import './index';
import firebase from 'firebase';

export const authMethods = {
  // firebase helper methods go here...
  signup: (email, password, setErrors, setToken, cb) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      //make res asynchonous so that we can make grab the token before saving it.
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        //set token to localStorage
        localStorage.setItem('token', token);
        setToken(token);
        cb(null, token);
        //grab token from local storage and set to state.
        console.log(res);
      })
      .catch((err) => {
        cb(err, null);
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signin: (email, password, setErrors, setToken, cb) => {
    //change from create users to...
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      //everything is almost exactly the same as the function above
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        //set token to localStorage
        localStorage.setItem('token', token);

        setToken(window.localStorage.token);
        cb(null, token);
      })
      .catch((err) => {
        cb(err, null);
        setErrors((prev) => [...prev, err.message]);
      });
  },
  //no need for email and password
  signout: (setErrors, setToken) => {
    // signOut is a no argument function
    firebase
      .auth()
      .signOut()
      .then((res) => {
        //remove the token
        localStorage.removeItem('token');
        //set the token back to original state
        setToken(null);
      })
      .catch((err) => {
        //there shouldn't every be an error from firebase but just in case
        setErrors((prev) => [...prev, err.message]);
        //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem('token');
        setToken(null);
        console.error(err.message);
      });
  },
};
