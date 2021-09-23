import './index';
import firebase from 'firebase';

export const writeUserData = (userId, userData) => {
  firebase.database().ref(`user/${userId}`).set(userData).catch(alert);
};
