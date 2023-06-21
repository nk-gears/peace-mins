import { getGlobalPeaceMinutes, getUserPeaceMinutes} from '../../../libs/pm5-client'

export default async (req, res) => {
  try {
    const query = req.query;
    const { userId } = query;
    let totalMinutes = 0;
    let userMinutes=[];
    if(userId=="all"){
      const _userMinutes=await getGlobalPeaceMinutes();
      userMinutes=_userMinutes.records;
    }else{
      const _userMinutes=await getUserPeaceMinutes(userId);
      userMinutes=_userMinutes.records;
    }
    
    totalMinutes=userMinutes.reduce(function (sum, mins) {
      return sum + mins.event_minutes;
  }, 0);

    res.status(200).json({status:"ok" ,totalMinutes});
  } catch (error) {
     res.status(500).json({ error: 'Error fetching data from peace minutes API' });
  }
};