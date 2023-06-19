import { getUserInfo} from '../../../libs/pm5-client'

export default async (req, res) => {
  try {

    const userInfo=await getUserInfo('add223231');
    res.status(200).json({status:"ok" ,userInfo});
  } catch (error) {
    // // Handle any errors that occur during the request
    // console.error('Error fetching data from GitHub API:', error);   
    // // Return an error response
    // res.status(500).json({ error: 'Error fetching data from GitHub API' });
  }
};