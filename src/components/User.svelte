<script>
  export let user;
</script>

<style>
  li {
    height: 3rem;
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
  }
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
  }
</style>

<li>
  <img src={user.avatar} alt="" />
  {user.name}
</li>
