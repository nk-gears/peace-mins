import WebPush from "web-push";
import axios from 'axios';
import { getSubscribedUsers } from "../../../libs/pm5-client";

const currentVercelURL = process.env.VERCEL_URL

// WebPush.setVapidDetails(
//   currentVercelURL,
//   process.env.PUBLIC_NOTIFICATION_KEY ?? '',
//   process.env.PRIVATE_NOTIFICATION_KEY ?? ''
// )


let data = `{
  "url":"${currentVercelURL}/mark-minutes",
	"app_id": "7145473f-7782-4f88-a0d6-a5a81fda6092",
	"contents": {
		"en": "It's time to mark your Peace Minutes"
	},
  "url":"https://www.peaceminutes.org/mark-minutes",
	"included_segments": ["Subscribed Users"]

}`;

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://onesignal.com/api/v1/notifications',
  headers: { 
    'Content-Type': 'application/json; charset=utf-8', 
    'Authorization': 'Basic YTY4MDEwZWItZGM5Zi00YTE2LWFiZTUtMGQyY2RkNjdjMTJi'
  },
  data : data
};

export  default async function POST(req,res) {
  // const subUsers = await getSubscribedUsers();
  // const payload = req.body;
  // console.log(payload);
  console.log(data);
  const resp=await axios.request(config);
  //console.log(resp);
  
  // for (const userSub of subUsers) {
  //   if (userSub.subscription) {
  //     const subscription = JSON.parse(userSub.subscription);
  //     try {
  //       WebPush.sendNotification(subscription, JSON.stringify(payload)).catch(err => console.log(err));
  //       console.log("sent to " + userSub.id);
  //     } catch (ex) {
  //       console.log(ex.message);
  //       console.log("failed to sent to " + userSub.id);
  //     }
  //   }
  // }
  return res.json({ status: "ok" })

}