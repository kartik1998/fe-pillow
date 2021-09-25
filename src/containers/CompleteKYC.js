import React from 'react';
import { setHVJwtToken } from '../firebase/kyc';

const CompleteKYC = () => {
  setHVJwtToken((token) => {
    console.log({ token });
  });
  return <div>completeKYC</div>;
};

export default CompleteKYC;
