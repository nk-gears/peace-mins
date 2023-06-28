import { getUserInfo,saveUserInfo,triggerNotification} from '../../../libs/pm5-client'

export default async (req, res) => {
  try {
    const query = req.query;
    const { userId } = query;

    const payload = JSON.parse(req.body);
    console.log(payload)
    console.log(req.method)

    if(req.method==="PUT"){
      
      const userInfo=await getUserInfo(userId);
      userInfo.push_enabled=payload.push_enabled;
      await saveUserInfo(userId,userInfo);
      if(payload.push_enabled===1){
        await triggerNotification(userId);
      }
    }
//    
    res.status(200).json({status:"ok" ,userInfo});
  } catch (error) {
    // // Handle any errors that occur during the request
    // console.error('Error fetching data from GitHub API:', error);   
    // // Return an error response
    // res.status(500).json({ error: 'Error fetching data from GitHub API' });
  }
};