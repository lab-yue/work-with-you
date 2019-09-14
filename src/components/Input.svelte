<script>
  export let addUser;

  const handleKeypress = e => {
    if (e.key !== "Enter") return;
    addUser(e.target.value);
  };
</script>

<input type="text" on:keypress={handleKeypress} />
