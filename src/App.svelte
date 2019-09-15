<script>
  import { Header } from "./components";
  import { Home, Auth } from "./pages";
  import { token } from "./store";
  export let url = "";
</script>

<!-- App.svelte -->
<Header />

{#if $token}
  <Home />
{/if}

{#if !$token}
  <Auth />
{/if}
