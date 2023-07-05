curl --include \
     --request POST \
     --header "Content-Type: application/json; charset=utf-8" \
     --header "Authorization: Basic YTY4MDEwZWItZGM5Zi00YTE2LWFiZTUtMGQyY2RkNjdjMTJi" \
     --data-binary "{\"app_id\": \"7145473f-7782-4f88-a0d6-a5a81fda6092\",
\"contents\": {\"en\": \"English Message\"},
\"delayed_option\":\"timezone\",
\"send_after\": \"2023-07-05 08:00:00 GMT+0530\",
\"included_segments\": [\"Subscribed Users\"]}
#\"url\": \"https://nkdews.me\",
#\"buttons\": [{\"id\": \"id1\", \"text\": \"button1\", \"icon\": \"ic_menu_share\"}, {\"id\": \"id2\", \"text\": \"button2\", \"icon\": \"ic_menu_send\"}]}" \
     https://onesignal.com/api/v1/notifications



curl --request POST \
     --url https://onesignal.com/api/v1/notifications \
     --header 'Authorization: Basic YTY4MDEwZWItZGM5Zi00YTE2LWFiZTUtMGQyY2RkNjdjMTJi' \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
	"app_id": "7145473f-7782-4f88-a0d6-a5a81fda6092",
	"included_segments": [
		"Subscribed Users"
	],
	"contents": {
		"en": "Mark your Peace Minutes now",
		"ta": "Tamil"
	},
     "data": {
          "notificationType": "news-feature"
      },
     "url": "https://nkdews.me",
	"name": "INTERNAL_CAMPAIGN_NAME",
   "action": "like-button",
	"buttons": [{
			"action": "like-button",
			"title": "Like",
			"icon": "http://i.imgur.com/N8SN8ZS.png",
			"url": "https://peaceminutes.org"
		},
		{
			"action": "read-more-button",
			"title": "Read more",
			"icon": "http://i.imgur.com/MIxJp1L.png",
			"url": "https://nkdews.me"
		}
	]
}
'