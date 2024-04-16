import { username,user } from '../src/user';


export const signout = function signout() {
  user.leave();
  username.set('');
}
