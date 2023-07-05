

const userKeys={"endpoint":"https://fcm.googleapis.com/fcm/send/fD89lkkpW5o:APA91bGRtoRIez-ZLffBchHpIs6tAsR9uy9nKIPPJf_EuTv3r1a_PWXuxkj01UZhxm4l3x1LhJAIp-yVHt7TC84_POC3ExGjtAtgVqf7yhrnN1mBNkVgmo_S2-sx5xbH63M_hNH55vwv","expirationTime":null,"keys":{"p256dh":"BEAtxn5S45zAN8es3OnQieWcrgdDpXdMygWAg_H3oQ1nwvbDnKw-3k3d8IX1gkffR4sTSkxdIjDdYe2qO3SoL-4","auth":"TaL3S9AWSLct55vhdSRd-A"}}

const keys={
    "publicKey": "BKQb1HqZ0puDRCX0UnVG7SGF7r2yvBjY99IOdOwhVsF2YaQi6x_RemC8enkPZLVIMNj36wE3tQ3o0ejFthrtI-I",
    "privateKey": "jH2iyfNubo0lKGPGChM1ycgbQ7KgVhwDboePeGmmnGk"
  }
  
const cmd1=`
web-push send-notification  \
--endpoint=${userKeys.endpoint} \
--key=${userKeys.keys.p256dh} \
--auth=${userKeys.keys.auth} \
--vapid-subject=https://peacemins.nkdews.me \
--vapid-pubkey=${keys.publicKey} \
--vapid-pvtkey=${keys.privateKey} \
--payload='{"message":{"title":"108 Days - Peace Minutes","timestamp":"2023-06-26T06:35:00.620Z","body":"It''s Time to Mark your Minutes","icon":"/android-chrome-192x192.png"}}'`

console.log(cmd1)