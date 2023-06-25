import axios from 'axios';
import { nanoid } from 'nanoid'




const BASE_URL="http://happy-village.org/depo/api.php/records";
export async function getUserInfo(userId) {
    const resUrl=`${BASE_URL}/pm5_users/${userId}`
    const response = await axios.get(resUrl);
    return response.data;
}


export async function addUserMinutes(payload) {
    const resUrl=`${BASE_URL}/pm5_user_minutes`;
    const response = await axios.post(resUrl,payload);
    return response.data;
}


export async function subscribeUser(payload) {
    
    //const userInfo=await getUserInfo(payload.userId);
    const resUrl=`${BASE_URL}/pm5_push_subscriptions`;
    const subInfo={}
    subInfo.user_id=payload.userId;
    subInfo.subscription=JSON.stringify(payload.subscription);
    subInfo.technology='technology';
    const response = await axios.post(resUrl,subInfo);
    return response.data;
}



export async function getUserPeaceMinutes(userId) {
    const resUrl=`${BASE_URL}/pm5_user_minutes?filter1=user_id,eq,${userId}`;
    const response = await axios.get(resUrl);
    return response.data;
}

export async function getGlobalPeaceMinutes() {
    const resUrl=`${BASE_URL}/pm5_user_minutes`;
    const response = await axios.get(resUrl);
    return response.data;
}

export async function getSubscribedUsers() {
    //?filter1=user_email,eq,kumar.nirmal.v@gmail.com&filter2=user_mobile,eq,+919283181228
    //const paramUrl=`?filter1=user_email,eq,${userEmail}.com&filter2=user_mobile,eq,${userMobile}`;
    const resUrl=`${BASE_URL}/pm5_push_subscriptions`
    const response = await axios.get(resUrl);
    return response.data.records;
}


export async function getUserInfoByUnique({userEmail,userMobile}) {
    //?filter1=user_email,eq,kumar.nirmal.v@gmail.com&filter2=user_mobile,eq,+919283181228
    const paramUrl=`?filter1=user_email,eq,${userEmail}.com&filter2=user_mobile,eq,${userMobile}`;
    const resUrl=`${BASE_URL}/pm5_users${paramUrl}`
    const response = await axios.get(resUrl);
    return response.data;
}



export async function getDataBQuery({query}) {
    const mUrl="http://happy-village.org/depo/dapi.php";
    const resUrl=`${mUrl}`;
    const response = await axios.post(resUrl,{query});
    return response.data;
}

export async function isUserExists({userEmail,userMobile}) {
    //?filter1=user_email,eq,kumar.nirmal.v@gmail.com&filter2=user_mobile,eq,+919283181228
    const paramUrl=`?filter1=user_email,eq,${userEmail}.com&filter2=user_mobile,eq,${userMobile}`;
    const resUrl=`${BASE_URL}/pm5_users${paramUrl}`
    const response = await axios.get(resUrl);
    return response.data;
}


//supports both regular user and org user

export async function addNewUser(payload) {
    payload.id=nanoid(10);
    payload.last_user_seen=0;

    //const data={"id":"add2232311","user_type":1,"user_email":"kumar.nirmal.v@gmail.com","user_fullname":"Nirmal Kumar","user_age":12,"user_mobile":"+919283181228","user_city":"CHENNAI","user_active":1,"last_user_seen":0}
    //?filter1=user_email,eq,kumar.nirmal.v@gmail.com&filter2=user_mobile,eq,+919283181228
    const resUrl=`${BASE_URL}/pm5_users`;
    console.log(payload);
    const response = await axios.post(resUrl,payload);
    return response.data;
}

