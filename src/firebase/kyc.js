export const checkKYCStatus = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (!userData.kycDetails) {
    alert('KYC details absent in database');
  }
  return userData.kycDetails.status === 'complete';
};
