import { getUserPeaceMinutes} from '../../../libs/pm5-client'

const getUserMetrics=async (userId)=>{
  // get userType and write the query
  //getDataBQuery

}

export default async (req, res) => {
  try {
    const query = req.query;
    const { userId } = query;

    const userInfo=await getUserPeaceMinutes('1');
    res.status(200).json({status:"ok" ,userInfo});
  } catch (error) {
     res.status(500).json({ error: 'Error fetching data from peace minutes API' });
  }
};