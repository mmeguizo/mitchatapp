import { user } from '../src/user';


export const login = function login(username,password) {
  user.auth(username, password, ({ err }) => err && alert(err + ' or try again logging in'));
}

export const signup = function signup(username,password) {
  user.create(username, password, ({ err }) => {
    if (err) {
      alert(err + ' or try loggin in');
    } else {
      login();
    }
  });
}

