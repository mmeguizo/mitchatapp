import { user } from '../src/user';


export const login = function login(username,password) {
  user.auth(username, password, ({ err }) => err && alert(err));
}

export const signup = function signup(username,password) {
  user.create(username, password, ({ err }) => {
    if (err) {
      alert(err);
    } else {
      login();
    }
  });
}

