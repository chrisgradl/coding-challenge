const URL = 'https://staging.helloagain.at/api/v1/clients/5189/bounties';

export interface Reward {
  name: string;
  needed_points: number;
  id: string;
  image: string;
}

async function fetchRewards(): Promise<Reward[]> {
  let res: Response;

  res = await fetch(URL);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Server Error: ' + res.status);
  }
}

function fetchMockRewards(): Promise<any> {
  const data = require('../MockData.json');

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(data);
      //reject(new Error('throwing mock error'));
    }, 1000),
  );
}

export default __DEV__ ? fetchMockRewards : fetchRewards;
