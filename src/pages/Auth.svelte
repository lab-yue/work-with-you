<script>
  import { token } from "../store";

  let valid = true;
  let tokenInput = "";

  const updateToken = () => {
    if (!valid) return;
    localStorage.setItem("token", tokenInput);
    token.set(tokenInput);
  };

  $: valid = tokenInput.length === 40;
</script>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  form {
    width: 100%;
    text-align: center;
  }
  input {
    font-size: 1.5rem;
    width: 50%;
    border: 0;
    padding: 10px 0;
    border-bottom: 4px solid #eee;
  }
  input:focus {
    outline: none;
  }
  button {
    font-size: 1.8rem;
    background-color: #000;
    color: #fff;
    border: 0;
    margin: 1rem 0;
    border-radius: 8px;
  }
  h2 {
    margin: 5rem 0 3rem;
    width: 100%;
    text-align: center;
  }
</style>

<main>
  <h2>Please provide your github access token</h2>

  <form on:submit|preventDefault={updateToken}>
    <input bind:value={tokenInput} type="text" />
    <br />
    {#if valid}
      <button type="submit">Confirm</button>
    {/if}
  </form>

  <p>
    Instructions can be found at
    <a
      href="https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql">
      GitHub Developer Guides
    </a>
  </p>
</main>
