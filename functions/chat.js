import { db } from '../src/user';


export const sendNewMessage = function sendNewMessage(message, index ){
    const newMessageSent = db.get("mindol").get(index).put(message);
    return newMessageSent._.id;
}