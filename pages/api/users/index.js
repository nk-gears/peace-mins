import { addNewUser, getUserInfo} from '../../../libs/pm5-client'

export default async (req, res) => {
  try {
    const userInfo=req.body;
    await addNewUser(userInfo);
    res.status(201).json({userInfo});
  } catch (error) {
    // // Handle any errors that occur during the request
    // console.error('Error fetching data from GitHub API:', error);   
    // // Return an error response
     res.status(500).json({ error: 'Error creating new user' });
  }
};