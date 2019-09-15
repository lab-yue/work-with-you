<script>
  export let user;
  export let select;
  import { fly } from "svelte/transition";

  console.log(Object.values(user.language));
  $: languageTotal = Object.values(user.language).reduce(
    (a, b) => a + b.count,
    0
  );
  $: languages = Object.values(user.language).sort((a, b) =>
    b.name > a.name ? -1 : 1
  );
</script>

<style>
  li {
    transition: 0.3s all ease-in-out;
    padding: 5px 1rem;
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
    border-radius: 8px;
    cursor: pointer;
  }

  li:hover {
    box-shadow: 0 0 5px #9e9e9e;
  }
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
  }
  .user {
    font-size: 1.4rem;
    padding: 1rem;
    flex: 1;
    display: inline-flex;
  }
  .name {
    width: 40%;
    margin-right: 10px;
    overflow: hidden;
    width: 60%;
    text-overflow: ellipsis;
    white-space: pre;
  }
  summary {
    width: 60%;
    display: inline-flex;
  }
</style>

<li on:click={select} transition:fly={{ x: -200, duration: 500 }}>
  <a href={user.url} target="_blank" rel="nofollow noopener">
    <img src={user.avatar} alt="" />
  </a>
  <span class="user">

    <span class="name">{user.name || ' '}</span>
    <summary>
      {#each languages as language}
        <span
          style={`width: ${(language.count / languageTotal) * 100}%; background:${language.color}`} />
      {/each}
    </summary>
  </span>
</li>
