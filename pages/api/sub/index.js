import WebPush from 'web-push'
import { subscribeUser} from '../../../libs/pm5-client'


const currentVercelURL = process.env.VERCEL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.VERCEL_URL

// WebPush.setVapidDetails(
//   currentVercelURL ?? 'https://peace-mins-util.vercel.app',
//   process.env.PUBLIC_NOTIFICATION_KEY ?? '',
//   process.env.PRIVATE_NOTIFICATION_KEY ?? ''
// )


export default async function handler(req, res) {
  const device = req.headers['user-agent'];

  if (req.method === 'POST') {

    const payload = JSON.parse(req.body);
    payload.device=device;
    await subscribeUser(payload);
    console.log('New user has subscribed!', payload);
    res.status(201).json({payload});

  } else {
    res.send({currentVercelURL,pubKey:process.env.PUBLIC_NOTIFICATION_KEY});
  }
}
 


// web-push send-notification  \
// --endpoint=https://fcm.googleapis.com/fcm/send/dFAQ_8-FaHg:APA91bGNx1Yk6brWSCm5HlVrJakSOo_8wPpEoA0-8Q2RpuU523ZMuqBF6FfZ6-UXmtqdQsX_u5-ZCalHVpsa4N8dMceLpOxgyulXAwDWozMTHT6lLm8Ye2D2s9MSVclxbcmgXsbcGbAy \
// --key=BISdx2XWlaV4XJuTiy2FnTgRO5JkWWlsQRBajEcRxFUSHEe15sJ2gwIyfu29eTBsUguZWWiSJYYSnLvZw69o9Dc \
// --auth=n5nt9tqIMwdshchXlHXL7w \
// --vapid-subject=https://peace-mins-util.vercel.app \
// --vapid-pubkey=BFZ-dGxNqg0A15IIR2-XAxn0wUKyVID9uoMuBgifai_P4eNGTNFMjS2_ly99v_WNr_4ev_5Rqb5-SU99q2Ari4o \
// --vapid-pvtkey=XELyGjIvBX1NQPfBckaao8tRsmRzkleRvzbaWZgIGRw \
// --payload=Hello12333