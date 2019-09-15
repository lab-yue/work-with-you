<script>
  export let submit;

  const submitTypes = [`user`, `org`];

  let type = "user";
  let name = "";

  function handleSubmit() {
    submit({ type, name });
  }
</script>

<style>
  input {
    font-size: 1.5rem;
    width: 100%;
    border: 0;
    padding: 10px 0;
    border-bottom: 4px solid #eee;
  }
  form {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    width: 70%;
    position: relative;
  }
  select {
    width: 20%;
    height: 2rem;
    border: 0;
    margin: 0 5px;
    background-color: #eee;
    box-shadow: 0 0 5px #aaa;
    border-radius: 5px;
  }
  div::after {
    transition: 0.3s all cubic-bezier(0.455, 0.03, 0.515, 0.955);
    content: "";
    display: inline-block;
    position: absolute;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
  }
  input:focus {
    outline: none;
  }
  div:focus-within::after {
    width: 100%;
    bottom: 0;
    background-color: #ccc;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <input type="text" bind:value={name} />
  </div>
  <select bind:value={type}>
    {#each submitTypes as submitType}
      <option value={submitType}>{submitType}</option>
    {/each}
  </select>
</form>
