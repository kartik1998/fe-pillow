import React from 'react';
import { setHVJwtToken } from '../firebase/kyc';
import { writeUserData } from '../firebase/api';

const CompleteKYC = () => {
  setHVJwtToken();
  return <div>{setTimeout(startKYC(), 2000)}</div>;
};

function startKYC() {
  window.HyperSnapSDK.init(window.localStorage.getItem('jwtToken'), window.HyperSnapParams.Region.India);
  window.HyperSnapSDK.startUserSession();
  const hvDocConfig = new window.HVDocConfig();
  hvDocConfig.setOCRDetails('https://ind-docs.hyperverge.co/v2.0/readKYC', hvDocConfig.DocumentSide.FRONT, {}, {});
  docConfigSetters(hvDocConfig);
  const callback = (HVError, HVResponse) => {
    if (HVError) {
      alert(HVError.errorMsg);
      window.location.reload();
    } else {
      const userId = window.localStorage.getItem('userId');
      if (!userId) {
        alert('Something went wrong, please login again');
        window.localStorage.clear();
        window.location.replace(window.location.origin + '/login');
      }
      const userData = JSON.parse(window.localStorage.getItem('userData'));
      userData.kycDetails.status = 'complete';
      userData.kycDetails.hvKyc = HVResponse.response.result;
      writeUserData(userId, userData);
      window.location.replace(window.location.origin + '/dashboard');
    }
  };
  window.HVDocsModule.start(hvDocConfig, callback);
}

function docConfigSetters(hvDocConfig) {
  hvDocConfig.setShouldShowInstructionPage(true);
  hvDocConfig.docTextConfig.setDocCaptureTitle('Click Aadhaar card front photo');
  hvDocConfig.docTextConfig.setDocInstructions1('Hold your Aadhaar card within the box');
  hvDocConfig.docTextConfig.setDocInstructions3('Avoid glare from lights');
}

export default CompleteKYC;
