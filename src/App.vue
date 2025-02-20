<template>
  <div class="list-view">
    <!-- <LifeCycleDemo v-if="showComponent"/> -->
    <DemoUpdated /> 
    <!-- <button class="toggle" @click="toggleComponent">Deptroy</button> -->
  </div>
</template>

<script>
  // import UserList from './components/UserList.vue';
  // import LifeCycleDemo from './lifecycle/lifecycle.vue'; 
  import DemoUpdated from './lifecycle/demoUpdated.vue';

  export default {
    components: { 
      // UserList 
      // LifeCycleDemo,
      DemoUpdated
    },
    data() {
    return {
      showComponent: true
    };
  },
    methods: {
      toggleComponent() {
        this.showComponent = !this.showComponent;
      }
    }
  };
</script>

<style>
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 20px;
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