import WebPush from 'web-push';
import { subscribeUser} from '../../../libs/pm5-client';
import { nanoid } from 'nanoid';

const currentVercelURL = process.env.VERCEL_URL

WebPush.setVapidDetails(
  currentVercelURL ,
  process.env.PUBLIC_NOTIFICATION_KEY ?? '',
  process.env.PRIVATE_NOTIFICATION_KEY ?? ''
)


export default async function handler(req, res) {
  const device = req.headers['user-agent'];

  if (req.method === 'POST') {

    const payload = JSON.parse(req.body);
    payload.device_id=nanoid(10);
    await subscribeUser(payload);
    console.log('New user has subscribed!', payload);
    res.status(201).json({payload});

  } else {
    res.send({currentVercelURL,pubKey:process.env.PUBLIC_NOTIFICATION_KEY});
  }
}
 


