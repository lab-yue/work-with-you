<script>
  export let users;
  import User from "./User.svelte";
</script>

<ul>
  {#each users as user}
    <User {user} />
  {/each}
</ul>
