<script>
import { login, signup } from '../functions/login';
  // import { user } from './user';
let username;
let password;

function logins() {


  console.log(username, password)

  if (username && password) {
    if (username.trim().length >= 5 && username.trim().length <= 20) {
      if (password.trim().length >= 5) {
        login(username.trim(), password.trim());
      } else {
        alert('Password must be at least 5 characters long');
      }
    } else {
      alert('Username must be at least 5 and not more than 20 characters long');
    }
  } else {
    alert('Please fill in both fields');
  }
}

function signups() {

  console.log(username, password)

  if (username && password) {
    if (username.trim().length >= 5 && username.trim().length <= 20) {
      if (password.trim().length >= 5) {
        signup(username.trim(), password.trim());
      } else {
        alert('Password must be at least 5 characters long');
      }
    } else {
      alert('Username must be at least 5 and not more than 20 characters long');
    }
  } else {
    alert('Please fill in both fields');
  }
}
</script>

<label for="username">Username</label>
<input name="username" bind:value={username} minlength="5" maxlength="20" />

<label for="password">Password</label>
<input name="password" bind:value={password} type="password" minlength="5" />

<button class="login" on:click={logins}>Login</button>
<button class="login" on:click={signups}>Sign Up</button>

