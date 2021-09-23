import axios from 'axios';

const baseUrl = 'https://fe-pillow-beta-dev-default-rtdb.firebaseio.com';
export const writeUserData = async (userId, userData) => {
  const url = baseUrl + '/' + 'users.json';
  console.log({ userId });
  const data = JSON.stringify({
    userId: { data: userData },
  });
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  try {
    const res = await axios(config);
    console.log({ res });
  } catch (err) {
    console.log(err);
    return err;
  }
};
