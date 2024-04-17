<script>
  export let message;
  export let sender;

  console.log(sender)

  const messageClass = message.who === sender ? 'sent' : 'received';

  const avatar = `https://i.pravatar.cc/150?u=${message.who}`;
  
  const ts = new Date(message.when);
</script>
<div class={`message ${messageClass}`}>
  <img src={avatar} alt="avatar" />
  <div class="message-text">
    <p>{message.what}</p>
    <time>{ts.toLocaleTimeString()}</time>
  </div>
</div>

