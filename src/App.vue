<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/lifeCycle">Lifecycle</router-link> |
      <router-link to="/manageUser">Manage User</router-link>
    </nav>

    <div class="list-view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
    body {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      background-color: #f5f5f5;
    }

    .list-view {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .toggle {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
</style>