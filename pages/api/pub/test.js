import WebPush from "web-push";

import { getSubscribedUsers } from "../../../libs/pm5-client";

const currentVercelURL = process.env.VERCEL_URL

WebPush.setVapidDetails(
  currentVercelURL,
  process.env.PUBLIC_NOTIFICATION_KEY ?? '',
  process.env.PRIVATE_NOTIFICATION_KEY ?? ''
)



export default async function GET(req,res) {
  const subUsers = await getSubscribedUsers();
  const ts=(new Date()).toISOString();
  const payload={"message":{"title":"108 Days - Peace Minutes","timestamp":ts,"body":"It''s Time to Mark your Minutes","icon":"/android-chrome-192x192.png"}};
  const query = req.query;
  const { userId } = query;

  for (const userSub of subUsers) {
    if (userSub.subscription && userSub.user_id==userId) {
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
