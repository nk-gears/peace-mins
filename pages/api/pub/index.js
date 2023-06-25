import WebPush from 'web-push'
import { getSubscribedUsers} from '../../../libs/pm5-client'

const currentVercelURL = process.env.VERCEL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.VERCEL_URL

WebPush.setVapidDetails(
  'https://peace-mins-util.vercel.app/api/sub',
  process.env.PUBLIC_NOTIFICATION_KEY ?? '',
  process.env.PRIVATE_NOTIFICATION_KEY ?? ''
)


export default async function handler(req, res) {

  const subUsers=await getSubscribedUsers();

  const payload = JSON.parse(req.body);
  for(const userSub of subUsers){

    if(userSub.subscription){
      const subscription=JSON.parse(userSub.subscription);
      WebPush.sendNotification(subscription, JSON.stringify({
        "content":payload.content,
        "timestamp": new Date()
      }));
    }
   
  }
    res.json({status:'ok'});
  }
  //res.json({status:'ok;});

  //items:subUsers.records});

