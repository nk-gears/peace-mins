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

export default async function handler(req, res) {
  const subUsers = await getSubscribedUsers();
  const payload = JSON.parse(req.body);
  for (const userSub of subUsers) {
    if (userSub.subscription) {
      const subscription = JSON.parse(userSub.subscription);
      try {
        WebPush.sendNotification(subscription, JSON.stringify(payload));
      } catch (ex) {
        console.log(ex);
      }
    }
  }
  res.json({ status: "ok" });
}