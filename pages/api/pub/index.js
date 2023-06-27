import WebPush from "web-push";

import { getSubscribedUsers } from "../../../libs/pm5-client";

const currentVercelURL = process.env.VERCEL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.VERCEL_URL;

WebPush.setVapidDetails(
  currentVercelURL,
  process.env.PUBLIC_NOTIFICATION_KEY ?? '',
  process.env.PRIVATE_NOTIFICATION_KEY ?? ''
)

export  default async function POST(req,res) {
  const subUsers = await getSubscribedUsers();
  const payload = req.body;
  console.log(payload);
  
  for (const userSub of subUsers) {
    if (userSub.subscription) {
      const subscription = JSON.parse(userSub.subscription);
      try {
        WebPush.sendNotification(subscription, JSON.stringify(payload)).catch(err => console.log(err));
        console.log("sent to " + userSub.id);
      } catch (ex) {
        console.log(ex.message);
        console.log("failed to sent to " + userSub.id);
      }
    }
  }
  return res.json({ status: "ok" })

}