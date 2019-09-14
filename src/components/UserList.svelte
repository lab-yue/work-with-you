<script>
  export let users;
  import User from "./User.svelte";
</script>

<style>
  ul {
    padding: 1rem;
  }
</style>

<ul>
  {#each users as user}
    <User {user} />
  {/each}
</ul>
