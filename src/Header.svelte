<script>
  import { username } from './user';
  import { signout } from '../functions/header';

 function UserSignout(){
  signout()
  }




</script>

<header>
<h1>SUNN</h1>
  {#if $username}
    <div class="user-bio">
      <span>Hi <strong>{$username[0].toUpperCase() + $username.slice(1).toLowerCase()}</strong></span>
      <img src={`https://i.pravatar.cc/150?u=${$username}`} alt="avatar" /> 
    </div>
    <button class="signout-button" on:click={UserSignout}>Sign Out</button>
    {:else}

      <h3>Open Source Chat</h3>
  {/if}
</header>

