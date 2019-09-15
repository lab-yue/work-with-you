<script>
  import { Chart, Input, UserList, Auth } from "../components";
  import api from "../api";

  let names = [];
  let users = [];

  async function addOrg(name) {
    const members = await api.fetchOrgMembers(name);
    names = [...names, ...members];
  }

  async function addUser(name) {
    if (names.includes(name)) return;
    names = [...names, name];
  }

  async function submit(data) {
    (data.type === "user" ? addUser : addOrg)(data.name);
  }

  async function fetchAllUser(nameList) {
    const newAdded = nameList.filter(
      name => !users.some(user => user.login === name)
    );
    if (!newAdded.length) return;

    const newAddedData = await Promise.all(
      newAdded.map(name => api.fetchUser(name))
    );
    users = [...users, ...newAddedData];
  }

  $: fetchAllUser(names);
</script>

<style>
  main {
    margin: 2rem;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .panel {
    width: 40%;
  }
</style>

<main class="flex">
  <div class="panel">
    <Input {submit} />
    <UserList {users} />
  </div>
  <Chart data={users} />
</main>
