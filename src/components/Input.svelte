<script>
  export let addUser;

  const handleKeypress = e => {
    if (e.key !== "Enter") return;
    addUser(e.target.value);
  };
</script>

<style>
  input {
    font-size: 1.5rem;
    width: 100%;
    border: 0;
    padding: 10px 0;
    border-bottom: 4px solid #eee;
  }
  div {
    width: 100%;
    position: relative;
    display: inline-flex;
  }
  div::after {
    transition: 0.3s all cubic-bezier(0.455, 0.03, 0.515, 0.955);
    content: "";
    display: inline-block;
    position: absolute;
    margin: 0 auto;
    bottom: 0;
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

<div>
  <input type="text" on:keypress={handleKeypress} />
</div>
