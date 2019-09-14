<script>
  import { Title, Chart, Input, UserList } from "./components";
  import api from "./api";

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
  .flex {
    display: flex;
    justify-content: space-between;
  }
</style>

<Title />

<div class="flex">
  <div>
    <Input {addUser} />
    <UserList {users} />
  </div>
  <Chart data={users} />
</div>
