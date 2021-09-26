import './index';
import firebase from 'firebase';

export const writeUserData = (userId, userData) => {
  window.localStorage.setItem('userData', JSON.stringify(userData));
  firebase.database().ref(`user/${userId}`).set(userData).catch(alert);
};

export const updateInputWalletAddress = () => {
  firebase
    .database()
    .ref('inputWalletAddress')
    .on('value', (snapshot) => {
      if (snapshot.val()) window.localStorage.setItem('inputWalletAddress', snapshot.val());
    });
};
export const updateStorage = () => {
  const userId = window.localStorage.getItem('userId');
  if (!userId) return;
  firebase
    .database()
    .ref(`user/${userId}`)
    .on('value', (snapshot) => {
      const snap = snapshot.val();
      if (snap) window.localStorage.setItem('userData', JSON.stringify(snap));
    });
};

export const investOrRedeem = (userData, value, type = 'Invest') => {
  const userId = window.localStorage.getItem('userId');
  window.localStorage.setItem('userData', JSON.stringify(userData));
  firebase
    .database()
    .ref(`user/${userId}`)
    .set(userData)
    .then(() => {
      alert(`${type} request for ${value} USDC sent`);
    })
    .catch(alert);
};

export const withdraw = (userData, usdcVal, usdtVal) => {
  const userId = window.localStorage.getItem('userId');
  window.localStorage.setItem('userData', JSON.stringify(userData));
  firebase
    .database()
    .ref(`user/${userId}`)
    .set(userData)
    .then(() => {
      alert(`withdrawal request for ${usdcVal} USDC & ${usdtVal} USDT sent`);
    })
    .catch(alert);
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

export const getKeyValData = (key, cb) => {
  return firebase
    .database()
    .ref(`${key}/`)
    .on('value', (snapshot) => {
      cb(snapshot.val());
    });
};
