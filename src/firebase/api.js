import './index';
import firebase from 'firebase';

export const writeUserData = (userId, userData) => {
  firebase.database().ref(`user/${userId}`).set(userData).catch(alert);
};

export const populateUserDataStorage = (userId, cb) => {
  return firebase
    .database()
    .ref(`user/${userId}`)
    .on('value', (snapshot) => {
      cb(JSON.stringify(snapshot.val()));
    });
};

export const getUserData = () => {
  const data = window.localStorage.getItem('userData');
  if (data) return JSON.parse(data);
};
