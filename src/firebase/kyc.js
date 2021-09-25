import axios from 'axios';
import { getKeyValData } from './api';
export const checkKYCStatus = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (!userData.kycDetails) {
    alert('KYC details absent in database');
  }
  return userData.kycDetails.status === 'complete';
};

export const setHVJwtToken = (cb) => {
  getKeyValData('jwtToken', cb);
};
// export const getHVJwtToken = async () => {
//   const data = JSON.stringify({
//     appId: process.env.REACT_APP_HV_APP_ID,
//     appKey: process.env.REACT_APP_HV_APP_KEY,
//     expiry: 6000,
//   });
//   const config = {
//     method: 'post',
//     url: 'https://auth.hyperverge.co/login',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data,
//   };
//   try {
//     const res = axios(config);
//     console.log({ res: res.data });
//     return res.data.result.token;
//   } catch (err) {
//     console.log({ err });
//     return err;
//   }
// };
