<script>
import { login, signup } from '../functions/login';
  // import { user } from './user';
let username;
let password;

function logins() {
 login(username, password);

}

function signups() {
 signup(username, password);
}


</script>

<label for="username">Username</label>
<input name="username" bind:value={username} minlength="3" maxlength="16" />

<label for="password">Password</label>
<input name="password" bind:value={password} type="password" />

<button class="login" on:click={logins}>Login</button>
<button class="login"  on:click={signups}>Sign Up</button>
  
