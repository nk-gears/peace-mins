import { getUserInfo,addUserMinutes} from '../../../libs/pm5-client'

export default async (req, res) => {
  try {

    const peaceMinutes=req.body;
    const peaceMinId=await addUserMinutes(peaceMinutes);
    peaceMinutes.id=peaceMinId;
    res.status(201).json({status:"ok" ,peaceMinutes});
  } catch (error) {
    // // Handle any errors that occur during the request
    // console.error('Error fetching data from GitHub API:', error);   
    // // Return an error response
    //const response = error.response;
    res.status(500).json({ error: 'Error adding peace minutes' });
  }
};